import { IToDo } from "../interface";

export default function getKeywordList(
  keyword: string,
  list: IToDo[]
): IToDo[] {
  const done = keyword === "done" ? true : false;
  return [...list.filter((toDo) => done === toDo.done)];
}
