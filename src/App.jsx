import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import More from "./components/More";
import Menu from "./components/Menu";
import MenuNav from "./components/MenuNav";
import Navbar from "./components/Navbar";
import Contact from "./Contact";
import Foot from "./components/Foot";

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <header>
            <Contact />
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Menu />} />
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
