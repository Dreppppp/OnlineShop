import { useShopingCatdStore } from '@/store/shoppingCardStore';
import ProductList, { Product } from './Product';
import { ICardProduct, IProduct } from '@/utils/interfaces';
export default function FeaturedProducts({data}:{data:unknown[]}) {
  // const featuredProducts: Product[] = [
  //   {
  //     id: 1,
  //     title: 'Кружка',
  //     price: 15,
  //     image: null,
  //       count:1,
  //   },
  //   {
  //     id: 2,
  //     title: 'Футболка',
  //     price: 25,
  //     image: null,
  //       count:1,
  //   },
  //   {
  //     id: 3,
  //     title: 'Штаны',
  //     price: 30,
  //     image: null,
  //       count:1,
  //   },
  //   {
  //     id: 4,
  //     title: 'Шорты',
  //     price: 20,
  //     image: null,
  //       count:1,
  //   },
  // ];
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
        <p data-aos="fade-up" className="text-[#666666] text-[16px] w-[507px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie
          feugiat. Nunc auctor consectetur elit, quis pulvina.
        </p>
      </div>
      <ProductList
        products={data as ICardProduct[]}
        setChooseProducts={onSelectProduct}
        onRemoveProduct={onRemoveProduct}
      />
    </div>
  );
}
