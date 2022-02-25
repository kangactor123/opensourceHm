import styled from "styled-components";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import PagingSection from "./components/PagingSection";
import SearchSection from "./components/SearchSection";
import ToDoList from "./components/ToDo/ToDoList";

const Container = styled.div`
  max-width: 660px;
  height: auto;
  margin: 0 auto;
  background-color: #f2eeee;
`;

function App() {
  return (
    <Container>
      <Header />
      <SearchSection />
      <InputSection />
      <ToDoList />
      <PagingSection />
    </Container>
  );
}

export default App;
