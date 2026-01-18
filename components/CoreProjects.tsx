import React from 'react';
import { motion } from 'framer-motion';
import { CORE_PROJECTS } from '../constants';
import { ChevronRight, ArrowRight, TrendingUp, Info } from 'lucide-react';

export const CoreProjects: React.FC = () => {
  return (
    <section id="core-projects" className="py-32">
      <div className="text-center mb-20">
        <h2 className="text-[2.5rem] font-black text-[#9c533b] brush-underline inline-block px-2">
          核心项目｜深度展开
        </h2>
        <p className="mt-6 text-gray-400 font-medium tracking-wide">每一个项目背后都藏着一条弯路</p>
      </div>

      <div className="space-y-32">
        {CORE_PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="glass-card rounded-[2.5rem] p-8 lg:p-14 shadow-2xl shadow-pink-100/20"
          >
            <div className="flex flex-col lg:flex-row gap-16 relative">
              <div className="flex-1 flex flex-col">
                <div className="mb-10">
                  <span className="text-[0.75rem] font-black text-[#FF8EB2] uppercase tracking-[0.3em] mb-2 block">Project 0{idx + 1}</span>
                  <h3 className="text-[2rem] font-black text-gray-900 leading-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-10 flex-1">
                  <div className="relative pl-6 border-l-2 border-[#FFD93D]/30">
                    <h4 className="flex items-center gap-2 text-[1rem] font-black text-gray-900 mb-3">
                      项目背景
                    </h4>
                    <p className="text-[0.95rem] text-gray-600 leading-relaxed font-medium">{project.bg}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-gray-50/50 p-6 rounded-[1.5rem] border border-gray-100 relative group transition-all hover:bg-white hover:shadow-lg">
                      <TrendingUp className="absolute top-4 right-4 w-5 h-5 text-gray-300" />
                      <span className="block text-[0.75rem] font-black text-gray-400 uppercase tracking-widest mb-3">常规直线方案</span>
                      <p className="text-[0.9rem] text-gray-500 font-medium leading-relaxed">{project.badSolution}</p>
                    </div>
                    <div className="bg-[#FF8EB2]/5 p-6 rounded-[1.5rem] border border-[#FF8EB2]/10 relative group transition-all hover:bg-white hover:shadow-lg">
                      <ArrowRight className="absolute top-4 right-4 w-5 h-5 text-[#FF8EB2]" />
                      <span className="block text-[0.75rem] font-black text-[#9c533b] uppercase tracking-widest mb-3">我的弯路方案追求</span>
                      <p className="text-[0.9rem] text-[#9c533b] font-bold leading-relaxed">{project.goodSolution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[1rem] font-black text-gray-900 mb-5">核心机制设计</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {project.mechanisms.map((mech, mIdx) => {
                        const [key, val] = mech.split('：');
                        return (
                          <div key={mIdx} className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/50 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-[#FFD93D] mt-2 shrink-0 shadow-[0_0_8px_rgba(255,217,61,0.6)]" />
                            <p className="text-[0.95rem] text-gray-600 leading-relaxed">
                              <span className="font-bold text-gray-900">{key}：</span>{val}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {project.results.length > 0 && (
                    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[1.8rem] grid grid-cols-3 gap-4 border border-white/80 shadow-inner">
                      {project.results.map((res, rIdx) => (
                        <div key={rIdx} className="text-center">
                          <span className="block text-[1.6rem] font-black text-[#FF8EB2] tracking-tighter">{res.value}</span>
                          <span className="text-[0.7rem] text-gray-400 font-bold uppercase tracking-widest">{res.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:w-80 shrink-0 flex flex-col pt-[115px]">
                <div className="sticky top-24">
                  <a
                    href={project.h5Url}
                    target="_blank"
                    className="group relative block w-full aspect-[9/18.5] bg-[#1a1a1a] border-[6px] border-[#222] rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] overflow-hidden transition-transform hover:scale-[1.01]"
                  >
                    <div className="w-full h-full overflow-y-auto no-scrollbar bg-white">
                      <img 
                        src={project.h5Img} 
                        alt="Preview" 
                        className="w-full h-auto block"
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/400x800?text=Preview+Loading...";
                        }}
                      />
                    </div>
                    
                    {/* Bottom-only mask as requested */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-8 gap-2 text-white pointer-events-none">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-[1.1rem] tracking-widest">了解更多</span>
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </a>
                  <p className="mt-4 text-[0.8rem] text-gray-400 font-bold text-center uppercase tracking-[0.2em]">滑动可查看更多</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};