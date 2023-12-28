import { Link } from "react-router-dom";
import pjlogo from "./../assets/pjlogo.png";
import { useState } from "react";
function Navbar() {
  const [obj, setObj] = useState([
    "papadias",
    "pizzalar",
    "qelyanaltılar",
    "salatlar",
    "içkilər",
    "desserts",
    "souslar",
  ]);
  const [dogru, setDogru] = useState(false);
  function handleDogru() {
    setDogru((dogru) => !dogru);
  }
  return (
    <div className="navbare">
      <div className="navigation-wrappere">
        <div className="navigatione ">
          <Link to="/">
            <img className="logo" src={pjlogo} alt="" />
          </Link>
          <div
            className={` ${dogru ? "bars-dive exite" : "bars-dive"}`}
            onClick={handleDogru}
          >
            <span className="bare"></span>
            <span className="bare"></span>
            <span className="bare"></span>
          </div>
        </div>
      </div>
      <div className={` ${dogru ? "hamburgere hidee" : "hamburgere"}`}>
        <ul className="navbarMenue">
          {obj.map((item, i) => (
            <li className="listse" key={i}>
              <Link to={`/menu/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
