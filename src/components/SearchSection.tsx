import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { saveSearchKeyword } from "../localStorage";
import { searchList } from "../store";
import Button from "./common/Button";
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

const BtnBox = styled(ButtonBox)`
  justify-content: center;
`;

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

const ListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const RecentTitle = styled.h1`
  font-size: 1.4em;
  font-family: "Times New Roman", Times, serif;
`;

const SearchItem = styled.span`
  cursor: pointer;
  font-size: 0.8em;
  &:hover {
    color: blue;
  }
`;

/* 검색 input에 focus가 들어왔을 때 검색 목록이 내려올 수 있도록, blur -> 검색어 목록 사라져야함 */
/* 최근 검색어는 localStorage에서 불러서 저장해놔야함 store에 */
/* 검색어는 태그 형식으로 만들자 걍 ... */
function SearchSection() {
  const [list, setSearchList] = useRecoilState(searchList);
  const [keyword, setKeyword] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value);
  };
  const clickSearch = () => {
    setSearchList((prev) => {
      return [...prev, keyword];
    });
    saveSearchKeyword(keyword);
    setKeyword("");
  };
  return (
    <>
      <ListWrap>
        <RecentTitle>최근 검색어 리스트</RecentTitle>
        <ListBox>
          {list.length == 0
            ? "최근에 검색하신 항목이 없습니다."
            : list.map((item, index) => (
                <SearchItem key={index}>#{item}</SearchItem>
              ))}
        </ListBox>
      </ListWrap>
      <Wrapper>
        <InputBox>
          <SearchBar
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
