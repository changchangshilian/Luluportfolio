
import React from 'react';
import { motion } from 'framer-motion';
import { METHODS } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 text-center">
      <div className="mb-10 inline-block">
        <h2 className="text-[2.2rem] font-bold text-[#9c533b] brush-underline">
          关于我｜弯路方法论
        </h2>
        <p className="mt-4 text-[1rem] text-gray-500 font-medium">我的弯路不是低效，而是寻找最优解的方法</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-10">
        {METHODS.map((method, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8 }}
            className="relative bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/50 overflow-hidden group"
          >
            <span className="absolute -bottom-6 -right-4 text-[5rem] font-bold text-[#FFD93D] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              {method.num}
            </span>
            <h3 className="text-[1.4rem] font-bold text-[#9c533b] mb-4 relative z-10">{method.title}</h3>
            <p className="text-[1rem] text-gray-600 leading-[1.7] font-normal relative z-10">{method.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
