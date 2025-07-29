'use client';

import { useState } from 'react';
import Menu from '@/components/Menu';
import { FavoriteIcon, StarIcon } from '@/images/icons';



export default function productDetailPage() {
  let [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <div className="w-full px-[108px] pt-[40px] ">
        <Menu showStickyLogo={true} />
      </div>
      <div className="w-full h-[630px] flex justify-between px-[100px] mt-[60px]">
        <div className="w-[725px]  flex justify-between">
          <div className=" flex flex-col gap-[29px]">
            <div className="w-[141px] h-[191px] bg-[#A6A6A6]"></div>
            <div className="w-[141px] h-[191px] bg-[#A6A6A6]"></div>
            <div className="w-[141px] h-[191px] bg-[#A6A6A6]"></div>
          </div>
          <div className="w-[550px] h-[630px] bg-[#A6A6A6]"></div>
        </div>
        <div className="w-[600px] h-[615px] ">
          <div className="w-[600px] h-[100px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[32px] font-medium">тайтл</h1>
              <FavoriteIcon />
            </div>
            <div className="flex items-center mt-[10px]">
              <h1 className="text-[34px]">$54.98 |</h1>
              <div className="gap-[2px] flex ml-[20px]">
                {[1, 2, 3, 4, 5].map((elem) => (
                  <StarIcon key={elem} />
                ))}
              </div>
              <p className="text-[20px] ml-[15px]">( 32 review )</p>
            </div>
            <div className="w-[600px] h-[1px] bg-[#A6A6A6] mt-[45px]"></div>
            <p className="text-[17px] mt-[15px]">
              Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magn. Lorem ipsum dolor sit amet, consectetuer
              adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
            </p>
            <ul className="list-disc ml-5 text-[17px] mt-2">
              <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetuer adipi scing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetuer adipi </li>
            </ul>
            <div className="flex justify-between mt-[40px]">
              <button
                className="w-[150px] h-[50px] rounded-[30px] border border-1 border-[#D7D7D7] flex justify-between items-center px-[20px]"
                onClick={() => setCounter((prev) => Math.max(prev - 1, 0))}
              >
                <p className="text-[#414141] text-[30px]">-</p>
              </button>

              <p className="text-[20px]">{counter}</p>

              <button
                className="w-[150px] h-[50px] rounded-[30px] border border-1 border-[#D7D7D7] flex justify-between items-center px-[20px]"
                onClick={() => setCounter((prev) => prev + 1)}
              >
                <p className="text-[#414141] text-[25px]">+</p>
              </button>

              <button className="w-[370px] h-[50px] bg-[#282828] rounded-[30px]">
                <p className="text-white text-[18px]">Add to Cart</p>
              </button>
            </div>
            <div>
              <button className=" border border-1 border-black rounded-[30px] text-[black] h-[50px] w-[600px] text-[20px] mt-[10px]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
