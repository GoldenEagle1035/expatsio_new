import { create } from "zustand";

type TUsePage = {
  currentPage: number;
};

export const usePage = create<TUsePage>((set) => ({
  currentPage: 0,
}));

