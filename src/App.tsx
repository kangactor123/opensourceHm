import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Add from "./Routes/Add";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/opensourceHm" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
