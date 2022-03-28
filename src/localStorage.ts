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
  setTrashToDos(toDo);
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

/**
 * 쓰래기통 만들기
 * 쓰래기통 localStorage 만들고 거기 안에 넣자
 * atom으로 만들지 말고 그냥 localStorage만 이용?
 * 같은게 있으면 삭제 안되게 해야함
 **/

export function setTrashToDos(toDo: IToDo): void {
  const trashToDos: IToDo[] = JSON.parse(
    localStorage.getItem("TRASH_TODOS") as string
  );

  if (trashToDos === null) {
    localStorage.setItem("TRASH_TODOS", JSON.stringify([toDo]));
  } else {
    //Trash에 겹치는 ToDo가 있나 검사
    for (let i = 0; i < trashToDos.length; i++) {
      if (trashToDos[i].id === toDo.id) {
        return;
      }
    }
    localStorage.setItem("TRASH_TODOS", JSON.stringify([...trashToDos, toDo]));
  }
}

export function getTrashToDos(): IToDo[] {
  const trashToDos: IToDo[] = JSON.parse(
    localStorage.getItem("TRASH_TODOS") as string
  );

  return trashToDos === null ? [] : trashToDos;
}
