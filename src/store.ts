import { atom } from "recoil";

export interface IModal {
  id: number;
  active: boolean;
}

export const modalActive = atom<IModal>({
  key: "modalActive",
  default: {
    id: 123,
    active: false,
  },
});
