import { create } from "zustand";

interface CartState {
  shake: boolean;
  triggerShake: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  shake: false,
  triggerShake: () => {
    set({ shake: true });
    setTimeout(() => set({ shake: false }), 500); 
  },
}));
