import styled from "styled-components";

export const CardWrapper = styled.div<{ dead: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 10px;
  gap: 10px;
  border: ${(props) => (props.dead ? "2px" : "1px")} solid
    ${(props) => (props.dead ? "red" : "black")};
  margin: 10px;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DeadLine = styled.span`
  font-size: 1em;
`;
export const Content = styled.p`
  font-size: 1.3em;
`;

export const BtnBox = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
