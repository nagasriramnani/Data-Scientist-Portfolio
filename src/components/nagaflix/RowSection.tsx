import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RowSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function RowSection({ title, children, className }: RowSectionProps) {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = useState(false);

    const handleClick = (direction: 'left' | 'right') => {
        setIsMoved(true);
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo =
                direction === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className={cn("space-y-3 md:space-y-4 my-10 pl-4 md:pl-12 group relative z-30", className)}>
            <h2 className="text-lg md:text-xl font-bold text-gray-100 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 group/title">
                {title}
                <span className="text-xs font-semibold text-cyan-400 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-300">
                    Explore All &gt;
                </span>
            </h2>

            <div className="relative group/row">
                <ChevronLeft
                    className={cn(
                        "absolute top-0 bottom-0 left-0 z-40 m-auto h-full w-12 cursor-pointer opacity-0 transition hover:bg-black/50 group-hover/row:opacity-100 text-white p-2",
                        !isMoved && "hidden"
                    )}
                    onClick={() => handleClick('left')}
                />

                <div
                    ref={rowRef}
                    className="flex items-center space-x-2 md:space-x-4 overflow-x-scroll scrollbar-hide pb-8 pt-4 -ml-4 pl-4 md:pl-12 hide-scrollbar scroll-smooth"
                >
                    {children}
                </div>

                <ChevronRight
                    className="absolute top-0 bottom-0 right-0 z-40 m-auto h-full w-12 cursor-pointer opacity-0 transition hover:bg-black/50 group-hover/row:opacity-100 text-white p-2"
                    onClick={() => handleClick('right')}
                />
            </div>
        </div>
    );
}
