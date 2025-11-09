import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideWrapperProps {
  children: ReactNode;
  slideNumber: number;
  direction?: number;
}

export default function SlideWrapper({ children, slideNumber, direction = 0 }: SlideWrapperProps) {
  return (
    <motion.div
      key={slideNumber}
      initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="w-full h-full flex flex-col justify-center items-center px-16 py-12 relative"
    >
      {children}
      
      {/* Slide Number */}
      <div className="absolute bottom-8 right-12 text-cyan-400/60 text-sm font-medium">
        {slideNumber} / 11
      </div>
    </motion.div>
  );
}

