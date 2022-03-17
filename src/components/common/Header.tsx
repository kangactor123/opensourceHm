import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { paging, searchKeyword } from "../../store";
import MenuIcon from "@mui/icons-material/Menu";
import RefreshIcon from "@mui/icons-material/Refresh";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Wrapper = styled.header`
  height: 80px;
  background-color: #145da0;
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

// const AlertImg = styled.img`
//   width: 40px;
//   height: 40px;
//   cursor: pointer;
//   transition: all ease 1s;
//   &:hover {
//     transform: scale(1.2);
//   }
// `;

const LeftSection = styled.div`
  display: flex;
  width: 300px;
  flex-direction: row;
  align-items: center;
  gap: 10%;
`;

const PageSelecter = styled.select`
  width: 50px;
  height: 25px;
  border-radius: 5px;
  background-color: inherit;
`;

function Header() {
  const setPage = useSetRecoilState(paging);
  const setKeyword = useSetRecoilState(searchKeyword);
  const selectPaging = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPage((prev) => {
      return {
        pageValue: +event.currentTarget.value,
        nowPage: prev.nowPage,
      };
    });
  };
  const goHome = () => {
    setKeyword("");
  };
  return (
    <Wrapper>
      <LeftSection>
        <MenuIcon fontSize="large" />
        <Logo>Thoogle Memo</Logo>
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
