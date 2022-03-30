import styled from "styled-components";

export const PagingWrapper = styled.div`
  width: 60%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Page = styled.li<{ isNow: boolean }>`
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 600;
  color: ${(props) => (props.isNow ? "blue" : "black")};
`;
