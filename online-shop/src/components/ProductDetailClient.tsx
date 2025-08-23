'use client';

import { useEffect, useState } from 'react';
import { FavoriteIcon, StarIcon } from '@/images/icons';
import { IProduct } from '@/utils/interfaces';
import { useShopingCatdStore } from '@/store/shoppingCardStore';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
interface ProductDetailClientProps {
  id: string;
}

export default function ProductDetailClient({ id }: ProductDetailClientProps) {
  const triggerShake = useCartStore((state) => state.triggerShake);
  const { addToCard, onIncreaseItemCount, onReduceItemCount } = useShopingCatdStore();
  const [counter, setCounter] = useState(1);
  const [data, setData] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(setData)
      .catch(() => setError('Something went wrong'))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>{error || 'No data'}</div>;

  const { title, price, category, description, rating, images } = data;

  const onSelectProduct = () => {
    addToCard({
      ...data,
      count: counter,
      totalPrice: +(counter * data.price).toFixed(2),
    });
  };

  const addToCartHandler = () => {
    triggerShake();
    onSelectProduct();
  };
  return (
    <div>
      <div className="w-full h-[630px] flex justify-between items-center px-[100px] mt-[60px]">
        <div className="w-[725px] flex justify-center items-center">
          <div className="w-[550px] h-[630px]">
            <img src={images?.[0]} alt={title} className="w-[550px] h-[630px] object-contain" />
          </div>
        </div>

        <div className="w-[700px] h-[615px]">
          <h1 className="text-[32px] font-medium">{title}</h1>
          <div className="flex items-center mt-[15px]">
            <div className="gap-[2px] flex">
              {[1, 2, 3, 4, 5].map((n) => (
                <StarIcon key={n} />
              ))}
            </div>
            <p className="text-[20px] ml-[15px]">{rating} review</p>
          </div>
          <p>{price}</p>
          <div className="w-[700px] h-[1px] bg-[#A6A6A6] mt-[15px]" />
          <div className="w-fit h-[40px] px-[25px] flex items-center justify-center rounded-[16px] bg-[#F5F5F5] mt-[15px]">
            <p className="text-[18px]">{category}</p>
          </div>
          <p className="text-[17px] mt-[15px]">{description}</p>

          <div className="flex justify-between mt-[40px]">
            <div className="w-[200px] h-[50px] rounded-[30px] border border-[#D7D7D7] flex justify-between items-center px-[20px]">
              <button
                className="cursor-pointer"
                onClick={() => {
                  onReduceItemCount(+id);
                  setCounter((prev) => Math.max(prev - 1, 1));
                }}
              >
                -
              </button>
              <p className="text-[20px]">{counter}</p>
              <button
                className="cursor-pointer"
                onClick={() => {
                  onIncreaseItemCount(+id);
                  setCounter((prev) => prev + 1);
                }}
              >
                +
              </button>
            </div>

            <button
              onClick={() => {
                addToCartHandler();
              }}
              className="w-[430px] h-[50px] bg-[#282828] rounded-[30px]  transition-transform duration-300 ease-in-out transform hover:scale-102 cursor-pointer"
            >
              <p className="text-white text-[18px] ">Add to Cart</p>
            </button>
          </div>
          <Link href="/checkoutPage">
            <button className="border border-black rounded-[30px] h-[50px] w-[700px] text-[20px] mt-[20px]  transition-transform duration-300 ease-in-out transform hover:scale-101 cursor-pointer">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
