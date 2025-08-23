'use client';

import Menu from '@/components/Menu';
import useFetch, { RequestTypes } from '@/hooks/useFetch';
import { SearchIcon } from '@/images/icons';
import { useState } from 'react';
import { IProductResponse } from '../homePage/page';
import ProductList from '@/components/Product';
import { ICardProduct } from '@/utils/interfaces';
import { useShopingCatdStore } from '@/store/shoppingCardStore';

export interface ICategorie {
  slug: string;
  name: string;
  url: string;
  map: any;
}
export default function page() {
  const { addToCard } = useShopingCatdStore();
  const onSelectProduct = (product: ICardProduct) => {
    addToCard(product);
  };
  let [selectedProduct, setSelectedProduct] = useState<string>('');
  let [isChecked, setIsChecked] = useState<boolean>(false);
  let { data: categories} = useFetch<ICategorie[]>(
    'https://dummyjson.com/products/categories',
    RequestTypes.GET
  );
  let { data: productArray } = useFetch<IProductResponse>(
    'https://dummyjson.com/products',
    RequestTypes.GET
  );
    let { data: categoriesProduct } = useFetch<IProductResponse>(
    `https://dummyjson.com/products/category/${selectedProduct}`,
    RequestTypes.GET
  );
  let products = selectedProduct ? categoriesProduct : productArray
  return (
    <div>
      <Menu showStickyLogo={true} />
      <div className="flex justify-between pr-[50px] pl-[40px] mt-[100px]">
        <div className="w-[286px] h-fit border border-1 border-[#E2E2E2] mt-[15px]">
          <div className="flex mt-[40px] items-center">
            <div className="h-[24px] w-[3px] bg-black ml-[30px]"></div>
            <p className="text-[22px] ml-[17px]">Categories</p>
          </div>
          {categories &&
            categories.map(({name}) => (
              <div className="ml-[27px] text-[18px] flex items-center mt-[20px]">
                <input
                  type="checkbox"
                  className="size-[15px]"
                  onChange={() => {
                    setSelectedProduct(name);
                  }}
                />
                <p className="pl-[10px]">{name}</p>
              </div>
            ))}
        </div>
        <div className="w-[1040]">
          <div className="w-[930px] px-[50px]">
            <h1 className="text-[black] text-[36px] mb-[25px]">Our Collection Of Products</h1>
            <div className="w-[930px] h-[56px] rounded-[30px] border border-1 border-[#E2E2E2] flex justify-between items-center pl-[15px] pr-[10px]">
              <input
                type="text"
                placeholder="Search An Item"
                className="w-[850px] text-[20px] border-none outline-none"
              />
              <div className="h-[40px] w-[40px] bg-black rounded-full flex items-center justify-center">
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className="w-[1200px]">
            <ProductList
              products={(products?.products ?? []) as ICardProduct[]}
              setChooseProducts={onSelectProduct}
              page="featured"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
