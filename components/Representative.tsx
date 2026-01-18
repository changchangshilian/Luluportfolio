import React from 'react';
import { motion } from 'framer-motion';
import { QUICK_PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

export const Representative: React.FC = () => {
  return (
    <section id="representative" className="py-24">
      <div className="text-center mb-10">
        <h2 className="text-[2.2rem] font-bold text-[#9c533b] brush-underline inline-block">
          代表项目｜快速浏览
        </h2>
        <p className="mt-4 text-[1rem] text-gray-500">更多项目经历与落地成果展示</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {QUICK_PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.08)" }}
            className="glass-card rounded-[2rem] shadow-xl overflow-hidden flex flex-col group transition-all duration-300"
          >
            <div className="p-8 pb-4">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1.5 bg-[#FFD93D] rounded-lg text-[0.85rem] font-bold text-[#9c533b]">
                  {project.tag}
                </span>
                <h4 className="text-[1.1rem] font-bold text-gray-800">{project.title}</h4>
              </div>
              
              <p className="text-[1rem] text-gray-600 font-normal leading-[1.7] mb-6">
                {project.desc}
              </p>
              
              <div className="w-full h-px bg-gray-100/50 mb-6 group-hover:bg-[#FF8EB2]/10 transition-colors"></div>
              
              <p className="text-[0.95rem] text-gray-700 font-normal leading-[1.7]">
                <span className="font-bold text-[#9c533b]/80">数据反馈：</span>{project.data}
              </p>
            </div>
            
            <div className="px-8 pb-8 mt-auto flex justify-end">
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-1 text-[#9c533b] font-bold text-[0.9rem] group/btn"
              >
                立即前往 <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-[#FF8EB2]" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};