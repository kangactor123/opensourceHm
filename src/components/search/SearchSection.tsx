import React, { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { saveSearchKeyword } from "../../localStorage";
import { searchKeyword, searchList } from "../../store";
import Button from "../common/Button";
import { ButtonBox, InputBox } from "../InputSection";
import ListBox from "./ListBox";

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

const BtnBox = styled(ButtonBox)`
  justify-content: center;
`;

/* 검색 input에 focus가 들어왔을 때 검색 목록이 내려올 수 있도록, blur -> 검색어 목록 사라져야함 */
/* 최근 검색어는 localStorage에서 불러서 저장해놔야함 store에 */
/* 검색어는 태그 형식으로 만들자 걍 ... */
function SearchSection() {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchList = useSetRecoilState(searchList);
  const setSearchKeyword = useSetRecoilState(searchKeyword);
  const [keyword, setKeyword] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value);
  };
  const clickSearch = () => {
    if (keyword === "") {
      alert("한 글자 이상 입력해주세요");
      searchRef.current?.focus();
      return;
    }
    setSearchList((prev) => {
      return [...prev, keyword];
    });
    setSearchKeyword(keyword);
    saveSearchKeyword(keyword);
    setKeyword("");
  };
  return (
    <>
      <ListBox />
      <Wrapper>
        <InputBox>
          <SearchBar
            ref={searchRef}
            value={keyword}
            onChange={onChange}
            placeholder="검색어를 입력하시오."
          />
        </InputBox>
        <BtnBox>
          <Button clickFcn={clickSearch} text="검색하기" hoverColor="gray" />
        </BtnBox>
      </Wrapper>
    </>
  );
}

export default SearchSection;
