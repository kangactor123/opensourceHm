import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export const Wrapper = styled.header`
  height: 70px;
  background-color: #42c2ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px 0 20px;
`;

export const Logo = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #ffffff;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 15px;
`;

export const LeftSection = styled.div`
  display: flex;
  width: 300px;
  flex-direction: row;
  align-items: center;
  gap: 5%;
`;

export const PageSelecter = styled.select`
  width: 50px;
  height: 25px;
  border-radius: 5px;
  background-color: inherit;
  &:focus {
    outline: none;
  }
`;

export const Menu = styled(MenuIcon)`
  cursor: pointer;
`;
