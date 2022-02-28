import { atom } from "recoil";
import { IChoice, IModal, IPage, IToDo } from "./interface";
import { getFromLocalStroage, getSearchKeyword } from "./localStorage";

const localToDos = getFromLocalStroage();
const searchKeywordList = getSearchKeyword();

export const modalActive = atom<IModal>({
  key: "modalActive",
  default: {
    id: Date.now(),
    active: false,
  },
});

export const toDos = atom<IToDo[]>({
  key: "toDos",
  default: localToDos,
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
  default: searchKeywordList,
});

export const searchKeyword = atom<string>({
  key: "searchToDos",
  default: "",
});
