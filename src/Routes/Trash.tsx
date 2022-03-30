import Header from "../components/common/Header";
import ToDoList from "../components/list/ToDoList";
import Menu from "../components/menu/Menu";
import useIsMenuOpen from "../hooks/useMenuOpen";
import { getTrashToDos } from "../localStorage";
import { sortList } from "../util/sort";
import { Container } from "./style/common.style";

export default function Trash() {
  const [isMenuOpen, setMenuOpen] = useIsMenuOpen();
  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };
  const list = sortList(getTrashToDos()); //초기값 []
  return (
    <Container>
      <Header handleMenuClick={handleMenuClick} />
      {isMenuOpen && <Menu />}
      <ToDoList propList={list} />
    </Container>
  );
}
