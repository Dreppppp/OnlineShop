import { Product } from '@/components/Product';
import { create } from 'zustand';

type Store = {
  shopingCard: Product[];
  addToCard: (product: Product) => void;
  removeFromCard: (id: number) => void;
  onIncreaseItemCount: (id: number) => void;
  onReduceItemCount: (id: number) => void;
};

export const useShopingCatdStore = create<Store>()((set) => ({
  shopingCard: [],
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
  addToCard: (product: Product) =>
    set((state) => ({ shopingCard: [product, ...state.shopingCard] })),
  removeFromCard: (ID: number) =>
    set((state) => ({ shopingCard: state.shopingCard.filter(({ id }) => id !== ID) })),
}));
