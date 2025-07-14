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
} from '@/images/icons';
type MenuProps = {
  textColor: string;
};

export default function Menu({ textColor }: MenuProps) {
  return (
    <div className="w-full h-[25px] flex justify-between" style={{ color: textColor }}>
      <div data-aos="fade-right" data-aos-delay={100}>
        {textColor === 'white' ? <LogoIcon /> : <LogoIconBlack />}
      </div>
      <div className="text-[16px] w-[373px] flex justify-between">
        <Link href="/homePage">
          <button data-aos="fade-right" data-aos-delay={400}>
            Home
          </button>
        </Link>
        <button data-aos="fade-right" data-aos-delay={600}>
          Categories
        </button>
        <button data-aos="fade-left" data-aos-delay={700}>
          Contact Us
        </button>
        <button data-aos="fade-left" data-aos-delay={500}>
          Blog
        </button>
      </div>
      <div className="flex gap-5">
        <div
          data-aos="fade-left"
          data-aos-delay={300}
          className="flex items-center justify-center gap-1"
        >
          {textColor === 'white' ? <ProfileMenuIcon /> : <ProfileMenuBlack />}
          {textColor === 'white' ? <MenuArrowDownIcon /> : <MenuArrowDownBlack />}
        </div>
       <Link href="/shoppingCart">
          <div data-aos="fade-left" data-aos-delay={200} className="flex justify-center items-center">
            {textColor === 'white' ? <BagpackMenuIcon /> : <BagpackMenuBlack />}
          </div>
       </Link>
      </div>
    </div>
  );
}
