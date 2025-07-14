import { Product } from '@/components/Product';
import { ICardProduct } from '@/utils/interfaces';
import { create } from 'zustand';

type Store = {
  shopingCard: ICardProduct[];
  addToCard: (product: ICardProduct) => void;
  removeFromCard: (id: number) => void;
  onIncreaseItemCount: (id: number) => void;
  onReduceItemCount: (id: number) => void;
};

export const useShopingCatdStore = create<Store>()((set) => ({
  shopingCard: [
  ],
  onIncreaseItemCount: (id: number) =>
    set((state) => ({
      shopingCard: state.shopingCard.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      ),
    })),
  onReduceItemCount: (id: Number) =>
    set((state) => ({
      shopingCard: state.shopingCard
        .map((product) => (product.id === id ? { ...product, count: product.count - 1 } : product))
        .filter(({ count }) => !!count),
    })),
  addToCard: (product: ICardProduct) =>
   set((state) => {
    let productIndex = state.shopingCard.findIndex((item) => item.id === product.id);

    if(productIndex > -1){
      let findedProduct = state.shopingCard[productIndex];
      findedProduct.count += 1;
      let shopingCardCopy = structuredClone(state.shopingCard);
      shopingCardCopy.splice(productIndex, 1, findedProduct);

      return ({
        shopingCard: shopingCardCopy
      })
    }

    return {shopingCard: [product, ...state.shopingCard]}
   }),
  removeFromCard: (ID: number) =>
    set((state) => ({ shopingCard: state.shopingCard.filter(({ id }) => id !== ID) })),
}));
