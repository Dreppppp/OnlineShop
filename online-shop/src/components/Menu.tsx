import Link from 'next/link';
import {
  LogoIcon,
  ProfileMenuIcon,
  MenuArrowDownIcon,
  BagpackMenuIcon,
  LogoIconBlack,
  ProfileMenuBlack,
  MenuArrowDownBlack,
  BagpackMenuBlack,
  MenuIcon,
  SearchIcon,
  CartIcon,
} from '@/images/icons';

type MenuProps = {
  showStickyLogo: boolean;
};

export default function Menu({ showStickyLogo }: MenuProps) {
  return (
    <div className="w-full h-[70px] flex items-center justify-between bg-black px-[100px] text-white fixed top-0 left-0 z-[1000]">
      {/* Левая часть */}
      <div className="flex items-center gap-4">
        <LogoIcon />
      </div>

      {/* Центр — появляется логотип при showStickyLogo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        {showStickyLogo && (
          <p className="text-[20px] font-bold tracking-widest text-white drep">
            DREPBUY
          </p>
        )}
      </div>

      {/* Правая часть */}
      <div className="flex gap-5 items-center">
        <div className="size-[24px]">
          <SearchIcon />
        </div>
        <Link href="/shoppingCart">
          <div className="flex justify-center items-center">
            <BagpackMenuIcon />
          </div>
        </Link>
        <div className="flex items-center justify-center gap-1">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}
