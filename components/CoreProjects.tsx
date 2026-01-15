
import React from 'react';
import { motion } from 'framer-motion';
import { CORE_PROJECTS } from '../constants';
import { ChevronRight, ArrowRight, TrendingUp } from 'lucide-react';

export const CoreProjects: React.FC = () => {
  return (
    <section id="core-projects" className="py-24">
      <div className="text-center mb-10">
        <h2 className="text-[2.2rem] font-bold text-[#9c533b] brush-underline inline-block">
          核心项目｜深度展开
        </h2>
        <p className="mt-4 text-[1rem] text-gray-500">每一个项目背后都藏着一条弯路</p>
      </div>

      <div className="space-y-24 mt-10">
        {CORE_PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/60 shadow-2xl"
          >
            {/* Removed border-l-8 border-[#FF8EB2] and pl-6 to remove the pink square/bar */}
            <h3 className="text-[1.8rem] font-bold text-gray-800 mb-8">
              {project.title}
            </h3>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1 space-y-8">
                <div>
                  <h4 className="flex items-center gap-2 text-[1.1rem] font-bold text-gray-800 mb-4">
                    {/* Keep yellow square/bar here */}
                    <span className="w-1.5 h-5 bg-[#FFD93D] rounded-sm shrink-0" />
                    项目背景
                  </h4>
                  <p className="text-[1rem] text-gray-600 leading-[1.7] font-normal">{project.bg}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Linear Solution Box */}
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative group overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                    <TrendingUp className="absolute -bottom-2 -right-2 w-16 h-16 text-gray-200 opacity-20 -rotate-12 group-hover:scale-110 transition-transform" />
                    <span className="block text-[1rem] font-bold text-gray-400 uppercase tracking-widest mb-2 relative z-10">直线方案 (常规)</span>
                    <p className="text-[0.95rem] text-gray-500 font-medium leading-[1.7] relative z-10">{project.badSolution}</p>
                  </div>
                  {/* Winding Path Box */}
                  <div className="bg-[#FF8EB2]/5 p-6 rounded-2xl border border-[#FF8EB2]/20 relative group overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                    <ArrowRight className="absolute -bottom-2 -right-2 w-16 h-16 text-[#FF8EB2] opacity-10 -rotate-12 group-hover:scale-110 transition-transform" />
                    <span className="block text-[1rem] font-bold text-[#9c533b] uppercase tracking-widest mb-2 relative z-10">我的弯路选择</span>
                    <p className="text-[0.95rem] text-[#9c533b] font-medium leading-[1.7] relative z-10">{project.goodSolution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-[1.1rem] font-bold text-gray-800 mb-4">
                    {/* Keep yellow square/bar here */}
                    <span className="w-1.5 h-5 bg-[#FFD93D] rounded-sm shrink-0" />
                    核心机制设计
                  </h4>
                  <ul className="space-y-3">
                    {project.mechanisms.map((mech, mIdx) => {
                      const parts = mech.split('：');
                      const keyword = parts[0];
                      const description = parts[1] || '';
                      return (
                        <li key={mIdx} className="text-gray-600 text-[1rem] leading-[1.7]">
                          <span className="font-normal text-gray-500">
                            <strong className="font-medium text-gray-800">{keyword}：</strong>
                            {description}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {project.results.length > 0 && (
                  <div className="bg-gradient-to-br from-[#FFF0F5] to-white p-6 rounded-2xl flex flex-wrap gap-8 border border-[#FF8EB2]/10 shadow-sm">
                    {project.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex-1 min-w-[100px] text-center">
                        <span className="block text-[1.4rem] font-bold text-[#FF8EB2]">{res.value}</span>
                        <span className="text-[0.85rem] text-gray-400 font-bold uppercase tracking-wider">{res.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:w-72 shrink-0 flex flex-col items-center">
                <a
                  href={project.h5Url}
                  target="_blank"
                  className="group relative w-full aspect-[9/16] bg-black border-[6px] border-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden cursor-pointer"
                >
                  <div className="w-full h-full overflow-y-auto no-scrollbar">
                    <img src={project.h5Img} alt="Preview" className="w-full h-auto" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center gap-2 text-white font-bold text-[0.9rem] opacity-0 group-hover:opacity-100 transition-opacity">
                    了解更多 <ChevronRight className="w-4 h-4" />
                  </div>
                </a>
                <p className="mt-4 text-[0.9rem] text-gray-400 font-medium">点击进入真实场景体验</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
