'use client';

import { useProductStore } from '@/store/productStore';
import Menu from '@/components/Menu';
import ProductDetailClient from '@/components/ProductDetailClient';

export default function ProductDetailPage() {
  const currentId = useProductStore((state) => state.currentId);

  return (
    <div>
      <div className="w-full px-[108px] pt-[40px]">
        <Menu showStickyLogo />
      </div>

      <ProductDetailClient id={currentId} />
    </div>
  );
}
