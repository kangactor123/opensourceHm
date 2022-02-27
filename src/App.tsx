import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Header from "./components/common/Header";
import { Overlay } from "./components/common/Overlay";
import UpdateBoard from "./components/common/UpdateBoard";
import InputSection from "./components/InputSection";
import PagingSection from "./components/PagingSection";
import SearchSection from "./components/SearchSection";
import ToDoList from "./components/toDo/ToDoList";
import { modalActive } from "./store";
import { makeNoticeBoard } from "./util";

const Container = styled.div`
  max-width: 660px;
  height: auto;
  margin: 0 auto;
  background-color: #f2eeee;
`;

/* todo 수정은 modal에서 하자 */
function App() {
  const [modal, setModal] = useRecoilState(modalActive);
  useEffect(() => {
    makeNoticeBoard();
  }, []);
  return (
    <>
      <Container>
        <Header />
        <SearchSection />
        <InputSection />
        <ToDoList />
        <PagingSection />
      </Container>
      <AnimatePresence>
        {modal.active == false ? null : (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <UpdateBoard />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
