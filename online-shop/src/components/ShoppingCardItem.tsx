import { useShopingCatdStore } from '@/store/shoppingCardStore';
import { ICardProduct } from '@/utils/interfaces';
import { FC } from 'react';

const ShoppingCardItem: FC<ICardProduct> = ({ title, price, id, count, images}) => {
  const { onIncreaseItemCount, onReduceItemCount, removeFromCard } = useShopingCatdStore();
  const onRemoveFromCard = (id: number) => {
    removeFromCard(id)
  }
  return (
        <div className="h-[113px] flex px-[30px] items-center border border-b-1 border-[#DEDFE1]">
          <div className="flex justify-between w-[653px] h-[53px]">
            <div className="flex justify-between items-center">
              <span className="text-[25px] mr-[20px]" onClick={() => {onRemoveFromCard(id)}}>x</span>
              <div className="size-[53px] mr-[20px]">
                <img src={images?.[0]}/>
              </div>
              <p className="text-[16px] text-[#3D3D3D]">{title}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] color-[#949494]">${price}</p>
              <div className="flex justify-between items-center h-[49px] w-[107px] border border-1 border-[#D7D7D7] rounded-[30px] ml-[50px] pr-[20px]">
                <button className="color-[#414141] text-[25px] ml-[20px]" onClick={() => {onReduceItemCount(id)}}>-</button>
                <p className="text-[18px]">{count}</p>
                <p className="color-[#414141] text-[25px]" onClick={() => {onIncreaseItemCount(id)}}>+</p>
              </div>
              <p className="text-[16px] color-[#949494] ml-[60px] pr-[20px]">${price}</p>
            </div>
          </div>
        </div>
  );
};

export default ShoppingCardItem;
