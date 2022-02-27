import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { IToDo } from "../../interface";
import { paging, toDos } from "../../store";
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

function ToDoList() {
  const localToDos = useRecoilValue<IToDo[]>(toDos);
  console.log("list", localToDos);
  const page = useRecoilValue(paging);
  const list = localToDos.slice(
    (page.nowPage - 1) * page.pageValue,
    page.nowPage * page.pageValue
  );
  return (
    <Wrapper>
      {list.map((todo: IToDo) => (
        <ToDoCard
          key={todo.id}
          id={todo.id}
          text={todo.title}
          deadline={todo.deadline}
          done={todo.done}
        />
      ))}
    </Wrapper>
  );
}

export default ToDoList;
