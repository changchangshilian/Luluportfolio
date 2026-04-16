
import React, { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CoreProjects } from './components/CoreProjects';
import { Representative } from './components/Representative';
import { Collection } from './components/Collection';
import { Contact } from './components/Contact';
import { WindingPath } from './components/WindingPath';
import { LoadingScreen } from './components/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div ref={containerRef} className="relative overflow-x-hidden min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={isLoading ? "hidden" : "block"}
      >
        <Header />
        
        <div className="fixed top-24 left-[2%] z-0 pointer-events-none opacity-40 lg:opacity-100 transition-opacity">
          <img src="https://i.ibb.co/LDTLPXBt/4399building.png" alt="Decoration" className="max-w-[150px] lg:max-w-[30vw] object-contain" />
        </div>
        <div className="fixed bottom-24 right-[2%] z-0 pointer-events-none opacity-40 lg:opacity-100 transition-opacity">
          <img src="https://i.ibb.co/wFjw8J1j/jiniu-building.png" alt="Decoration" className="max-w-[150px] lg:max-w-[30vw] object-contain" />
        </div>

        <WindingPath />

        <main className="relative z-10 max-w-6xl mx-auto px-6">
          <Hero />
          <About />
          <CoreProjects />
          <Representative />
          <Collection />
          <Contact showToast={showToast} />
        </main>

        <footer className="py-12 text-center text-gray-400 text-[0.8rem] font-medium uppercase tracking-wider">
          © 2026 WanLu Product Portfolio • Built with Passion
        </footer>
      </motion.div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 20, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-0 left-1/2 -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-full text-[0.9rem] font-medium z-[10000] shadow-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
