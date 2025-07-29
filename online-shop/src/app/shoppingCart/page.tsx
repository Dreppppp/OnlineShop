'use client';

import { useShopingCatdStore } from '@/store/shoppingCardStore';
import ProductList from '@/components/Product';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import ShoppingCardItem from '@/components/ShoppingCardItem';

export default function shoppingCart({}) {
  const { shopingCard } = useShopingCatdStore();
  let totalPrice: number = shopingCard.reduce((acc, next) => acc += next.count * next.price, 0)
  return (
    <div className='w-full'>
      <div className="w-full px-[108px] pt-[40px] ">
        <Menu showStickyLogo={true}/>
      </div>
      <div className='w-screen flex justify-between px-[200px] pt-[80px]'>
        <div>
          <div className="h-[530px] w-[710px] border border-1 border-[#DEDFE1] rounded-[20px] ">
            <div className="h-[78px] bg-black rounded-t-[20px]">
              <div className = 'flex justify-between py-[20px] px-[40px]'>
                <div className = 'flex text-[22px] text-white'>
                  <p>Product</p>
                </div>
                <div className='flex justify-between w-[290px] text-[22px] text-white gap-[44px]'>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                </div>
              </div> 
            </div>
            {shopingCard.map((product) => (
              <ShoppingCardItem key={product.id} {...product} />
            ))}
          </div>
        </div>
        <div className='w-[500px] h-[440px]  '>
            <div className="h-[78px] bg-black rounded-t-[20px] flex items-center pl-[25px]">
              <p className='text-white text-[20px]'>Cart Total</p>
            </div>
            <div className='h-[90px] border border-1 border-[#DEDFE1] pl-[25px] flex items-center w-full justify-between pr-[25px]'>
              <p className='text-black text-[20px]'>SUBTOTAL</p>
               <p className='text-[#949494]'>400$</p>
            </div>
             <div className='h-[90px] border border-1 border-[#DEDFE1] pl-[25px] flex items-center w-full justify-between pr-[25px]'>
                <p className='text-black text-[20px]'>DISCOUNT</p>
                 <p className='text-[#949494]'>---</p>
             </div>
              <div className='h-[90px] border border-1 border-[#DEDFE1] pl-[25px] flex items-center w-full justify-between pr-[25px]'>
                  <p className='text-black text-[20px] '>TOTAL</p>
                   <p className='text-[#949494]'>{totalPrice}$</p>
              </div>
            <div
            className='h-[71px] bg-[#000000] rounded-b-[20px] flex items-center justify-center '>
              <p className='text-white text-[16px] '>Proceed To Checkout</p>
            </div>
        </div>
      </div>
      <div className='mt-[20px]'><Footer /></div>
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
