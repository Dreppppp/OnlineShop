import { Product } from '@/components/Product';
import { useShopingCatdStore } from '@/store/shoppingCardStore';
import { FC } from 'react';

const ShoppingCardItem: FC<Product> = ({ title, price, id, count }) => {
  const { onIncreaseItemCount, onReduceItemCount } = useShopingCatdStore();

  return (
        <div className="h-[113px] flex px-[30px] items-center border border-b-1 border-[#DEDFE1]">
          <div className="flex justify-between w-[693px] h-[53px]">
            <div className="flex justify-between items-center">
              <span className="text-[25px] mr-[20px]">x</span>
              <div className="size-[53px] bg-[#D9D9D9] mr-[20px]"></div>
              <p className="text-[16px] text-[#3D3D3D]">{title}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] color-[#949494]">${price}</p>
              <div className="flex justify-between items-center h-[49px] w-[107px] border border-1 border-[#D7D7D7] rounded-[30px] ml-[50px] pr-[20px]">
                <button className="color-[#414141] text-[25px] ml-[20px]" onClick={() => {onReduceItemCount(id)}}>-</button>
                <p className="text-[18px]">{count}</p>
                <p className="color-[#414141] text-[25px]" onClick={() => {onIncreaseItemCount(id)}}>+</p>
              </div>
              <p className="text-[16px] color-[#949494] ml-[40px] pr-[20px]">${price}</p>
            </div>
          </div>
        </div>
  );
};

export default ShoppingCardItem;
