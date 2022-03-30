import React, { useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { IToDo } from "../../interface";
import { paging } from "../../store";
import { makeTotalPage } from "../../util/makeTotalPage";
import { Page, PageList, PagingWrapper } from "./paging.style";

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
    <PagingWrapper>
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
    </PagingWrapper>
  );
}

export default React.memo(PagingSection);
