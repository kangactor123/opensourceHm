import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 660px;
  height: 20vh;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
`;

const InputBox = styled.form`
  padding: 10px;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const InputDate = styled.input`
  font-size: 12px;
  height: 30%;
  padding: 10px;
  background-color: inherit;
  border: 1px solid;
  border-radius: 5px;
`;

const InputContents = styled.textarea`
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

const ButtonBox = styled.div`
  width: 30%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button<{ hoverColor: string }>`
  width: 100%;
  height: 30px;
  text-align: center;
  border: 0;
  border-radius: 15px;
  background-color: lightgray;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${(props) => props.hoverColor};
  }
`;

function InputSection() {
  return (
    <Wrapper>
      <InputBox>
        <InputDate type="date" />
        <InputContents placeholder="할 것을 입력해주시오..." />
      </InputBox>
      <ButtonBox>
        <Button hoverColor="rgba(0,0,255,0.5)">생성하기</Button>
        <Button hoverColor="rgba(255,0,0,0.5)">삭제하기</Button>
      </ButtonBox>
    </Wrapper>
  );
}

export default InputSection;
