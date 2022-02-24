import styled from "styled-components";
import Header from "./components/Header";
import InputSection from "./components/InputSection";

const Container = styled.div`
  max-width: 660px;
  height: 100vh;
  margin: 0 auto;
  background-color: #f2eeee;
`;

function App() {
  return (
    <Container>
      <Header />
      <InputSection />
    </Container>
  );
}

export default App;
