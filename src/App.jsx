import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import More from "./components/More";
import Menu from "./components/Menu";
import MenuNav from "./components/MenuNav";
import Navbar from "./components/Navbar";
import Contact from "./Contact";
import Foot from "./components/Foot";
import { useEffect, useState } from "react";

function App() {
  const [w, setW] = useState(window.innerWidth);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    w >= 768 ? setFlag(false) : setFlag(true);
  }, [w]);
  return (
    <div className="App">
      {
        <BrowserRouter>
          <header>
            <Contact flag={flag} />
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Menu flag={flag} />} />
              <Route path="/more/:id" element={<More />} />
              <Route path="/menu/:category" element={<MenuNav />} />
            </Routes>
          </main>
          <footer>
            <Foot />
          </footer>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
