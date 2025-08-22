'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ICardProduct } from '@/utils/interfaces';
import { useProductStore } from '@/store/productStore';

interface ProductListProps {
  products: ICardProduct[];
  setChooseProducts: (product: ICardProduct) => void;
  page: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, setChooseProducts, page }) => {
  const router = useRouter();
  const setCurrentId = useProductStore(state => state.setCurrentId);

  const handleClick = (id: number) => {
    setCurrentId(id.toString());
    router.push('/productDetailPage');
  };

  return (
    <div className="flex flex-wrap gap-4 justify-between w-[1240px] mx-auto">
      {products.map((product, index) => (
        <div
          data-aos="fade-up"
          data-aos-delay={250 * (index % 4)}
          key={product.id}
          className={`w-[286px] h-[430px] text-center p-2 ${page === 'featured' ? 'mb-[20px]' : 'mb-[100px]'}`}
        >
          <div
            className="w-[286px] h-[360px] rounded-[20px] flex justify-center items-center cursor-pointer"
            onClick={() => handleClick(product.id)}
          >
            <img src={product?.images?.[0]} alt="photo" className="w-[286px] h-[360px] object-contain" />
          </div>

          <h1 className="flex justify-center items-center text-[20px] h-[60px] mx-[20px] text-center">
            {product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}
          </h1>

          {page !== 'featured' && (
            <div className="flex justify-between items-center">
              <p className="text-[14px] font-medium">${product.price}</p>
              <div
                className="w-6 h-6 text-black text-[20px] cursor-pointer"
                onClick={() => setChooseProducts(product)}
              >
                +
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
