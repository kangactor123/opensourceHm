import { useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Header from "../components/common/Header";
import ToDoList from "../components/list/ToDoList";
import Menu from "../components/menu/Menu";
import useIsMenuOpen from "../hooks/useMenuOpen";
import { IToDo } from "../interface";
import { toDos } from "../store";
import { Container } from "./style/common.style";

export default function Divide() {
  const [searchParam] = useSearchParams();
  const localToDos = useRecoilValue<IToDo[]>(toDos);
  const keyword = searchParam.get("kind") as string;
  const [isMenuOpen, setMenuOpen] = useIsMenuOpen();
  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Container>
      <Header handleMenuClick={handleMenuClick} />
      {isMenuOpen && <Menu />}
      <ToDoList propList={localToDos} kind={keyword} />
    </Container>
  );
}
