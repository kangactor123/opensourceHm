import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Add from "./Routes/Add";
import Trash from "./Routes/Trash";
import Divide from "./Routes/Divide";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/divide" element={<Divide />} />
        <Route path="/opensourceHm" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
