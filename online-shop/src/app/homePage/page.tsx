'use client';

import { useShopingCatdStore } from '@/store/shoppingCardStore';
import { Product } from '@/components/Product';
import Header from '@/components/Header';
import FeaturedProducts from '@/components/FeaturedProducts';
import Range from '@/components/Range';
import UniqueProportions from '@/components/UniqueProportions';
import Ongoings from '@/components/Ongoings';
import Footer from '@/components/Footer';
import ShoppingCardIcon from '@/components/ShoppingCardIcon';
import useAnimaton from '@/hooks/useAnimaton';


export default function mainPage() {
  const { shopingCard, addToCard, removeFromCard } = useShopingCatdStore();

  const onSelectProduct = (product: Product) => {
    addToCard(product);
  };

  const onRemoveProduct = (id: number) => {
    removeFromCard(id);
  };
  const { isDisappearAnimationAdded } = useAnimaton(1000, shopingCard);
  console.log('isDisappearAnimationAdded', isDisappearAnimationAdded);
  return (

    <div>
      <Header />
      <FeaturedProducts />
      <Range />
      <UniqueProportions />
      <Ongoings />
      <Footer />
      <ShoppingCardIcon
        className={shopingCard.length > 0 ? 'opacity-100' : ''}
        disappearAnimation={isDisappearAnimationAdded ? 'animate-smooth-disappear' : ''}
      />
    </div>
  );
}
