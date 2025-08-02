"use client";

import { useEffect, useState } from 'react';
import Menu from '@/components/Menu';
import { FavoriteIcon, StarIcon } from '@/images/icons';
import { RequestTypes } from '@/hooks/useFetch';
import { IProduct } from '@/utils/interfaces';
import { useShopingCatdStore } from '@/store/shoppingCardStore';

export default function ProductDetailClient({ id }: { id: string }) {
  const { addToCard, onIncreaseItemCount, onReduceItemCount } = useShopingCatdStore();
  const [counter, setCounter] = useState<number>(0);
  const [data, setData] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(setData)
      .catch(() => setError("Something went wrong"))
      .finally(() => setIsLoading(false));
  }, [id]);

  const onSelectProduct = (product: IProduct) => {
    const cardProduct = {
      ...product,
      count: counter,
      totalPrice: +(counter * product.price).toFixed(2)
    };
    addToCard(cardProduct);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>{error || "No data"}</div>;

  const { title, price, category, description, rating, images } = data;

  return (
    <div>
      <div className="w-full px-[108px] pt-[40px] ">
        <Menu showStickyLogo={true} />
      </div>
      <div className="w-full h-[630px] flex justify-between items-center px-[100px] mt-[60px]">
        <div className="w-[725px] flex justify-center items-center">
          <div className="w-[550px] h-[630px]">
            <img src={images?.[0]} alt="photo" className="w-[550px] h-[630px] object-contain" />
          </div>
        </div>
        <div className="w-[700px] h-[615px]">
          <div className="w-[700px] h-[100px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[32px] font-medium">{title}</h1>
              <FavoriteIcon />
            </div>
            <div className="flex items-center mt-[15px]">
              <div className="gap-[2px] flex">
                {[1, 2, 3, 4, 5].map((elem) => (
                  <StarIcon key={elem} />
                ))}
              </div>
              <p className="text-[20px] ml-[15px]">{rating} review</p>
            </div>
            <div><p>{price}</p></div>
            <div className="w-[700px] h-[1px] bg-[#A6A6A6] mt-[45px]"></div>
            <div className="w-fit h-[40px] px-[25px] flex items-center justify-center rounded-[16px] bg-[#F5F5F5] mt-[30px]">
              <p className="text-[18px]">{category}</p>
            </div>
            <p className="text-[17px] mt-[25px]">{description}</p>
            <div className="flex justify-between mt-[40px]">
              <div className="w-[200px] h-[50px] rounded-[30px] border border-1 border-[#D7D7D7] flex justify-between items-center px-[20px]">
                <button onClick={() => { onReduceItemCount(+id); setCounter(prev => Math.max(prev - 1, 0)); }}>
                  <p className="text-[#414141] text-[30px]">-</p>
                </button>
                <p className="text-[20px]">{counter}</p>
                <button onClick={() => { onIncreaseItemCount(+id); setCounter(prev => prev + 1); }}>
                  <p className="text-[#414141] text-[25px]">+</p>
                </button>
              </div>
              <button className="w-[430px] h-[50px] bg-[#282828] rounded-[30px]" onClick={() => onSelectProduct(data)}>
                <p className="text-white text-[18px]">Add to Cart</p>
              </button>
            </div>
            <button className="border border-1 border-black rounded-[30px] text-[black] h-[50px] w-[700px] text-[20px] mt-[20px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
