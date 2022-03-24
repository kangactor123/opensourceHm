import { atom } from "recoil";
import { IChoice, IModal, IPage, IToDo } from "./interface";
import { getFromLocalStroage, getSearchKeyword } from "./localStorage";

export const modalActive = atom<IModal>({
  key: "modalActive",
  default: {
    id: 0,
    active: false,
  },
});

export const toDos = atom<IToDo[]>({
  key: "toDos",
  default: getFromLocalStroage(),
});

export const paging = atom<IPage>({
  key: "paging",
  default: {
    pageValue: 5,
    nowPage: 1,
  },
});

export const choice = atom<IChoice[]>({
  key: "choice",
  default: [],
});

export const searchList = atom<string[]>({
  key: "searchList",
  default: getSearchKeyword(),
});

export const searchKeyword = atom<string>({
  key: "searchToDos",
  default: "",
});
