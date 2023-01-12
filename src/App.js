import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

// Paes
import Home from "./pages/Home";
import Fibonacci from "./pages/Fibonacci";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fibonacci" element={<Fibonacci />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
