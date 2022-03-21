/*
레거시 코드입니다.
*/

import React, { useRef, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { deleteArrayFromToDos, saveInLocalStroage } from "../../localStorage";
import { choice, searchKeyword, toDos } from "../../store";
import Button from "../common/Button";

const Wrapper = styled.div`
  height: 20vh;
  width: 660px;
  margin: 0 auto;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const InputBox = styled.form`
  padding: 10px;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  position: relative;
`;

export const InputDate = styled.input`
  font-size: 12px;
  height: 30%;
  padding: 10px;
  background-color: inherit;
  border: 1px solid;
  border-radius: 5px;
`;

export const InputContents = styled.textarea`
  width: 100%;
  height: 80%;
  padding: 10px;
  background-color: inherit;
  border: 1px solid;
  border-radius: 5px;
  resize: none;
  &::placeholder {
    color: ${(props) => props.theme.light.font};
    opacity: 1;
  }
`;

export const ButtonBox = styled.div`
  width: 30%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function InputSection() {
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [localTodos, setLocalToDos] = useRecoilState(toDos);
  const choiceArray = useRecoilValue(choice);
  const setKeyword = useSetRecoilState(searchKeyword);
  const inputContent = useRef<HTMLTextAreaElement>(null);
  const inputDate = useRef<HTMLInputElement>(null);
  const changeDate = (event: React.FormEvent<HTMLInputElement>) => {
    setDate(event.currentTarget.value);
  };
  const changeContent = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value);
  };
  const makeNewToDo = () => {
    if (date === "" || date === null) {
      alert("날짜를 선택해주세요");
      inputDate.current?.focus();
      return;
    }
    if ((new Date(date).getTime() - Date.now()) / 1000 / 60 / 60 / 24 < -1) {
      alert("이미 지난 날은 선택하실 수 없습니다.");
      inputDate.current?.focus();
      return;
    }
    if (content === "" || content === null) {
      alert("내용을 입력해주세요");
      inputContent.current?.focus();
      return;
    }
    if (content.length < 10) {
      alert("10글자 이상 입력해주세요");
      inputContent.current?.focus();
      return;
    }
    const newToDo = {
      id: Date.now(),
      title: content,
      deadline: date,
      done: false,
    };
    saveInLocalStroage(newToDo);
    setLocalToDos(() => {
      return [...localTodos, newToDo];
    });
    setKeyword("");
    setDate("");
    setContent("");
  };
  const mulDeleteClick = () => {
    if (window.confirm("선택한 TODO를 삭제하시겠나요?")) {
      if (choiceArray.length === 0) {
        alert("선택한 ToDo가 없습니다.");
        return;
      } else {
        const newList = deleteArrayFromToDos(choiceArray);
        setLocalToDos(newList);
      }
    }
  };
  return (
    <Wrapper>
      <InputBox>
        <InputDate
          ref={inputDate}
          type="date"
          value={date}
          onChange={changeDate}
        />
        <InputContents
          placeholder="할 것을 입력해주시오..."
          value={content}
          onChange={changeContent}
          ref={inputContent}
        />
      </InputBox>
      <ButtonBox>
        <Button
          type="submit"
          text="생성하기"
          hoverColor="rgba(0,0,255,0.5)"
          clickFcn={makeNewToDo}
        />
        <Button
          clickFcn={mulDeleteClick}
          text="선택삭제"
          hoverColor="rgba(255,0,0,0.5)"
        />
      </ButtonBox>
    </Wrapper>
  );
}

export default InputSection;
