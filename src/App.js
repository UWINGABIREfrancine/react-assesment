import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
      <h1>Home</h1>

      <Link to="/home"> Home </Link>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;