import React, { useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { IToDo } from "../../interface";
import { paging } from "../../store";
import { makeTotalPage } from "../../util/makeTotalPage";

const Wrapper = styled.div`
  width: 60%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Page = styled.li<{ isNow: boolean }>`
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 600;
  color: ${(props) => (props.isNow ? "blue" : "black")};
`;

interface PagingProps {
  propsList: IToDo[];
}

function PagingSection({ propsList }: PagingProps) {
  const [page, setPage] = useRecoilState(paging);
  const pageNumbers = useMemo(() => {
    return makeTotalPage(propsList.length, page.pageValue);
  }, [propsList, page]);
  const [nowPage, setNowPage] = useState(1);
  const clickPage = (page: number) => {
    setNowPage(page);
    setPage((prev) => {
      return {
        nowPage: page,
        pageValue: prev.pageValue,
      };
    });
  };

  return (
    <Wrapper>
      <PageList>
        {pageNumbers.map((number) => (
          <Page
            key={number}
            onClick={() => clickPage(number)}
            isNow={nowPage === number ? true : false}
          >
            {number}
          </Page>
        ))}
      </PageList>
    </Wrapper>
  );
}

export default React.memo(PagingSection);
