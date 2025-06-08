import React, { ReactNode, useState } from 'react';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: ReactNode;
  count:number;
}

interface ProductListProps {
  products: Product[];
  setChooseProducts: (product:Product)=>void;
  onRemoveProduct: (id:number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, setChooseProducts, onRemoveProduct}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-between w-[1240] mx-auto">
      {products.map((product, index) => (
        <div data-aos="fade-up" data-aos-delay={250*index} key={product.id} className="w-[286px] h-[430px] text-center p-2 mt-[30px]">
          <div className="w-[286px] h-[360px] bg-[#A6A6A6] rounded-[20px]">{product.image}</div>
          <h1 className="text-[22px] my-[12px]">{product.title}</h1>
          <div className="flex justify-between items-center">
            <p className="text-[14px] font-medium">${product.price}</p>
            <div className='flex gap-2'>
              <div className="w-6 h-6 rounded-full border border-black text-black flex justify-center items-center"  onClick={()=>{setChooseProducts(product)}}>
                +
              </div>
              <div className="w-6 h-6 rounded-full border border-black text-black flex justify-center items-center"  onClick={()=>{onRemoveProduct(product.id)}}>
                -
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
