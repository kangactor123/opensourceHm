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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clickSearch();
  };
  return (
    <>
      <ListBox />
      <Wrapper>
        <InputBox onSubmit={handleSubmit}>
          <SearchBar
            ref={searchRef}
            value={keyword}
            onChange={onChange}
            placeholder="검색어를 입력하시오."
          />
        </InputBox>
        <BtnBox>
          <Button type="submit" text="검색하기" hoverColor="gray" />
        </BtnBox>
      </Wrapper>
    </>
  );
}

export default SearchSection;
