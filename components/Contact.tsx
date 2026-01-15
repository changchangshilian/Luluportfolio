
import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Mail, Phone, MessageCircle, Download } from 'lucide-react';
import { downloadBase64File } from '../utils/download';

// A valid minimal 1-page PDF base64 string
const RESUME_BASE64 = 'JVBERi0xLjQKJfbifz97CjEgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovQ291bnQgMQovS2lkcyBbMyAwIFIKXT4+CmVuZG9iagozIDAgb2JqCjw8Ci9UeXBlIC9QYXJlCi9QYXJlbnQgMiAwIFIKL1Jlc291cmNlcyA8PAovRm9udCA8PAovRjEgNCAwIFIKPj4KPj4KL01lZGlhQm94IFswIDAgNTk1IDg0Ml0KL0NvbnRlbnRzIDUgMCBSCj4+CmVuZG9iago0IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMQovQmFzZUZvbnQgL0hlbHZldGljYQo+PgplbmRvYmoKNSAwIG9iago8PAovTGVuZ3RoIDQ0Cj4+CnN0cmVhbQpCVAovRjEgMjQgVGYKMTAwIDcwMCBUZAooSHVhbmdXYW5MdS1SZXN1bWUpIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDE4IDAwMDAwIG4gCjAwMDAwMDAwNzcgMDAwMDAgbiAKMDAwMDAwMDE1NCAwMDAwMCBuIAowMDAwMDAwMzI3IDAwMDAwIG4gCjAwMDAwMDA0MDYgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgowNTAKJSVFT0Y=';

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

  const handleDownload = () => {
    try {
      downloadBase64File(RESUME_BASE64, '黄皖鹭-个人简历.pdf', 'application/pdf');
      showToast("简历下载中...");
    } catch (e) {
      console.error("Download failed", e);
      showToast("下载失败，请稍后重试");
    }
  };

  const contactInfo = [
    { label: 'Wechat', value: 'healthycooo', icon: MessageCircle, color: 'bg-[#9c533b]' },
    { label: 'Phone', value: '18750293929', icon: Phone, color: 'bg-[#ff9e2c]' },
    { label: 'Email', value: 'luluhuang45@163.com', icon: Mail, color: 'bg-[#9c533b]' },
  ];

  return (
    <section id="contact" className="pt-0 pb-20 text-center -mt-8">
      <motion.img
        whileInView={{ scale: [0.95, 1], rotate: [-1, 0] }}
        transition={{ duration: 0.6 }}
        src="https://i.ibb.co/Y7H2LPLP/2222222.png"
        alt="Contact Me"
        className="max-w-[60%] lg:max-w-[400px] mx-auto mb-6 drop-shadow-xl"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
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

        <button
          onClick={handleDownload}
          className="bg-[#ff9e2c] flex items-center justify-between px-4 py-3 rounded-2xl shadow-md hover:scale-[1.03] active:scale-95 transition-all text-white h-16"
        >
          <div className="flex items-center gap-2.5 text-left min-w-0 flex-1">
            <Download className="w-4 h-4 shrink-0" />
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
