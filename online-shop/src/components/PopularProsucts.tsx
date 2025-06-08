import { useShopingCatdStore } from '@/store/shoppingCardStore';
import ProductList, { Product } from './Product';
import { ArrowRightIcon } from '@/images/icons';

export default function PopularProsucts() {
  const popularProducts: Product[] = [
    {
      id: 1,
      title: 'Кружка',
      price: 15,
      image: null,
      count:1,
    },
    {
      id: 2,
      title: 'Футболка',
      price: 25,
      image: null,
        count:1,
    },
    {
      id: 3,
      title: 'Штаны',
      price: 30,
      image: null,
        count:1,
    },
    {
      id: 4,
      title: 'Шорты',
      price: 20,
      image: null,
        count:1,
    },
    {
      id: 5,
      title: 'Кружка',
      price: 15,
      image: null,
        count:1,
    },
    {
      id: 6,
      title: 'Футболка',
      price: 25,
      image: null,
        count:1,
    },
    {
      id: 7,
      title: 'Штаны',
      price: 30,
      image: null,
        count:1,
    },
    {
      id: 8,
      title: 'Шорты',
      price: 20,
      image: null,
        count:1,
    },
  ];
  const { addToCard, removeFromCard } = useShopingCatdStore();
  const onSelectProduct = (product: Product) => {
    addToCard(product);
  };

  const onRemoveProduct = (id: number) => {
    removeFromCard(id);
  };
  return (
    <div className="mt-[170px]">
      <div className="w-[1240px] flex justify-between mx-[auto] items-center">
        <div className="w-[610px]">
          <h1 data-aos="fade-up" className="text-[36px] font-medium ">
            Most Popular Products
          </h1>
          <p data-aos="fade-up" className="text-[#666666] text-[16px] mt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in
            molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
          </p>
        </div>
        <div
          className="w-[160px] h-[60px] rounded-[30px] bg-[#282828] flex justify-between px-[20px] pt-[16px]"
          data-aos="fade-down"
        >
          <p className="text-[20px] text-white ">View All</p>
          <ArrowRightIcon/>
        </div>
      </div>
      <div className="mt-[10px]">
        <ProductList
          products={popularProducts}
          setChooseProducts={onSelectProduct}
          onRemoveProduct={onRemoveProduct}
        />
      </div>
    </div>
  );
}
