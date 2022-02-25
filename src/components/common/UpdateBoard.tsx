import { useViewportScroll } from "framer-motion";
import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { modalActive } from "../../store";
import { Btn } from "./Button";

const Container = styled.div`
  position: absolute;
  width: 30vw;
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

interface UpdateProps {
  id: number;
}

/* 수정하기 클릭했을 때 넘어오는 정보 api 이용해서 toDo 선택해오고 뿌려주자 */
function UpdateBoard({ id }: UpdateProps) {
  const temp = { id: 123, deadline: 123, done: false, content: "123123" };
  const setModal = useSetRecoilState(modalActive);
  const exitModal = () => {
    setModal((prev) => {
      return {
        active: !prev.active,
        id,
      };
    });
  };
  const updateToDo = () => {
    /* update 처리 */
    alert("update success");
    exitModal();
  };
  return (
    <Container style={{ top: 100 }}>
      <Form>
        <UpdateDate type="date" />
        <UpdateCotent value={temp.content} />
      </Form>
      <Button onClick={updateToDo}>수정하기</Button>
      <Button onClick={exitModal}>나가기</Button>
    </Container>
  );
}

export default UpdateBoard;
