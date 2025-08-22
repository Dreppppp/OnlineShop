import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  const productIds = [];
  for (let i = 1; i < 200; i++) {
    productIds.push(`${i}`);
  }
  return productIds.map(id => ({ id }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProductDetailClient id={params.id} />;
}
