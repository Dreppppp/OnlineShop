import {
  ArrowDownIcon,
  MenuArrowDownIcon,
  ProfileMenuIcon,
  SearchIcon,
} from '@/images/icons';
import Menu from './Menu';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const logoRef = useRef<HTMLParagraphElement | null>(null);
  const [showMiniLogo, setShowMiniLogo] = useState(false);

  useEffect(() => {
    if (!logoRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: logoRef.current,
        start: 'top top',
        end: '+=200',
        scrub: true,
        onUpdate: (self) => {
          if (self.progress > 0.99) setShowMiniLogo(true);
          else setShowMiniLogo(false);
        },
      },
    });

    tl.to(logoRef.current, {
      position: 'fixed',
      top: 10,
      left: 100,
      fontSize: '20px',
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="w-full h-[810px] bg-black pt-[40px] relative overflow-hidden">
      {/* Меню с маленьким логотипом */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Menu showStickyLogo={showMiniLogo} />
      </div>

      {/* Большой логотип, который анимируется */}
      <p
        ref={logoRef}
        className="text-white [letter-spacing:0.1em] drep"
        style={{
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          fontSize: '300px',
          position: 'absolute',
          left: '100px',
          top: '100px',
        }}
      >
        DREPE
      </p>

      <div className="w-full flex justify-center items-center mt-[350px]">
        <button className="text-[18px] w-[200px] h-[57px] bg-white rounded-[5px] flex justify-between items-center px-[22px]">
          <p className="text-black font-medium">Start shopping </p>
          <ArrowDownIcon />
        </button>
      </div>
    </div>
  );
}
