import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { choice, paging, searchKeyword, toDos } from "../../store";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { deleteArrayFromToDos } from "../../localStorage";
import {
  Wrapper,
  Logo,
  RightSection,
  LeftSection,
  PageSelecter,
  Menu,
} from "./header.style";

interface HeaderProps {
  handleMenuClick: () => void;
}

function Header(props: HeaderProps) {
  const navigator = useNavigate();
  const setLocalToDos = useSetRecoilState(toDos);
  const [keyword, setSearchKeyword] = useRecoilState(searchKeyword);
  const [choiceArray, setChoiceArray] = useRecoilState(choice);
  const [page, setPage] = useRecoilState(paging);

  /* ToDo 노출 셀렉터 변경 함수 */
  const selectPaging = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPage((prev) => {
      return {
        pageValue: +event.currentTarget.value,
        nowPage: prev.nowPage,
      };
    });
  };

  /* Header Home Icon handler function */
  const goHome = () => {
    if (keyword === "") {
      navigator("/opensourceHm");
    } else {
      setSearchKeyword("");
    }
  };

  /* Header Multi Delete handler function */
  const handleMulDelete = () => {
    const newList = deleteArrayFromToDos(choiceArray);
    setLocalToDos(newList);
    setChoiceArray([]);
    if (page.nowPage !== 1) {
      newList.length % page.pageValue === 0 &&
        setPage((prev) => {
          return { nowPage: prev.nowPage - 1, pageValue: prev.pageValue };
        });
    }
  };

  const handleSearchDelete = () => {
    localStorage.removeItem("SEARCH");
    alert("최근 검색어 목록을 삭제하였습니다.");
  };

  return (
    <Wrapper>
      <LeftSection>
        <Menu fontSize="large" onClick={props.handleMenuClick} />
        <Logo>Memo</Logo>
      </LeftSection>
      <RightSection>
        <HomeIcon fontSize="large" onClick={goHome} />
        <DeleteForeverIcon fontSize="large" onClick={handleMulDelete} />
        <DeleteSweepIcon fontSize="large" onClick={handleSearchDelete} />
        <PageSelecter onChange={selectPaging}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </PageSelecter>
      </RightSection>
    </Wrapper>
  );
}

export default React.memo(Header);
