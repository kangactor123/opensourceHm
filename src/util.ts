import { IToDo } from "./interface";

const local = localStorage.getItem("TODOS");

export function makeNoticeBoard() {
  const array = [];
  if (local?.length == 2 || local == null) {
    const notice: IToDo = {
      id: Date.now(),
      title: "공지 입니다.",
      deadline: "3333-03-31",
      done: false,
    };
    array.push(notice);
    localStorage.setItem("TODOS", JSON.stringify(array));
  }
}
