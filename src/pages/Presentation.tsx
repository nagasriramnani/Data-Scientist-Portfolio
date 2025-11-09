import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PresentationBackground from '@/components/PresentationBackground';
import SlideWrapper from '@/components/SlideWrapper';

// Import all slides
import Slide1 from '@/slides/Slide1';
import Slide2 from '@/slides/Slide2';
import Slide3 from '@/slides/Slide3';
import Slide4 from '@/slides/Slide4';
import Slide5 from '@/slides/Slide5';
import Slide6 from '@/slides/Slide6';
import Slide7 from '@/slides/Slide7';
import Slide8 from '@/slides/Slide8';
import Slide9 from '@/slides/Slide9';
import Slide10 from '@/slides/Slide10';

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0e1a]">
      <PresentationBackground />

      {/* Back to Portfolio Button */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          className="bg-[#1a1f35]/90 backdrop-blur-sm border-[#2554C7] text-cyan-400 hover:bg-[#2554C7]/20 hover:text-cyan-300"
          asChild
        >
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          variant="outline"
          size="icon"
          className="bg-[#1a1f35]/90 backdrop-blur-sm border-[#2554C7] text-cyan-400 hover:bg-[#2554C7]/20 disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Progress Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-[#00e5ff] w-8 shadow-lg shadow-cyan-500/50'
                  : 'bg-gray-600 hover:bg-[#2554C7]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          variant="outline"
          size="icon"
          className="bg-[#1a1f35]/90 backdrop-blur-sm border-[#2554C7] text-cyan-400 hover:bg-[#2554C7]/20 disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Keyboard Hint */}
      <div className="fixed bottom-4 right-4 z-50 text-xs text-cyan-400/80 bg-[#1a1f35]/80 backdrop-blur-sm px-3 py-2 rounded border border-[#2554C7]/30">
        Use ← → arrow keys or space to navigate
      </div>

      {/* Slide Content */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <SlideWrapper key={currentSlide} slideNumber={currentSlide + 1} direction={direction}>
            <CurrentSlideComponent />
          </SlideWrapper>
        </AnimatePresence>
      </div>
    </div>
  );
}

