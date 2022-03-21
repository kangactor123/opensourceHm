import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IModal } from "../../interface";
import { deleteOneFromToDos, updateFromLocalStorage } from "../../localStorage";
import { choice, modalActive, toDos } from "../../store";
import Button from "../common/Button";

const CardWrapper = styled.div<{ dead: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 10px;
  gap: 10px;
  border: ${(props) => (props.dead ? "2px" : "1px")} solid
    ${(props) => (props.dead ? "red" : "black")};
  margin: 10px;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const DeadLine = styled.span`
  font-size: 1em;
`;
const Content = styled.p`
  font-size: 1.3em;
`;

const BtnBox = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

interface ToDoProps {
  id?: number;
  text: string;
  deadline: string;
  done: boolean;
}

function ToDoCard({ id = 0, text, deadline, done }: ToDoProps) {
  const [choose, setChoose] = useState(false);
  const [doing, setDoing] = useState(done);
  const setModalActive = useSetRecoilState<IModal>(modalActive);
  const [choiceArray, setChoiceArray] = useRecoilState(choice);
  const [localToDos, setLocalTodos] = useRecoilState(toDos);
  const modalClick = () => {
    setModalActive((prev) => {
      return {
        active: !prev.active,
        id,
      };
    });
  };
  const coiceClick = () => {
    if (choiceArray.findIndex((todo) => todo.id === id) != -1) {
      setChoose((prev) => !prev);
      setChoiceArray((prev) => {
        return [...prev.filter((todo) => todo.id !== id)];
      });
    } else {
      setChoose((prev) => !prev);
      setChoiceArray((prev) => {
        return [...prev, { id }];
      });
    }
  };
  const deleteClick = () => {
    if (window.confirm("정말 삭제하시겠나요?")) {
      const newList = deleteOneFromToDos({ id, title: text, done, deadline });

      setLocalTodos(newList);
    }
  };
  const doneClick = () => {
    const newToDo = {
      id,
      title: text,
      deadline,
      done: !done,
    };
    const idx = localToDos.findIndex((todo) => todo.id === id);
    setLocalTodos((prev) => {
      return [...prev.slice(0, idx), newToDo, ...prev.slice(idx + 1)];
    });
    setDoing((prev) => !prev);
    updateFromLocalStorage(newToDo);
  };
  return (
    <CardWrapper
      dead={
        (new Date(deadline).getTime() - Date.now()) / 1000 / 60 / 60 / 24 < 3
          ? true
          : false
      }
    >
      <ContentBox>
        <DeadLine>{deadline}</DeadLine>
        <Content>{text}</Content>
      </ContentBox>
      <BtnBox>
        <Button
          text="선택"
          bgColor={choose ? "red" : "lightgray"}
          clickFcn={coiceClick}
        />
        <Button
          clickFcn={doneClick}
          text={doing ? "아직이다" : "끝장냈다"}
          bgColor={doing ? "lightblue" : "lightgray  "}
        />
        <Button text="수정하자" hoverColor="brown" clickFcn={modalClick} />
        <Button text="개별삭제" hoverColor="blue" clickFcn={deleteClick} />
      </BtnBox>
    </CardWrapper>
  );
}

export default ToDoCard;
