import { atom } from "recoil";
import { getFromLocalStroage } from "./api/\btoDoApi";
import { IModal, IPage, IToDo } from "./interface";
import { getSearchKeyword } from "./localStorage";

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

export interface IChoice {
  id: number;
}

/* 선택된 toDo의 아이디를 넣어주자. */
export const choice = atom<IChoice[]>({
  key: "choice",
  default: [],
});

export const searchList = atom<string[]>({
  key: "searchList",
  default: searchKeyword,
});
