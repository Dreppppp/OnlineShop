// app/productDetailPage/[id]/page.tsx

import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  const productIds = [];
  for (let i = 1; i < 200; i++) {
    productIds.push(`${i}`);
  }
  return productIds.map(id => ({ id }));
}

type PageProps = {
  params: Awaited<{ id: string }>;
};

export default function ProductDetailPage({ params }: PageProps) {
  return <ProductDetailClient id={params.id} />;
}
