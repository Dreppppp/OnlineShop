import { create } from 'zustand';
import { IProduct } from '@/utils/interfaces';

interface ProductStore {
  currentId: string; 
  setCurrentId: (id: string) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  currentId: '1', 
  setCurrentId: (id: string) => set({ currentId: id }),
}));
