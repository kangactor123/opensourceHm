import React, { useCallback, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IModal } from "../../interface";
import { deleteOneFromToDos, updateFromLocalStorage } from "../../localStorage";
import { choice, modalActive, paging, toDos } from "../../store";
import Button from "../common/Button";
import {
  CardWrapper,
  ContentBox,
  DeadLine,
  Content,
  BtnBox,
} from "./card.style";

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
  const [page, setPage] = useRecoilState(paging);
  const modalClick = () => {
    setModalActive((prev) => {
      return {
        active: !prev.active,
        id,
      };
    });
  };
  const coiceClick = useCallback(() => {
    if (choiceArray.findIndex((todo) => todo.id === id) !== -1) {
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
  }, []);
  const deleteClick = useCallback(() => {
    const newList = deleteOneFromToDos({ id, title: text, done, deadline });
    setLocalTodos(newList);
    if (page.nowPage !== 1) {
      newList.length % page.pageValue === 0 &&
        setPage((prev) => {
          return { nowPage: prev.nowPage - 1, pageValue: prev.pageValue };
        });
    }
  }, []);
  const doneClick = useCallback(() => {
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
  }, []);
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
          text="Choice"
          bgColor={choose ? "red" : "lightgray"}
          clickFcn={coiceClick}
        />
        <Button
          clickFcn={doneClick}
          text={doing ? "Do" : "Done"}
          bgColor={doing ? "lightblue" : "lightgray  "}
        />
        <Button text="Update" hoverColor="brown" clickFcn={modalClick} />
        <Button text="Delete" hoverColor="blue" clickFcn={deleteClick} />
      </BtnBox>
    </CardWrapper>
  );
}

export default React.memo(ToDoCard);
