import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return Array.from({ length: 200 }, (_, i) => ({ id: `${i + 1}` }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return <ProductDetailClient id={params.id} />;
}
