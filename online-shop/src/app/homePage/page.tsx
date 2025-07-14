'use client';

import { useShopingCatdStore } from '@/store/shoppingCardStore';
import Header from '@/components/Header';
import FeaturedProducts from '@/components/FeaturedProducts';
import Range from '@/components/Range';
import UniqueProportions from '@/components/UniqueProportions';
import Ongoings from '@/components/Ongoings';
import Footer from '@/components/Footer';
import ShoppingCardIcon from '@/components/ShoppingCardIcon';
import useAnimaton from '@/hooks/useAnimaton';
import useFetch, { RequestTypes } from '@/hooks/useFetch';
import { IProduct } from '@/utils/interfaces';


export default function mainPage() {
  let {isLoading, error, data} = useFetch<IProduct[]>('https://fakestoreapi.com/products', RequestTypes.GET )
  const { shopingCard} = useShopingCatdStore();
  const { isDisappearAnimationAdded } = useAnimaton(1000, shopingCard);
  if (isLoading) return <div>Loadnig...</div>
  if(error) return <div>Some went wrong...</div>
  if (!data){ return (
    <div>
      No data
    </div>
  )} else{
    return(
      <div>
      <Header />
      <FeaturedProducts data={data}/>
      <Range />
      <UniqueProportions />
      <Ongoings />
      <Footer />
      <ShoppingCardIcon
        className={shopingCard.length > 0 ? 'opacity-100' : ''}
        disappearAnimation={isDisappearAnimationAdded ? 'animate-smooth-disappear' : ''}
      />
    </div>
    )
  }
}
