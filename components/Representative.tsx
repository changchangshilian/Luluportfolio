
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
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] shadow-md border-t-4 border-[#6BCB77] overflow-hidden flex flex-col"
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
              
              <div className="w-full h-px bg-gray-100 mb-6"></div>
              
              <p className="text-[0.95rem] text-gray-700 font-normal leading-[1.7]">
                <span className="font-bold">数据：</span>{project.data}
              </p>
            </div>
            
            <div className="px-8 pb-8 mt-auto flex justify-end">
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-1 text-[#9c533b] font-bold text-[0.9rem] group"
              >
                立即前往 <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
