import React, { useState } from "react";
import styled from "styled-components";
import { saveInLocalStroage } from "../api/\btoDoApi";
import Button from "./common/Button";

const Wrapper = styled.div`
  max-width: 660px;
  height: 20vh;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
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
  const changeDate = (event: React.FormEvent<HTMLInputElement>) => {
    setDate(event.currentTarget.value);
  };
  const changeContent = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value);
  };
  const createToDo = () => {
    const newToDo = {
      id: Date.now(),
      title: content,
      deadline: date,
      done: false,
    };
    saveInLocalStroage(newToDo);
    setDate("");
    setContent("");
  };
  return (
    <Wrapper>
      <InputBox>
        <InputDate type="date" value={date} onChange={changeDate} />
        <InputContents
          placeholder="할 것을 입력해주시오..."
          value={content}
          onChange={changeContent}
        />
      </InputBox>
      <ButtonBox>
        <Button
          text="생성하기"
          hoverColor="rgba(0,0,255,0.5)"
          clickFcn={createToDo}
        />
        <Button text="삭제하기" hoverColor="rgba(255,0,0,0.5)" />
      </ButtonBox>
    </Wrapper>
  );
}

export default InputSection;
