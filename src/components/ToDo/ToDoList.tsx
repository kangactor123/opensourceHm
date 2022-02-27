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
/*
5 개 노출
1 - (0,5)
2 - (5,10)
3 - (10,15)
10 개 노출
1 - (0, 10)
2 - (10, 20)
3 - (20, 30)
15 개 노출
1 - (0, 15)
2 - (15, 30)
3 - (30, 45)

start = nowPage - 1 * value 
end = nowPage * value

*/
const NoToDo = styled.div`
  font-size: 1.3em;
  font-family: "Times New Roman", Times, serif;
`;

function ToDoList() {
  const localToDos = useRecoilValue<IToDo[]>(toDos);
  const sorting = sortList(localToDos);
  const page = useRecoilValue(paging);
  const list = sorting.slice(
    (page.nowPage - 1) * page.pageValue,
    page.nowPage * page.pageValue
  );

  return (
    <Wrapper>
      {list.length == 0 ? (
        <NoToDo>생성하신 ToDo가 없습니다.</NoToDo>
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
