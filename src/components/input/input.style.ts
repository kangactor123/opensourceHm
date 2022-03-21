import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 5px;
  gap: 1%;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const FormTitle = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 800;
`;

export const InputName = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 10px;
`;

export const InputDate = styled.input`
  height: 35px;
  padding: 8px 12px;
  background-color: #fbfbfd;
  border: 1px solid #d7e2eb;
  &:focus {
    outline: none;
  }
`;

export const InputToDo = styled(InputDate)`
  padding: 10px;
  letter-spacing: 1px;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 80%;
  margin: 30px auto;
  height: 40px;
  font-size: 1.4rem;
  font-weight: 600;
  background-color: #0078ff;
  color: white;
  border: 1px solid transparent;
  border-radius: 5px;
  &:hover {
    background-color: blue;
  }
`;
