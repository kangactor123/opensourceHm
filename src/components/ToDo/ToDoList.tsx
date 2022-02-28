import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { IToDo } from "../../interface";
import { paging, toDos } from "../../store";
import { sortList } from "../../util/sort";
import ToDoCard from "./ToDoCard";

const Wrapper = styled.div`
  max-width: 660px;
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
}

function ToDoList({ propList }: ListProps) {
  //const localToDos = useRecoilValue<IToDo[]>(toDos);
  const sorting = sortList(propList);
  const page = useRecoilValue(paging);
  const list = sorting.slice(
    (page.nowPage - 1) * page.pageValue,
    page.nowPage * page.pageValue
  );

  return (
    <Wrapper>
      {list.length == 0 ? (
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
