import { useRecoilValue } from "recoil";
import Header from "../components/common/Header";
import Overlay from "../components/common/Overlay";
import Menu from "../components/menu/Menu";
import PagingSection from "../components/paging/PagingSection";
import SearchSection from "../components/search/SearchSection";
import { IToDo } from "../interface";
import { modalActive, searchKeyword, toDos } from "../store";
import { makeKeywordList } from "../util/makeKeywordList";
import { useCallback, useState } from "react";
import ToDoList from "../components/list/ToDoList";
import { Container } from "./style/common.style";

function Home() {
  const modal = useRecoilValue(modalActive);
  const localToDos = useRecoilValue<IToDo[]>(toDos);
  const keyword = useRecoilValue(searchKeyword);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);
  const list =
    keyword.length === 0 ? localToDos : makeKeywordList(localToDos, keyword);
  return (
    <>
      <Container>
        <Header handleMenuClick={handleMenuClick} />
        {isMenuOpen && <Menu />}
        <SearchSection />
        <ToDoList propList={list} />
        <PagingSection propsList={list} />
      </Container>
      {modal.active === false ? null : <Overlay />}
    </>
  );
}

export default Home;
