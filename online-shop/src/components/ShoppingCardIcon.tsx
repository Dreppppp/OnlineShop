import { ShoppingCart } from '@/images/icons';
interface iShoppingCardProps {
  disappearAnimation: string;
  className: string;
}
import Link from 'next/link';
export default function ShoppingCardIcon({ disappearAnimation, className }: iShoppingCardProps) {
  return (
   <Link href="/shoppingCart">
      <div    data-aos="fade-up"
        className={`opacity-0 fixed bottom-[60px] right-[60px] border border-1 border-black rounded-[50px] size-[50px] flex items-center justify-center ${disappearAnimation} ${className}`}
      >
        <ShoppingCart />
      </div>
   </Link>
  );
}
// animate-smooth-disappear
