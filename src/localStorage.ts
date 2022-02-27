/* key 값
search : "SEARCH"
toDo : "TODOS"
*/

import { useRecoilState } from "recoil";
import { getFromLocalStroage } from "./api/\btoDoApi";
import { IToDo } from "./interface";
import { IChoice, toDos } from "./store";

/* SearchKeyword */
const localSearch = localStorage.getItem("SEARCH");

export function saveSearchKeyword(keyword: string) {
  if (localSearch === null) {
    localStorage.setItem("SEARCH", JSON.stringify([keyword]));
  } else {
    const newList = JSON.parse(localSearch);
    localStorage.setItem("SEARCH", JSON.stringify([...newList, keyword]));
  }
}

export function getSearchKeyword() {
  if (localSearch === null) {
    return [];
  } else {
    return [...JSON.parse(localSearch)];
  }
}

/* TODO */
/* atom도 같이 삭제해주자. */
const localToDo: IToDo[] = JSON.parse(localStorage.getItem("TODOS") as string);

export function updateFromLocalStorage(toDo: IToDo) {
  const toDos = getFromLocalStroage();
  const idx = toDos.findIndex((item) => item.id === toDo.id);
  const newToDo = [...toDos.slice(0, idx), toDo, ...toDos.slice(idx + 1)];
  localStorage.setItem("TODOS", JSON.stringify(newToDo));
}

export function deleteOneFromToDos(toDo: IToDo) {
  const idx = localToDo.findIndex((todo) => todo.id === toDo.id);
  const newList = [...localToDo.slice(0, idx), ...localToDo.slice(idx + 1)];
  localStorage.setItem("TODOS", JSON.stringify(newList));
  return newList;
}

export function deleteArrayFromToDos(toDos: IChoice[]) {
  let newList: IToDo[] = localToDo;

  for (let i = 0; i < toDos.length; i++) {
    newList = newList.filter((toDo) => toDo.id !== toDos[i].id);
  }
  localStorage.setItem("TODOS", JSON.stringify(newList));
  return newList;
}
