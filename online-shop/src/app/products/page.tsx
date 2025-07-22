'use client';

import Loader from '@/components/Loader';
import Menu from '@/components/Menu';
import useFewFetch from '@/hooks/useFewFetch';
import { useState } from 'react';

export interface ICategorie {
  slug: string;
  name: string;
  url: string;
}
export default function page() {
  let [categorieProducts, setCategorieProducts] = useState([]);
//   let {
//     isLoading,
//     error,
//     data,
//   } = useFewFetch<any[]>([
//     'https://dummyjson.com/products/category/beauty',
//     'https://dummyjson.com/products/category/fragrances',
//     'https://dummyjson.com/products/category/furniture',
//   ]);
//   console.log(data)

//   if (isLoading) {
//     return <Loader />;
//   }
  return (
    <div>
      <Menu showStickyLogo={true} />
      <div className="flex justify-between px-[100px] mt-[100px]">
        <div className="">
          <p>Ctagories</p>
          {/* {categories &&
            categories.map(({ name }) => (
              <div>
                <input type="checkbox" />
                {name}
              </div>
            ))} */}
        </div>
        <button className="w-[150px] h-[40px] rounded-[40px] border border-1 border-black">
          Show products
        </button>
      </div>
    </div>
  );
}
