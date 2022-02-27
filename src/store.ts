import { atom } from "recoil";
import { IChoice, IModal, IPage, IToDo } from "./interface";
import { getFromLocalStroage, getSearchKeyword } from "./localStorage";

const localToDos = getFromLocalStroage();
const searchKeyword = getSearchKeyword();

export const modalActive = atom<IModal>({
  key: "modalActive",
  default: {
    id: 123,
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

/* 선택된 toDo의 아이디를 넣어주자. */
export const choice = atom<IChoice[]>({
  key: "choice",
  default: [],
});

export const searchList = atom<string[]>({
  key: "searchList",
  default: searchKeyword,
});
