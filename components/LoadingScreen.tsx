import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    // Simulate a minimum loading time for the "ritual" feel
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      className="fixed inset-0 z-[99999] bg-[#fffbf5] flex flex-col items-center justify-center overflow-hidden touch-none"
    >
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

      <div className="relative flex flex-col items-center z-10">
        {/* Logo Section */}
        <div className="relative mb-12 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[2.4rem] md:text-[2.8rem] font-bold text-[#9c533b] tracking-tight mb-2"
          >
            WanLu <span className="font-light text-gray-300 mx-1">|</span> Portfolio
          </motion.h1>
          
          {/* Thick Yellow Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="h-[10px] bg-[#FFD93D] rounded-full opacity-60"
          />
        </div>

        {/* Progress Section */}
        <div className="flex flex-col items-center gap-8">
          {/* Gradient Progress Bar */}
          <div className="w-48 h-[2px] bg-gray-100/50 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-[#FFD93D] to-[#FF8EB2]"
            />
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[0.75rem] font-bold text-[#FF8EB2] uppercase tracking-[0.5em]"
          >
            LOADING JOURNEY...
          </motion.p>
        </div>
      </div>

      {/* Decorative Circles */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-[#FFD93D] rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FF8EB2] rounded-full blur-[100px] pointer-events-none"
      />
    </motion.div>
  );
};
