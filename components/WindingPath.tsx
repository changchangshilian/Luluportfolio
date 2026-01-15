
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const WindingPath: React.FC = () => {
  const [pathData, setPathData] = useState('');
  const [totalLength, setTotalLength] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(1);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const updatePath = () => {
      const height = document.body.scrollHeight;
      const width = window.innerWidth;
      const center = width / 2;
      const amp = width < 768 ? 40 : 200;
      const step = 600;

      let d = `M ${center} 0 `;
      const numSteps = Math.ceil(height / step);
      for (let i = 0; i < numSteps; i++) {
        const y = (i + 1) * step;
        const offset = (i % 2 === 0) ? amp : -amp;
        d += `Q ${center + offset} ${y - step / 2}, ${center} ${y} `;
      }
      setPathData(d);
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = scrollY / maxScroll;
      setScrollProgress(1 - progress);
    };

    updatePath();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updatePath);
    
    // Resize observer for dynamic content height
    const observer = new ResizeObserver(updatePath);
    observer.observe(document.body);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updatePath);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      setTotalLength(pathRef.current.getTotalLength());
    }
  }, [pathData]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1] overflow-hidden">
      <svg ref={svgRef} width="100%" height="100%" className="overflow-visible">
        <path
          ref={pathRef}
          d={pathData}
          fill="none"
          stroke="#FF8EB2"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.15"
          style={{
            strokeDasharray: totalLength,
            strokeDashoffset: totalLength * scrollProgress,
            transition: 'stroke-dashoffset 0.1s linear'
          }}
        />
      </svg>
    </div>
  );
};
