// import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import More from "./components/More";
import Menu from "./components/Menu";
import Sous from "./components/Sous";
// import Pizza from "./components/Pizza";
// import Papadias from "./components/Papadias";
// import Rolls from "./components/Rolls";
// import Salat from "./components/Salat";
// import Pasta from "./components/Pasta";
// import Desert from "./components/Desert";
import Icki from "./components/Icki";
import Navbar from "./components/Navbar";
import Contact from "./Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Contact />
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/more/:id" element={<More />} />
          <Route path="/sous" element={<Icki />} />
          <Route path="/pizza" element={<Icki />} />
          <Route path="/papadias" element={<Icki />} />
          <Route path="/rolls" element={<Icki />} />
          <Route path="/salat" element={<Icki />} />
          <Route path="/pasta" element={<Icki />} />
          <Route path="/desert" element={<Icki />} />
          <Route path="/icki" element={<Icki />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
