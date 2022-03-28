import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { IToDo } from "../../interface";
import { paging } from "../../store";
import getKeywordList from "../../util/getKeywordList";
import { sortList } from "../../util/sort";
import ToDoCard from "./ToDoCard";

const Wrapper = styled.div`
  max-width: 660px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const NoToDo = styled.div`
  font-size: 1.3em;
  font-family: "Times New Roman", Times, serif;
`;

interface ListProps {
  propList: IToDo[];
  kind?: string;
}

function ToDoList({ propList, kind }: ListProps) {
  const page = useRecoilValue(paging);
  // const sorting = useMemo(() => {
  //   return sortList(propList);
  // }, [propList]);
  // undefined 일 경우 일반 Home , 아닐 경우 Did or Do
  const sorting = useMemo(() => {
    return kind === undefined
      ? sortList(propList)
      : getKeywordList(kind, propList);
  }, [propList, kind]);
  const list = sorting.slice(
    (page.nowPage - 1) * page.pageValue,
    page.nowPage * page.pageValue
  );

  return (
    <Wrapper>
      {list.length === 0 && page.nowPage === 1 ? (
        <NoToDo>박스에 담긴 ToDo가 없습니다.</NoToDo>
      ) : (
        list.map((todo: IToDo) => (
          <ToDoCard
            key={todo.id}
            id={todo.id}
            text={todo.title}
            deadline={todo.deadline}
            done={todo.done}
          />
        ))
      )}
    </Wrapper>
  );
}

export default ToDoList;
