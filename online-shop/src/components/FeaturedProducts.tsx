import { useShopingCatdStore } from '@/store/shoppingCardStore';
import ProductList, { Product } from './Product';
import { ICardProduct, IProduct } from '@/utils/interfaces';
import { ArrowRightIcon } from '@/images/icons';
export default function FeaturedProducts({ data }: { data: unknown[] }) {
  const { addToCard, onReduceItemCount } = useShopingCatdStore();
  const onSelectProduct = (product: ICardProduct) => {
    addToCard(product);
  };

  const onRemoveProduct = (id: number) => {
    onReduceItemCount(id);
  };
  return (
    <div>
      <div
        data-aos="fade-up"
        className="w-[1240px] mx-[auto] flex justify-between mb-[36px] mt-[100px]"
      >
        <h1 data-aos="fade-up" className="text-[36px] font-medium ">
          Featured Products
        </h1>
        <button data-aos="fade-up" data-aos-delay={500} className="w-[181px] h-[59px] bg-[#282828] text-[white] rounded-[50px] flex justify-between items-center px-[22px]">
          <p>All products</p> 
          <ArrowRightIcon/>
        </button>
      </div>
      <ProductList
        products={data as ICardProduct[]}
        setChooseProducts={onSelectProduct}
        page="featured"
      />
    </div>
  );
}
