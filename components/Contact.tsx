import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Mail, Phone, MessageCircle, Download } from 'lucide-react';

interface ContactProps {
  showToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ showToast }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast("复制成功！");
    }).catch(() => {
      showToast("复制失败，请重试");
    });
  };

  const contactInfo = [
    { label: 'Wechat', value: 'healthycooo', icon: MessageCircle, color: 'bg-[#9c533b]' },
    { label: 'Phone', value: '18750293929', icon: Phone, color: 'bg-[#ff9e2c]' },
    { label: 'Email', value: 'luluhuang45@163.com', icon: Mail, color: 'bg-[#9c533b]' },
  ];

  return (
    <section id="contact" className="py-32 text-center min-h-[600px] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto mb-12 px-6"
      >
        <img
          src="https://pub-82355f44706248d19932b146a7c892b2.r2.dev/lulupicture.dpdns.org/7.png"
          alt="Contact Me"
          className="w-[90%] max-w-2xl mx-auto drop-shadow-2xl"
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto w-full px-6">
        {contactInfo.map((info) => (
          <button
            key={info.label}
            onClick={() => copyToClipboard(info.value)}
            className={`${info.color} group relative flex items-center justify-between px-4 py-3 rounded-2xl shadow-md hover:scale-[1.03] active:scale-95 transition-all text-white overflow-hidden h-16`}
          >
            <div className="flex items-center gap-2.5 min-w-0 flex-1 text-left">
              <info.icon className="w-4 h-4 opacity-70 shrink-0" />
              <div className="min-w-0 flex-1">
                <span className="block text-[0.7rem] font-bold opacity-60 uppercase tracking-wider truncate">{info.label}</span>
                <span className="text-[0.8rem] font-bold truncate block">{info.value}</span>
              </div>
            </div>
            <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
          </button>
        ))}

        {/* 简历下载按钮：使用相对路径以增强不同部署环境下的兼容性 */}
        <a
          href="resume.pdf"
          download="黄皖鹭-个人简历.pdf"
          className="bg-[#ff9e2c] group flex items-center justify-between px-4 py-3 rounded-2xl shadow-md hover:scale-[1.03] active:scale-95 transition-all text-white h-16"
        >
          <div className="flex items-center gap-2.5 text-left min-w-0 flex-1">
            <motion.div
              whileHover={{ y: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <Download className="w-4 h-4 shrink-0" />
            </motion.div>
            <div className="min-w-0 flex-1">
              <span className="block text-[0.7rem] font-bold opacity-60 uppercase tracking-wider">Resume</span>
              <span className="text-[0.8rem] font-bold truncate block">个人简历</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};