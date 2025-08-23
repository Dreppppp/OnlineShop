'use client';

import Link from 'next/link';
import { LogoIcon, BagpackMenuIcon, MenuIcon, SearchIcon, CrossIcon } from '@/images/icons';
import { useState } from 'react';
import FieldWithHint from '../components/FieldWithHint';
import { useCartStore } from '@/store/cartStore';
import { useShopingCatdStore } from '@/store/shoppingCardStore';

type MenuProps = {
  showStickyLogo: boolean;
};

export default function Menu({ showStickyLogo }: MenuProps) {
  const shake = useCartStore((state) => state.shake);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  let [searchedValue, setSearchedValue] = useState<string>('');
  const { shopingCard } = useShopingCatdStore();
  return (
    <div className="w-full fixed top-0 left-0 z-[1000]">
      <div className="relative h-[60px] sm:h-[65px] md:h-[70px]">
        <div
          className={`
            flex items-center justify-between bg-black text-white h-[60px] sm:h-[65px] md:h-[70px]
            transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)]
            px-4 sm:px-8 md:px-[100px]
            ${isSearch ? 'opacity-0 pointer-events-none scale-y-90' : 'opacity-100 pointer-events-auto scale-y-100'}
          `}
          style={{ transformOrigin: 'top' }}
        >
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <LogoIcon />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <p
              className={`
                text-[14px] sm:text-[16px] md:text-[20px] font-bold tracking-widest text-white drep
                transition-all duration-[800ms] ease-[cubic-bezier(0.5,0,0,1)]
                will-change-transform
                ${showStickyLogo ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
              `}
            >
              DREPBUY
            </p>
          </div>
          <div className="flex gap-2 sm:gap-3 md:gap-5 items-center">
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115 cursor-pointer"
              onClick={() => setIsSearch(true)}
            >
              <SearchIcon />
            </div>
            <Link href="/shoppingCart">
              <div className="relative">
                <div
                  className={`flex justify-center items-center w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 transition-transform duration-300 ease-in-out transform hover:scale-115 cursor-pointer ${
                    shake ? 'animate-shake' : ''
                  }`}
                >
                  <BagpackMenuIcon />
                </div>

                {shopingCard.length>0 && (
                  <div className="absolute -top-1 -right-1 w-[15px] h-[15px] bg-white rounded-full flex justify-center items-center">
                    <p className="text-[8px] text-black">!</p>
                  </div>
                )}
              </div>
            </Link>

            <div
              className="flex items-center justify-center gap-1 cursor-pointer w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 transition-transform duration-300 ease-in-out transform hover:scale-115 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon />
            </div>
          </div>
        </div>
        <div
          className={`
            absolute top-0 left-0 w-full h-[60px] sm:h-[65px] md:h-[70px] bg-black flex items-center px-4 sm:px-6 md:px-[20px]
            transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)]
            ${isSearch ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-6'}
          `}
        >
          <FieldWithHint isSearch={isSearch} setIsSearch={setIsSearch} />
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm z-[999]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`
          fixed top-0 right-0 h-full w-[80%] sm:w-[400px] md:w-[500px] bg-white z-[1000] shadow-xl
          transition-transform duration-500 ease-[cubic-bezier(0.5,0,0,1)]
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-end p-2 sm:p-3 md:p-4 ">
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer bg-black rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 flex justify-center items-center"
          >
            <CrossIcon />
          </div>
        </div>
        <div className="p-4 sm:p-6 md:p-6 pl-6 sm:pl-16 md:pl-[100px]">
          <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-semibold text-[16px] sm:text-[18px] md:text-[22px]">
            <li>
              <Link href="/homePage">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
