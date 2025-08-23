'use client';

import { useEffect, useState } from 'react';
import { ArrowDownIcon } from '@/images/icons';
import Menu from './Menu';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const clampedScroll = Math.min(scrollY, 300);
  const scale = 1 - clampedScroll / 600;
  const opacity = 1 - clampedScroll / 300;
  const translateY = 24 - clampedScroll / 10;
  const showStickyLogo = scrollY > 50;

  return (
    <div className="w-full h-auto bg-black pt-10 sm:pt-12 md:pt-16 overflow-visible relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Menu showStickyLogo={showStickyLogo} />
      </div>
      <p
        className="drep text-white text-[75px] sm:text-[135px] md:text-[170px] lg:text-[300px] text-center sticky top-20 z-40 pointer-events-none"
        style={{
          transform: `scale(${scale}) translateY(${translateY}px)`,
          opacity,
          transition: 'transform 0.6s ease, opacity 0.6s ease',
        }}
      >
        DREPE
      </p>

      <div className="w-full flex justify-center items-center mt-8 sm:mt-10 md:mt-20 px-4 pb-[30px] sm:pb-[60px]">
        <button
          className="text-[12px] sm:text-[14px] md:text-[18px] w-[140px] sm:w-[160px] md:w-[200px] h-[40px] sm:h-[45px] md:h-[57px] bg-white rounded-md flex justify-between items-center px-3 sm:px-5 md:px-6 
  transition-transform duration-300 ease-in-out transform hover:scale-115 cursor-pointer"
          onClick={() => {
            window.scrollBy({ top: 700, behavior: 'smooth' });
          }}
        >
          <p className="text-black font-medium">Start shopping</p>
          <ArrowDownIcon />
        </button>
      </div>
    </div>
  );
}
