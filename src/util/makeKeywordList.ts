import { IToDo } from "../interface";

export function makeKeywordList(list: IToDo[], keyword: string) {
  return [...list.filter((todo) => todo.title.includes(keyword))];
}
