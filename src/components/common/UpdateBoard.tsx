import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { updateFromLocalStorage } from "../../localStorage";
import { modalActive, toDos } from "../../store";
import { Btn } from "./Button";

const Container = styled.div`
  position: absolute;
  max-width: 400px;
  height: 50vh;
  background-color: ${(props) => props.theme.light.background};
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 60%;
  margin-bottom: 5px;
`;

const UpdateDate = styled.input`
  width: 80%;
  height: 10%;
`;
const UpdateCotent = styled.textarea`
  width: 80%;
  height: 90%;
  resize: none;
`;

const Button = styled(Btn)`
  width: 60%;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 5px;
`;

/* 수정하기 클릭했을 때 넘어오는 정보 api 이용해서 toDo 선택해오고 뿌려주자 */
function UpdateBoard() {
  const [modal, setModal] = useRecoilState(modalActive);
  const [toDoList, setToDoList] = useRecoilState(toDos);
  const [deadline, setDeadLine] = useState("");
  const [title, setTitle] = useState("");
  const exitModal = () => {
    setModal((prev) => {
      return {
        active: !prev.active,
        id: modal.id,
      };
    });
  };
  const updateToDo = () => {
    /* update 처리 */
    console.log("modal: ", modal.id);
    const newToDo = {
      id: modal.id,
      title,
      deadline,
      done: false,
    };
    updateFromLocalStorage(newToDo); //로컬에 업데이트
    setToDoList(() => {
      return [...toDoList.filter((todo) => todo.id !== modal.id), newToDo];
    });
    alert("업데이트 성공적");
    exitModal();
  };
  const changeDate = (event: React.FormEvent<HTMLInputElement>) => {
    setDeadLine(event.currentTarget.value);
  };
  const changeTitle = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setTitle(event.currentTarget.value);
  };
  return (
    <Container style={{ top: 100 }}>
      <Form>
        <UpdateDate type="date" onChange={changeDate} value={deadline} />
        <UpdateCotent value={title} onChange={changeTitle} />
      </Form>
      <Button onClick={updateToDo}>수정하기</Button>
      <Button onClick={exitModal}>나가기</Button>
    </Container>
  );
}

export default React.memo(UpdateBoard);
