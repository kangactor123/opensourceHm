import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { getFromLocalStroage } from "../api/\btoDoApi";
import { paging, toDos } from "../store";

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

const Page = styled.li`
  cursor: pointer;
  font-size: 1.2em;
  &:hover {
    color: red;
  }
`;

function PagingSection() {
  const [page, setPage] = useRecoilState(paging);
  const toDoList = useRecoilValue(toDos);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(toDoList.length / page.pageValue); i++) {
    pageNumbers.push(i);
  }
  const clickPage = (page: number) => {
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
          <Page key={number} onClick={() => clickPage(number)}>
            {number}
          </Page>
        ))}
      </PageList>
    </Wrapper>
  );
}

export default PagingSection;
