import styled from "styled-components";
import ToDoCard from "./ToDoCard";

const Wrapper = styled.div`
  max-width: 660px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

function ToDoList() {
  const temp = [
    { id: 1, deadline: 123, text: "123123123", done: false },
    { id: 2, deadline: 123, text: "123123123", done: false },
    { id: 3, deadline: 123, text: "123123123", done: false },
    { id: 4, deadline: 123, text: "123123123", done: false },
    { id: 5, deadline: 123, text: "123123123", done: false },
    { id: 6, deadline: 123, text: "123123123", done: false },
    { id: 7, deadline: 123, text: "123123123", done: false },
  ];
  return (
    <Wrapper>
      {temp.map((todo) => (
        <ToDoCard
          key={todo.id}
          text={todo.text}
          deadline={todo.deadline}
          done={todo.done}
        />
      ))}
    </Wrapper>
  );
}

export default ToDoList;
