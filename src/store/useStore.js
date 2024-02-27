import { create } from "zustand";

export const useStore = create((set) => ({
  value: "",
  updateValue: (newValue) => set({ value: newValue }),
}));
