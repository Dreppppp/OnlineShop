'use client';

import { useState } from 'react';
import Menu from '@/components/Menu';
import { FavoriteIcon, StarIcon } from '@/images/icons';
import useFetch, { RequestTypes } from '@/hooks/useFetch';
import { Product } from '@/components/Product';
import { useShopingCatdStore } from '@/store/shoppingCardStore';
import { IProduct } from '@/utils/interfaces';

export default  function productDetailPage({params}: {params: Promise<{ slug: string }>}) {
    const  {id}:any = params
    const {addToCard, onIncreaseItemCount, onReduceItemCount } = useShopingCatdStore();
    let {isLoading, error, data} = useFetch<IProduct>(`https://fakestoreapi.com/products/${id}`, RequestTypes.GET)
    console.log(data)
    let [counter, setCounter] = useState<number>(0);
    const onSelectProduct = (product: IProduct) => {
      let cardProduct = {
        ...product, 
        count: counter,
        totalPrice: +(counter * product.price).toFixed(2)
      }
    addToCard(cardProduct);
  };
  if (isLoading) return <div>Loadnig...</div>
  if(error) return <div>Some went wrong...</div>
  if(!data){return(
    <div>no data</div>
  )} else{
    let {title, price, category, description, rating, id, image} = data
    return (
    <div>
      <div className="w-full px-[108px] pt-[40px] ">
        <Menu textColor="black" />
      </div>
      <div className="w-full h-[630px] flex justify-between items-center px-[100px] mt-[60px]">
        <div className="w-[725px]  flex justify-center items-center">
          {/* <div className=" flex flex-col gap-[29px]">
            <div className="w-[141px] h-[191px] bg-[#A6A6A6]"></div>
            <div className="w-[141px] h-[191px] bg-[#A6A6A6]"></div>
            <div className="w-[141px] h-[191px] bg-[#A6A6A6]"></div>
          </div> */}
          <div className="w-[550px] h-[630px] ">
            <img src={image} alt="photo" className="w-[550px] h-[630px] object-contain "/>
          </div>
        </div>
        <div className="w-[700px] h-[615px]">
          <div className="w-[700px] h-[100px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[32px] font-medium">{title}</h1>
              <FavoriteIcon />
            </div>
            <div className="flex items-center mt-[15px]">
              {/* <h1 className="text-[34px]">{data.price}$</h1> */}
              <div className="gap-[2px] flex">
                {[1, 2, 3, 4, 5].map((elem) => (
                  <StarIcon key={elem} />
                ))}
              </div>
              <p className="text-[20px] ml-[15px]">{rating?.count}  review</p>
            </div>
            <div>
              <p>{price}</p>
            </div>
            <div className="w-[700px] h-[1px] bg-[#A6A6A6] mt-[45px]"></div>
             <div className='w-fit h-[40px] px-[25px] flex items-center justify-center rounded-[16px] bg-[#F5F5F5] mt-[30px]'>
              <p className='text-[18px]'>{category}</p>
            </div>
            <p className="text-[17px] mt-[25px]">
             {description}
            </p>
            <div className="flex justify-between mt-[40px]">
             <div    className="w-[200px] h-[50px] rounded-[30px] border border-1 border-[#D7D7D7] flex justify-between items-center px-[20px]">
                  <button
                    onClick={() => setCounter((prev) => Math.max(prev - 1, 0))}
                  >
                    <p className="text-[#414141] text-[30px]" onClick={() => {onReduceItemCount(id)}}>-</p>
                  </button>
    
                  <p className="text-[20px]">{counter}</p>
                  <button
                 
                    onClick={() => setCounter((prev) => prev + 1)}
                  >
                    <p className="text-[#414141] text-[25px]" onClick={() => {onIncreaseItemCount(id)}}>+</p>
                  </button>
             </div>

              <button className="w-[430px] h-[50px] bg-[#282828] rounded-[30px]" onClick={() => {onSelectProduct(data)}}>
                <p className="text-white text-[18px]">Add to Cart</p>
              </button>
            </div>
            <div>
              <button className=" border border-1 border-black rounded-[30px] text-[black] h-[50px] w-[700px] text-[20px] mt-[20px]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
}
