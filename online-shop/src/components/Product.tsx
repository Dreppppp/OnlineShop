
import React, { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { ICardProduct } from '@/utils/interfaces';
export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  count:number;
}

interface ProductListProps {
  products: ICardProduct[];
  setChooseProducts: (product:ICardProduct)=>void;
  onRemoveProduct: (id:number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, setChooseProducts, onRemoveProduct}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-between w-[1240] mx-auto">
      {products.map((product, index) => (
          <div data-aos="fade-up" data-aos-delay={250 * (index % 4)} key={product.id} className="w-[286px] h-[430px] text-center p-2 mb-[100px]">
           <Link href={`/productDetailPage/${encodeURIComponent(product.id)}`} >
          <div className="w-[286px] h-[360px]  rounded-[20px] flex justify-center items-center"><img src={product.image} alt="photo" className="w-[286px] h-[360px] object-contain "/></div>
          </Link>
          <h1 className="text-[20px] my-[12px] h-[60px]">{product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}</h1>
          <div className="flex justify-between items-center">
            <p className="text-[14px] font-medium">${product.price}</p>
              <div className=" w-6 h-6 rounded-full border border-black text-black flex justify-center items-center"  onClick={()=>{setChooseProducts(product)}}>
                +
              </div>
              {/* <div className="w-6 h-6 rounded-full border border-black text-black flex justify-center items-center"  onClick={()=>{onRemoveProduct(product.id)}}>
                -
              </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;