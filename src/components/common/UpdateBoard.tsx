import React, { useRef, useState } from "react";
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

function UpdateBoard() {
  const [modal, setModal] = useRecoilState(modalActive);
  const [toDoList, setToDoList] = useRecoilState(toDos);
  const [deadline, setDeadLine] = useState("");
  const [title, setTitle] = useState("");
  const inputContent = useRef<HTMLTextAreaElement>(null);
  const inputDate = useRef<HTMLInputElement>(null);
  const exitModal = () => {
    setModal((prev) => {
      return {
        active: !prev.active,
        id: modal.id,
      };
    });
  };
  const updateToDo = () => {
    if (deadline === "" || deadline === null) {
      alert("날짜를 선택해주세요");
      inputDate.current?.focus();
      return;
    }
    if (
      (new Date(deadline).getTime() - Date.now()) / 1000 / 60 / 60 / 24 <
      -1
    ) {
      alert("이미 지난 날은 선택하실 수 없습니다.");
      inputDate.current?.focus();
      return;
    }
    if (title === "" || title === null) {
      alert("내용을 입력해주세요");
      inputContent.current?.focus();
      return;
    }
    if (title.length < 10) {
      alert("10글자 이상 입력해주세요");
      inputContent.current?.focus();
      return;
    }
    const newToDo = {
      id: modal.id,
      title,
      deadline,
      done: false,
    };
    updateFromLocalStorage(newToDo);
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
        <UpdateDate
          ref={inputDate}
          type="date"
          onChange={changeDate}
          value={deadline}
        />
        <UpdateCotent ref={inputContent} value={title} onChange={changeTitle} />
      </Form>
      <Button onClick={updateToDo}>수정하기</Button>
      <Button onClick={exitModal}>나가기</Button>
    </Container>
  );
}

export default React.memo(UpdateBoard);
