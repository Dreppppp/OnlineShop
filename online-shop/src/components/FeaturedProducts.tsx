import { useShopingCatdStore } from '@/store/shoppingCardStore';
import { ICardProduct, IProduct } from '@/utils/interfaces';
import { ArrowRightIcon } from '@/images/icons';
import Link from 'next/link';
import ProductList from './Product';
export default function FeaturedProducts({ data }: { data: unknown[] }) {
  const { addToCard, onReduceItemCount } = useShopingCatdStore();
  const onSelectProduct = (product: ICardProduct) => {
    addToCard(product);
  };

  const onRemoveProduct = (id: number) => {
    onReduceItemCount(id);
  };
  return (
    <div className='w-[1240px] mx-auto'>
      <div
        data-aos="fade-up"
        className="flex justify-between mb-[36px] mt-[100px]"
      >
        <h1 data-aos="fade-up" className="text-[36px] font-medium ">
          Featured Products
        </h1>
        <Link href="/products">
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-105'>
          <button data-aos="fade-up" data-aos-delay={500} className="cursor-pointer w-[181px] h-[59px] bg-[#282828] text-[white] rounded-[50px] flex justify-between items-center px-[22px]">
            <p>All products</p> 
            <ArrowRightIcon/>
          </button>
        </div>
        </Link>
      </div>
      <ProductList
        products={data as ICardProduct[]}
        setChooseProducts={onSelectProduct}
        page="featured"
      />
    </div>
  );
}
