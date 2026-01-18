import React from 'react';
import { COLLECTION } from '../constants';
import { Lightbulb, ExternalLink } from 'lucide-react';

export const Collection: React.FC = () => {
  return (
    <section id="collection" className="py-24">
      <div className="text-center mb-10">
        <h2 className="text-[2.2rem] font-bold text-[#9c533b] brush-underline inline-block">
          项目合集｜体系化能力
        </h2>
        <p className="mt-4 text-[1rem] text-gray-500">从单点玩法到体系构建，沉淀可复用的产品资产</p>
      </div>

      <div className="space-y-12 mt-10">
        {COLLECTION.map((system, idx) => (
          <div key={idx} className="glass-card p-8 lg:p-12 rounded-[2rem] shadow-xl border border-white/60">
            <h3 className="text-[1.8rem] font-bold text-gray-800 mb-6">{system.title}</h3>
            
            {/* Thinking Box: Colors updated to Yellow theme */}
            <div className="bg-[#FFD93D]/10 p-6 rounded-2xl border-l-8 border-[#FFD93D] mb-8">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-[#FFD93D] shrink-0" />
                <p className="text-[0.95rem] text-gray-600 font-normal leading-[1.7]">
                  <span className="font-bold text-gray-800">产品思路：</span>{system.thinking.replace(/^产品思路：/, '')}
                </p>
              </div>
            </div>

            <ul className="divide-y divide-gray-50">
              {system.links.map((link, lIdx) => (
                <li key={lIdx} className="py-4 flex justify-between items-center group">
                  <span className="text-[1rem] font-medium text-gray-700">{link.title}</span>
                  <a
                    href={link.url}
                    target="_blank"
                    className="flex items-center gap-1 text-[#9c533b] font-bold text-[0.9rem] group-hover:underline"
                  >
                    查看详情 <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};