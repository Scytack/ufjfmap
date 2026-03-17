import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AreaMap from "./pages/AreaMap";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/area/:id" element={<AreaMap />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;