"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;
const INITIAL_FRAME = 0;

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    // Load all images on mount
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];
        for (let i = INITIAL_FRAME; i < FRAME_COUNT; i++) {
            const img = new Image();
            const frameStr = i.toString().padStart(3, "0");
            img.src = `/sequence/frame_${frameStr}_delay-0.066s.png`;

            // Unblock loading screen as soon as the first frame loads
            if (i === INITIAL_FRAME) {
                img.onload = () => {
                    setLoaded(true);
                };
            }

            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress 0-1 to frame index 0-119
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!loaded || !canvasRef.current) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        let frameToDraw = Math.floor(latest);
        let img = images[frameToDraw];

        // Find the nearest loaded image to draw if the target isn't loaded yet
        if (img && !img.complete) {
            for (let i = frameToDraw; i >= 0; i--) {
                if (images[i] && images[i].complete) {
                    img = images[i];
                    break;
                }
            }
        }

        if (!img || !img.complete) return;

        // Draw with object-fit: cover logic
        const canvas = canvasRef.current;

        // Match internal canvas resolution to actual display size for clarity
        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw background color (optional if canvas is fully covered, but good for safety)
        ctx.fillStyle = "#0A0A0A";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    });

    // Initial draw once loaded
    useEffect(() => {
        if (loaded && canvasRef.current && images.length > 0) {
            const img = images[0];
            if (!img || !img.complete) return;
            const ctx = canvasRef.current.getContext("2d");
            if (!ctx) return;

            const canvas = canvasRef.current;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#0A0A0A";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShift_x,
                centerShift_y,
                img.width * ratio,
                img.height * ratio
            );
        }
    }, [loaded, images]);

    // Handle window resize appropriately
    useEffect(() => {
        const handleResize = () => {
            if (!loaded || !canvasRef.current || images.length === 0) return;
            const currentFrame = Math.floor(frameIndex.get());
            let img = images[currentFrame] || images[0];

            if (img && !img.complete) {
                for (let i = currentFrame; i >= 0; i--) {
                    if (images[i] && images[i].complete) {
                        img = images[i];
                        break;
                    }
                }
            }

            if (!img || !img.complete) return;

            const canvas = canvasRef.current;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [loaded, images, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[#0A0A0A]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!loaded && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]">
                        <div className="text-white text-lg font-jetbrains-mono tracking-widest animate-pulse">
                            INITIALIZING AI UNIVERSE...
                        </div>
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay base to ensure text readability */}
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                <Overlay progress={scrollYProgress} />
            </div>
        </div>
    );
}
