import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Header from "../components/common/Header";
import Overlay from "../components/common/Overlay";
import InputSection from "../components/InputSection";
import PagingSection from "../components/PagingSection";
import SearchSection from "../components/search/SearchSection";
import ToDoList from "../components/toDo/ToDoList";
import { IToDo } from "../interface";
import { modalActive, searchKeyword, toDos } from "../store";
import { makeKeywordList } from "../util/makeKeywordList";

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
`;

function Home() {
  const modal = useRecoilValue(modalActive);
  const localToDos = useRecoilValue<IToDo[]>(toDos);
  const keyword = useRecoilValue(searchKeyword);
  const list =
    keyword.length === 0 ? localToDos : makeKeywordList(localToDos, keyword);
  return (
    <>
      <Container>
        <Header />
        <SearchSection />
        <InputSection />
        <ToDoList propList={list} />
        <PagingSection propsList={list} />
      </Container>
      <AnimatePresence>
        {modal.active === false ? null : <Overlay />}
      </AnimatePresence>
    </>
  );
}

export default Home;
