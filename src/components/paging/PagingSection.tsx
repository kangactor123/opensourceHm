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

const Page = styled.li`
  cursor: pointer;
  font-size: 1.2em;
  &:hover {
    color: red;
  }
`;

interface PagingProps {
  propsList: IToDo[];
}

function PagingSection({ propsList }: PagingProps) {
  const [page, setPage] = useRecoilState(paging);
  const pageNumbers = makeTotalPage(propsList.length, page.pageValue);

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
