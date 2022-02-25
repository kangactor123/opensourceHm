import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const CardWrapper = styled.div<{ dead: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 10px;
  gap: 10px;
  border: 1px solid ${(props) => (props.dead ? "red" : "black")};
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
  text: string;
  deadline: number;
  done: boolean;
}

/* 기한 임박 시 테두리 빨간색으로 표기해야함 */
function ToDoCard({ text, deadline, done }: ToDoProps) {
  const [choose, setChoose] = useState(false);
  return (
    <CardWrapper dead={false}>
      <ContentBox>
        <DeadLine>123</DeadLine>
        <Content>123123</Content>
      </ContentBox>
      <BtnBox>
        <Button text={done ? "아직이다" : "끝장냈다"} hoverColor="aqua" />
        <Button text="선택" bgColor={choose ? "red" : "lightgray"} />
        <Button text="개별삭제" hoverColor="blue" />
      </BtnBox>
    </CardWrapper>
  );
}

export default ToDoCard;
