
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-center relative">
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        src="https://i.ibb.co/KckkyMS7/image.png"
        alt="Product Journey"
        className="w-[85%] max-w-2xl mb-12 drop-shadow-2xl"
      />
      
      <button 
        onClick={scrollToAbout}
        className="group flex flex-col items-center gap-4 cursor-pointer outline-none"
      >
        <span className="text-[0.85rem] font-bold text-[#FF8EB2] tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
          开始探索之旅
        </span>
        <div className="w-6 h-10 border-2 border-[#FF8EB2] rounded-full relative flex justify-center p-1 opacity-80 group-hover:opacity-100">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-[#FF8EB2] rounded-full"
          />
        </div>
      </button>
    </section>
  );
};
