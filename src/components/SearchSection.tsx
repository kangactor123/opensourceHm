import styled from "styled-components";
import Button from "./Button";
import { ButtonBox, InputBox } from "./InputSection";

const Wrapper = styled.div`
  max-width: 660px;
  height: 10vh;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px 10px 0 10px;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 30px;
  background-color: inherit;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  padding-left: 10px;
`;

const SearchList = styled.ul`
  width: 95%;
  position: absolute;
  top: 48px;
  text-decoration: none;
  background-color: aqua;
  z-index: 99;
  display: none;
`;

const SearchLi = styled.li``;

const BtnBox = styled(ButtonBox)`
  justify-content: center;
`;

/* 검색 input에 focus가 들어왔을 때 검색 목록이 내려올 수 있도록, blur -> 검색어 목록 사라져야함 */
/* 최근 검색어는 localStorage에서 불러서 저장해놔야함 store에 */
function SearchSection() {
  return (
    <Wrapper>
      <InputBox>
        <SearchBar />
        <SearchList>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </SearchList>
      </InputBox>
      <BtnBox>
        <Button text="검색하기" hoverColor="gray" />
      </BtnBox>
    </Wrapper>
  );
}

export default SearchSection;
