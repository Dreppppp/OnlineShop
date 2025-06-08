'use client';

import { useShopingCatdStore } from '@/store/shoppingCardStore';
import ProductList from '@/components/Product';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import ShoppingCardItem from '@/components/ShoppingCardItem';

export default function shoppingCart({}) {
  const { shopingCard } = useShopingCatdStore();
  console.log(shopingCard, 'shopingCard');
  return (
    <div>
      <div className="w-full px-[108px] pt-[40px] ">
        <Menu textColor="black" />
      </div>
      <div>
      <div className="h-[530px] w-[710px] border border-1 border-[#DEDFE1] rounded-[20px]">
        <div className="h-[78px] bg-[#A6A6A6]"></div>
      {shopingCard.map((product) => (
        <ShoppingCardItem {...product} />
      ))}
        </div>
      <div className="h-[500px] w-[434px]"></div>
    </div>
      <Footer />
    </div>
  );
}

{
  /* <div className="mx-[80px] my-[50px]">
        {shopingCard.length ? (
          <ProductList
            products={shopingCard}
            setChooseProducts={() => {}}
            onRemoveProduct={removeFromCard}
          />
        ) : (
          <div className="mt-20 w-[200px] mx-auto text-center text-blue-600">
            Sorry, you dont have any items in your shopping card
          </div>
        )}
      </div> */
}
