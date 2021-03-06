import React from "react";
import styled from "styled-components";

interface ButtonProps {
  hoverColor?: string;
  bgColor?: string;
  text: string;
  clickFcn?: () => void;
  type?: string;
}

export const Btn = styled.button<{ hoverColor?: string; bgColor?: string }>`
  width: 100%;
  height: 30px;
  text-align: center;
  border: 0;
  border-radius: 15px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.bgColor === "red" ? "white" : "black")};
  letter-spacing: 1px;
  font-size: 0.6em;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${(props) => props.hoverColor};
  }
`;

const Button = ({
  hoverColor,
  text,
  bgColor = "lightgray",
  clickFcn,
  type = "button",
}: ButtonProps) => {
  return (
    <Btn
      type={type as any}
      hoverColor={hoverColor}
      bgColor={bgColor}
      onClick={clickFcn}
    >
      {text}
    </Btn>
  );
};

export default React.memo(Button);
