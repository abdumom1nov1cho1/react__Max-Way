import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact"
import Filials from "./Components/Pages/Filials"
import Korzinka from "./Components/Pages/Korzinka/Korzinka"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/About" element={<About />} />;
        <Route path="/Contact" element={<Contact />} />;
        <Route path="/Filials" element={<Filials />} />;
        <Route path="/Korzinka" element={<Korzinka />} />;
      </Routes>
    </>
  );
}

export default App;
