import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { saveSearchKeyword } from "../../localStorage";
import { searchKeyword, searchList } from "../../store";
import Button from "../common/Button";
import { ButtonBox, InputBox } from "../InputSection";
import DataList from "./DataList";
import ListBox from "./ListBox";
import SearchIcon from "@mui/icons-material/Search";

const Wrapper = styled.div`
  height: 10vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 0 10px;
`;

// const SearchBox = styled(InputBox)`
//   position: relative;
//   width: 500px;
// `;
const SearchBox = styled.form`
  position: relative;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Icon = styled(SearchIcon)`
  position: absolute;
  right: 30px;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 35px;
  background-color: #ffffff;
  border: 0;
  padding-left: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  &:focus {
    outline: none;
  }
`;

interface IKeyword {
  keyword: string;
}

function SearchSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IKeyword>();
  const setSearchList = useSetRecoilState(searchList);
  const setSearchKeyword = useSetRecoilState(searchKeyword);

  const onValid = (data: IKeyword) => {
    setSearchList((prev) => {
      return [...prev, data.keyword];
    });
    setSearchKeyword(data.keyword);
    saveSearchKeyword(data.keyword);
  };
  return (
    <>
      <Wrapper>
        <SearchBox onSubmit={handleSubmit(onValid)}>
          <SearchBar
            placeholder="검색어를 입력하세요"
            list="searchList"
            {...register("keyword", {
              required: "검색어를 입력해주세요.",
              minLength: {
                value: 1,
                message: "한 글자 이상 입력해주세요.",
              },
            })}
          />
          <Icon />
        </SearchBox>
        <div>{errors?.keyword?.message}</div>
        <DataList />
      </Wrapper>
    </>
  );
}

export default SearchSection;
