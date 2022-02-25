import styled from "styled-components";

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
`;

const PageSelecter = styled.select`
  width: 50px;
  height: 25px;
  margin-right: 20px;
  border-radius: 5px;
  background-color: inherit;
`;

function Header() {
  return (
    <Wrapper>
      <Logo>나는 오늘 이것들을 해야한다.</Logo>
      <ConfigWrap>
        <AlertImg
          src={`${process.env.PUBLIC_URL}/resource/img/alert.png`}
          alt="alert"
        />
        <PageSelecter>
          <option value={1}>5개</option>
          <option value={10}>10개</option>
          <option value={15}>15개</option>
          <option value={20}>20개</option>
        </PageSelecter>
      </ConfigWrap>
    </Wrapper>
  );
}

export default Header;
