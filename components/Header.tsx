import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
      const sections = ['home', 'about', 'core-projects', 'representative', 'collection', 'contact'];
      let current = 'home';
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '首页', id: 'home' },
    { label: '关于我', id: 'about' },
    { label: '核心项目', id: 'core-projects' },
    { label: '代表项目', id: 'representative' },
    { label: '项目合集', id: 'collection' },
    { label: '联系方式', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMobileMenuOpen(false);
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        className="fixed top-0 left-0 w-full h-16 bg-white/75 backdrop-blur-xl z-[999] shadow-sm flex items-center justify-center border-b border-gray-100/50"
      >
        <div className="max-w-6xl w-full px-6 flex justify-between items-center">
          <div className="text-[1.1rem] font-black text-[#FF8EB2] tracking-wider cursor-pointer" onClick={() => scrollToSection('home')}>
            黄皖鹭作品集
          </div>
          
          <ul className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[0.85rem] font-bold transition-all relative py-2 ${
                    activeSection === item.id ? 'text-[#FF8EB2]' : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF8EB2] rounded-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[1000] bg-white/90 md:hidden flex flex-col items-center justify-center gap-10"
          >
            <button className="absolute top-6 right-6 p-2 text-gray-400" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-3xl font-black tracking-tighter transition-all ${
                  activeSection === item.id ? 'text-[#FF8EB2] scale-110' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};