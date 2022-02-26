import { atom } from "recoil";
import { getFromLocalStroage } from "./api/\btoDoApi";
import { IModal, ItoDoType } from "./interface";

const localToDos = getFromLocalStroage();

export const modalActive = atom<IModal>({
  key: "modalActive",
  default: {
    id: 123,
    active: false,
  },
});

export const toDos = atom<ItoDoType[]>({
  key: "toDos",
  default: localToDos === null || localToDos.length > 0 ? localToDos : [],
});

interface IPage {
  pageValue: number;
  nowPage: number;
}

export const paging = atom<IPage>({
  key: "paging",
  default: {
    pageValue: 5,
    nowPage: 1,
  },
});
