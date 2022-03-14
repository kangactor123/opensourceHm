/* key 값
search : "SEARCH"
toDo : "TODOS"
*/

import { IChoice, IToDo } from "./interface";

/* SearchKeyword */
export function saveSearchKeyword(keyword: string) {
  const localSearch = localStorage.getItem("SEARCH");
  if (localSearch === null) {
    localStorage.setItem("SEARCH", JSON.stringify([keyword]));
  } else {
    const newList = JSON.parse(localSearch);
    localStorage.setItem("SEARCH", JSON.stringify([...newList, keyword]));
  }
}

export function getSearchKeyword() {
  const localSearch = localStorage.getItem("SEARCH");
  if (localSearch === null) {
    return [];
  } else {
    return [...JSON.parse(localSearch)];
  }
}

/*
TODO

saveInLocalStroage : localStorage에 저장

getFromLocalStroage : 
매개변수 id가 존재할 경우 해당 toDo만 반환, 
아닐 경우 localStorage에서 조회한 전체 리스트 반환

updateFromLocalStorage :
500상태 (Server 가 offline 일 경우) 일 때 localStorage에서 상태를 업데이트 하는 함수
filter 함수를 이용해 해당하는 아이디를 걸러내고, 수정한 객체를 집어넣고 localStorage에 저장

deleteOneFromToDos : 개별 TODO 삭제 메서드

deleteArrayFromToDos :
500상태 (Server 가 offline 일 경우) 일 때 localStorage에서 삭제하려는 toDo를 삭제하는 함수
filter 함수를 이용해 해당하는 아이디를 걸러내고 나머지 toDo는 다시 localStorage에 저장
*/

export function saveInLocalStroage(toDo: IToDo) {
  let oldToDos: IToDo[] = [];

  if (localStorage.getItem("TODOS") !== null) {
    oldToDos = JSON.parse(localStorage.getItem("TODOS") as string);
  }

  localStorage.setItem("TODOS", JSON.stringify([...oldToDos, toDo]));
}

export function getFromLocalStroage(id?: number) {
  const toDos: IToDo[] =
    localStorage.getItem("TODOS") !== null
      ? JSON.parse(localStorage.getItem("TODOS") as string)
      : [];

  //id가 존재할 경우 (선택 toDo 조회)
  if (id !== undefined) {
    for (let toDo of toDos) {
      if (toDo.id === id) {
        return [toDo];
      }
    }
  }
  return [...toDos];
}

export function updateFromLocalStorage(toDo: IToDo) {
  const localToDo: IToDo[] = JSON.parse(
    localStorage.getItem("TODOS") as string
  );
  const idx = localToDo.findIndex((item) => item.id === toDo.id);
  const newToDo = [
    ...localToDo.slice(0, idx),
    toDo,
    ...localToDo.slice(idx + 1),
  ];
  localStorage.setItem("TODOS", JSON.stringify(newToDo));
}

export function deleteOneFromToDos(toDo: IToDo) {
  const localToDo: IToDo[] = JSON.parse(
    localStorage.getItem("TODOS") as string
  );
  const idx = localToDo.findIndex((todo) => todo.id === toDo.id);
  const newList = [...localToDo.slice(0, idx), ...localToDo.slice(idx + 1)];
  localStorage.setItem("TODOS", JSON.stringify(newList));
  return newList;
}

export function deleteArrayFromToDos(toDos: IChoice[]) {
  let newList: IToDo[] = JSON.parse(localStorage.getItem("TODOS") as string);

  for (let i = 0; i < toDos.length; i++) {
    newList = newList.filter((toDo) => toDo.id !== toDos[i].id);
  }
  localStorage.setItem("TODOS", JSON.stringify(newList));
  return newList;
}
