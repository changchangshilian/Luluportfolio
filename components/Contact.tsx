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

  const handleDownload = async (e: React.MouseEvent) => {
    // 阻止默认行为，改用 JS 处理以增强兼容性和错误捕获
    e.preventDefault();
    
    try {
      // 尝试获取文件，确保它存在
      const response = await fetch('/resume.pdf');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      
      // 检查 Blob 大小，如果太小可能是 404 页面
      if (blob.size < 1000) {
        throw new Error('Downloaded file is too small, possibly a 404 page');
      }

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "黄皖鹭-个人简历.pdf";
      
      // 针对移动端的特殊处理
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.open(url, '_blank');
      } else {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
      setTimeout(() => window.URL.revokeObjectURL(url), 10000);
      showToast("开始下载...");
    } catch (error) {
      console.error("Download failed:", error);
      showToast("简历文件暂不可用，请联系我获取");
      
      // 兜底：尝试直接跳转
      window.open('/resume.pdf', '_blank');
    }
  };

  return (
    <section id="contact" className="py-32 text-center min-h-[600px] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto mb-12 px-6"
      >
        <img
          src="https://i.ibb.co/Y7H2LPLP/2222222.png"
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

        {/* 简历下载按钮：使用 JS 处理以增强兼容性 */}
        <button
          onClick={handleDownload}
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
        </button>
      </div>
    </section>
  );
};