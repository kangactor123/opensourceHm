import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { paging } from "../../store";

export const Wrapper = styled.header`
  max-width: 660px;
  height: 10vh;
  background-color: beige;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px 0 40px;
  border-radius: 5px;
`;

const Logo = styled.h1`
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: "Times New Roman", Times, serif;
`;

const ConfigWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const AlertImg = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all ease 1s;
  &:hover {
    transform: scale(1.2);
  }
`;

const PageSelecter = styled.select`
  width: 50px;
  height: 25px;
  margin-right: 20px;
  border-radius: 5px;
  background-color: inherit;
`;

function Header() {
  const setPage = useSetRecoilState(paging);
  const navigate = useNavigate();
  const selectPaging = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPage((prev) => {
      return {
        pageValue: +event.currentTarget.value,
        nowPage: prev.nowPage,
      };
    });
  };
  const goHome = () => {
    navigate("/opensourceHm");
  };
  return (
    <Wrapper>
      <Logo>나는 이것들을 해야한다.</Logo>
      <ConfigWrap>
        <AlertImg
          src={`${process.env.PUBLIC_URL}/resource/img/home.png`}
          alt="alert"
          onClick={goHome}
        />
        <PageSelecter onChange={selectPaging}>
          <option value={5}>5개</option>
          <option value={10}>10개</option>
          <option value={15}>15개</option>
          <option value={20}>20개</option>
        </PageSelecter>
      </ConfigWrap>
    </Wrapper>
  );
}

export default Header;
