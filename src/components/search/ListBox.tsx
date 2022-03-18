import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { searchKeyword, searchList } from "../../store";

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

const Box = styled.div`
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

function ListBox() {
  const list = useRecoilValue(searchList);
  const setKeyword = useSetRecoilState(searchKeyword);
  const keywordClick = (item: string) => {
    setKeyword(item);
  };
  return (
    <ListWrap>
      <RecentTitle>최근 검색어 리스트</RecentTitle>
      <Box>
        {list.length === 0
          ? "최근에 검색하신 항목이 없습니다."
          : list.map((item, index) => (
              <SearchItem onClick={() => keywordClick(item)} key={index}>
                #{item}
              </SearchItem>
            ))}
      </Box>
    </ListWrap>
  );
}
export default ListBox;
