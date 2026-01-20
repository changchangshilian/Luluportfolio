import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial from-pink-50/50 via-transparent to-transparent opacity-60 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        <div className="relative mb-16">
          <motion.img
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="https://pub-82355f44706248d19932b146a7c892b2.r2.dev/lulupicture.dpdns.org/%E6%88%91%E7%9A%84%E9%A6%96%E9%A1%B5.png"
            alt="Product Journey"
            className="w-[90%] max-w-2xl drop-shadow-[0_32px_64px_rgba(255,142,178,0.2)]"
            onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x600?text=Product+Portfolio"; }}
          />
          {/* Subtle floating elements could be added here */}
        </div>
        
        <motion.button 
          onClick={scrollToAbout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex flex-col items-center gap-6 cursor-pointer outline-none"
        >
          <span className="text-[0.75rem] font-black text-[#FF8EB2] tracking-[0.4em] uppercase opacity-60 group-hover:opacity-100 transition-all">
            开始探索之旅
          </span>
          <div className="w-8 h-12 border-[3px] border-[#FF8EB2]/30 rounded-full relative flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[#FF8EB2] rounded-full"
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
};