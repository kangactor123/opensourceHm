import Header from "../components/common/Header";
import InputSection from "../components/input/InputSection";
import Menu from "../components/menu/Menu";
import { Container } from "./style/common.style";
import useIsMenuOpen from "../hooks/useMenuOpen";

function Home() {
  const [isMenuOpen, setMenuOpen] = useIsMenuOpen();
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
