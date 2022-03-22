import React, { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { IToDo, IModal } from "../../interface";
import { updateFromLocalStorage } from "../../localStorage";
import { modalActive, toDos } from "../../store";
import {
  Container,
  Form,
  Title,
  UpdateDate,
  UpdateContent,
  Button,
} from "./update.style";

function UpdateBoard() {
  const [modal, setModal] = useRecoilState<IModal>(modalActive);
  const [toDoList, setToDoList] = useRecoilState(toDos);
  const { register, handleSubmit } = useForm<IToDo>();
  const localToDos = useRecoilValue<IToDo[]>(toDos);
  const toDo = useMemo(
    () => localToDos.find((toDo) => toDo.id === modal.id),
    []
  );
  const exitModal = useCallback(() => {
    setModal((prev) => {
      return {
        active: !prev.active,
        id: modal.id,
      };
    });
  }, []);

  const onValid = (data: IToDo) => {
    const newToDo = {
      id: modal.id,
      title: data.title,
      deadline: data.deadline,
      done: false,
    };
    updateFromLocalStorage(newToDo);
    setToDoList(() => {
      return [...toDoList.filter((todo) => todo.id !== modal.id), newToDo];
    });
    alert("업데이트 성공적");
    exitModal();
  };
  return (
    <Container style={{ top: 100 }}>
      <Form onSubmit={handleSubmit(onValid)}>
        <Title>TODO 업데이트</Title>
        <UpdateDate
          defaultValue={toDo?.deadline}
          type="date"
          {...register("deadline", {
            required: "날짜를 입력해주세요.",
          })}
        />
        <UpdateContent
          defaultValue={toDo?.title}
          {...register("title", {
            required: "투두를 입력해주세요.",
            minLength: {
              value: 1,
              message: "한 글자 이상 입력해주세요.",
            },
            maxLength: {
              value: 40,
              message: "40자 이하로 입력해주세요.",
            },
          })}
        />
        <Button type="submit">업데이트</Button>
        <Button onClick={exitModal}>취소하기</Button>
      </Form>
    </Container>
  );
}

export default React.memo(UpdateBoard);
