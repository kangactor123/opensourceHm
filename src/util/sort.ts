import { IToDo } from "../interface";

export function sortList(list: IToDo[]) {
  const newList = [...list];
  for (let i = 0; i < newList.length; i++) {
    for (let j = 0; j < newList.length - 1; j++) {
      if (
        new Date(newList[j].deadline).getTime() -
          new Date(newList[j + 1].deadline).getTime() >
        0
      ) {
        //앞에 있는 날이 더 훗날이라는 뜻
        let temp = newList[j];
        newList[j] = newList[j + 1];
        newList[j + 1] = temp;
      }
    }
  }
  return newList;
}
