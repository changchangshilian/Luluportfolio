
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
      const sections = ['home', 'about', 'core-projects', 'representative', 'collection', 'contact'];
      let current = 'home';
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 160) {
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
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        className="fixed top-0 left-0 w-full h-16 bg-white/90 backdrop-blur-md z-[999] shadow-sm flex items-center justify-center border-b border-gray-100"
      >
        <div className="max-w-6xl w-full px-6 flex justify-between items-center">
          <div className="text-[1.1rem] font-bold text-[#FF8EB2] tracking-[0.25em] cursor-default select-none">
            黄皖鹭作品集
          </div>
          
          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[0.9rem] font-medium transition-all relative ${
                    activeSection === item.id ? 'text-[#FF8EB2]' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF8EB2]"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[1000] bg-white md:hidden flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-6 right-6 p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-[1.8rem] font-bold transition-all ${
                  activeSection === item.id ? 'text-[#FF8EB2]' : 'text-gray-400'
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
