'use client';

import { useShopingCatdStore } from '@/store/shoppingCardStore';
import Header from '@/components/Header';
import FeaturedProducts from '@/components/FeaturedProducts';
import Range from '@/components/Range';
import UniqueProportions from '@/components/UniqueProportions';
import Footer from '@/components/Footer';
import ShoppingCardIcon from '@/components/ShoppingCardIcon';
import useAnimaton from '@/hooks/useAnimaton';
import useFetch, { RequestTypes } from '@/hooks/useFetch';
import { IProduct } from '@/utils/interfaces';
import LoaderGif from '@/components/LoaderGif';

export interface IProductResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}


export default function mainPage() {
  let {isLoading, error, data} = useFetch<IProductResponse>('https://dummyjson.com/products/?limit=8', RequestTypes.GET )
  console.log(data)
  const { shopingCard} = useShopingCatdStore();
  const { isDisappearAnimationAdded } = useAnimaton(1000, shopingCard);
  if (isLoading) return <div><LoaderGif/></div>
  if(error) return <div>Some went wrong...</div>
    return(
      <div>
      <Header />
      <FeaturedProducts data={data?.products || []}/>
      <UniqueProportions />
      <Range />
      <Footer />
      <ShoppingCardIcon
        className={shopingCard.length > 0 ? 'opacity-100' : ''}
        disappearAnimation={isDisappearAnimationAdded ? 'animate-smooth-disappear' : ''}
      />
    </div>
    )
  }

