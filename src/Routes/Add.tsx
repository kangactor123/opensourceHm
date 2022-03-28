import Header from "../components/common/Header";
import InputSection from "../components/input/InputSection";
import Menu from "../components/menu/Menu";
import { useState } from "react";
import { Container } from "./style/common.style";

function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <Container>
      <Header handleMenuClick={handleMenuClick} />
      {isMenuOpen && <Menu />}
      <InputSection />
    </Container>
  );
}

export default Home;