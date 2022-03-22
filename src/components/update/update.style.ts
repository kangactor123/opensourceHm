import styled from "styled-components";
import { FormTitle } from "../input/input.style";
import { Btn } from "../common/Button";

export const Container = styled.div`
  position: absolute;
  max-width: 600px;
  height: 350px;
  background-color: #2e8bc0;
  left: 0;
  right: 0;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 65%;
  margin-bottom: 5px;
`;

export const Title = styled(FormTitle)`
  color: rgba(255, 255, 255, 0.8);
`;

export const UpdateDate = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #d7e2eb;
`;

export const UpdateContent = styled.input`
  width: 80%;
  padding: 10px;
  line-height: 40px;
  border: 1px solid #d7e2eb;
`;

export const Button = styled(Btn)`
  width: 80%;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  font-weight: 600;
  font-size: 1rem;
`;
