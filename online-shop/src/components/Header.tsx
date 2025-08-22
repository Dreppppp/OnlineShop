'use client';

import { useEffect, useState } from 'react';
import { ArrowDownIcon, SearchIcon } from '@/images/icons';
import Menu from './Menu';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

 
  const clampedScroll = Math.min(scrollY, 300);
  const scale = 1 - clampedScroll / 600; 
  const opacity = 1 - clampedScroll / 300;
  const translateY = 24 - clampedScroll / 10; 
  const showStickyLogo = scrollY > 50;

  return (
    <div className="w-full h-[810px] bg-black pt-[40px] overflow-visible relative">
      {/* Меню с маленьким логотипом */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Menu showStickyLogo={showStickyLogo} />
      </div>

      {/* Большой логотип DREPE */}
      <p
        className="drep text-white text-[330px] text-center sticky top-[80px] z-40 pointer-events-none"
        style={{
          transform: `scale(${scale}) translateY(${translateY}px)`,
          opacity,
          transition: 'transform 0.6s ease, opacity 0.6s ease',
        }}
      >
        DREPE
      </p>
  {/* <div className='bg-[white] mt-[200px] flex items-center justify-center size-[500px]'><FieldWithHint/></div> */}
      {/* Кнопка */}
      <div className="w-full flex justify-center items-center mt-[100px]">
        <button className="text-[18px] w-[200px] h-[57px] bg-white rounded-[5px] flex justify-between items-center px-[22px]">
          <p className="text-black font-medium">Start shopping</p>
          <ArrowDownIcon />
        </button>
      </div>
      
    </div>
  );
}
