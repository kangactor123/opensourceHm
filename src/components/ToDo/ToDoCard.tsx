import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IModal } from "../../interface";
import { modalActive } from "../../store";
import Button from "../common/Button";

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
  id: number;
  text: string;
  deadline: string;
  done: boolean;
}

/* 기한 임박 시 테두리 빨간색으로 표기해야함 */
/* 현재 deadline이 string으로 넘어옴 */
/* 수정하기 누르면 Modal창 나와서 수정하자 */
function ToDoCard({ id, text, deadline, done }: ToDoProps) {
  const [choose, setChoose] = useState(false);
  const setModalActive = useSetRecoilState<IModal>(modalActive);
  const modal = useRecoilValue(modalActive);
  const modalClick = () => {
    setModalActive((prev) => {
      return {
        active: !prev.active,
        id,
      };
    });
  };

  return (
    <CardWrapper dead={false}>
      <ContentBox>
        <DeadLine>{deadline}</DeadLine>
        <Content>{text}</Content>
      </ContentBox>
      <BtnBox>
        <Button text="선택" bgColor={choose ? "red" : "lightgray"} />
        <Button text={done ? "아직이다" : "끝장냈다"} hoverColor="aqua" />
        <Button text="수정하자" clickFcn={modalClick} />
        <Button text="개별삭제" hoverColor="blue" />
      </BtnBox>
    </CardWrapper>
  );
}

export default ToDoCard;
