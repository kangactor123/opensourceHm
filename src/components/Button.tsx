import styled from "styled-components";

interface ButtonProps {
  hoverColor?: string;
  bgColor?: string;
  text: string;
}

const Btn = styled.button<{ hoverColor?: string; bgColor?: string }>`
  width: 100%;
  height: 30px;
  text-align: center;
  border: 0;
  border-radius: 15px;
  background-color: ${(props) => props.bgColor};
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${(props) => props.hoverColor};
  }
`;

const Button = ({ hoverColor, text, bgColor = "lightgray" }: ButtonProps) => {
  return (
    <Btn hoverColor={hoverColor} bgColor={bgColor}>
      {text}
    </Btn>
  );
};

export default Button;
