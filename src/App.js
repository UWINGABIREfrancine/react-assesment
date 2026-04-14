import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Exam from "./Exam";
import Module from "./Module";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/home">Home</Link> |
          <Link to="/about">About Us</Link>|
          <Link to="/exam">Exam</Link>|
          <Link to = "/module">Module</Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/" element={<Home />} />
          <Route path="/module" element={<Module />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;