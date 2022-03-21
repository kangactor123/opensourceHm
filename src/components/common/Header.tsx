import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { paging } from "../../store";
import MenuIcon from "@mui/icons-material/Menu";
import RefreshIcon from "@mui/icons-material/Refresh";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export const Wrapper = styled.header`
  height: 70px;
  background-color: #42c2ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px 0 20px;
`;

const Logo = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #ffffff;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 15px;
`;

const LeftSection = styled.div`
  display: flex;
  width: 300px;
  flex-direction: row;
  align-items: center;
  gap: 5%;
`;

const PageSelecter = styled.select`
  width: 50px;
  height: 25px;
  border-radius: 5px;
  background-color: inherit;
`;

const Menu = styled(MenuIcon)`
  cursor: pointer;
`;
interface HeaderProps {
  handleMenuClick: () => void;
}

function Header(props: HeaderProps) {
  const setPage = useSetRecoilState(paging);
  const navigator = useNavigate();
  const selectPaging = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPage((prev) => {
      return {
        pageValue: +event.currentTarget.value,
        nowPage: prev.nowPage,
      };
    });
  };
  const goHome = () => {
    navigator("/opensourceHm");
  };
  return (
    <Wrapper>
      <LeftSection>
        <Menu fontSize="large" onClick={props.handleMenuClick} />
        <Logo>Google Memo</Logo>
      </LeftSection>
      <RightSection>
        <AccountCircleIcon fontSize="large" />
        <HomeIcon fontSize="large" onClick={goHome} />
        <RefreshIcon fontSize="large" />
        <PageSelecter onChange={selectPaging}>
          <option value={5}>5개</option>
          <option value={10}>10개</option>
          <option value={15}>15개</option>
          <option value={20}>20개</option>
        </PageSelecter>
      </RightSection>
    </Wrapper>
  );
}

export default Header;
