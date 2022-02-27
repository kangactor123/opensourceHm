import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/opensourceHm" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
