import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hello from "./HelloPage";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
