
import React from 'react';
import { motion } from 'framer-motion';
import { METHODS } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 text-center">
      <div className="mb-16 flex flex-col items-center">
        <span className="text-[0.75rem] font-black text-[#FF8EB2] uppercase tracking-[0.4em] mb-4 opacity-70">
          Methodology
        </span>
        <h2 className="text-[2.2rem] font-bold text-[#9c533b] leading-tight relative">
          弯路方法论
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#FFD93D] rounded-full" />
        </h2>
        <p className="mt-12 text-gray-500 font-medium text-[1.1rem] max-w-2xl mx-auto leading-relaxed">
          我的弯路并非是对效率的妥协，而是一种更长远的选择。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {METHODS.map((method, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ y: -10, boxShadow: "0 30px 60px -12px rgba(255,142,178,0.15)" }}
            className="relative glass-card p-10 rounded-[2rem] text-left group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6">
              <span className="text-[5rem] font-black text-[#FFD93D] opacity-[0.08] group-hover:opacity-20 transition-all duration-500">
                {method.num}
              </span>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-1.5 bg-[#FFD93D] rounded-full mb-8 group-hover:w-20 transition-all duration-500" />
              <h3 className="text-[1.5rem] font-black text-gray-900 mb-5 leading-tight">{method.title}</h3>
              <p className="text-[1rem] text-gray-500 leading-relaxed font-medium">{method.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
