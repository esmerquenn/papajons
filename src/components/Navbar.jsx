import { Link } from "react-router-dom";
import pjlogo from "./../assets/pjlogo.png";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={pjlogo} alt="" />
      </Link>
      <div className="hamburger">
        <div className="navbarMenu">
          <Link to="/pizza">Pizza</Link>
          <Link to="/papadias">Papadias</Link>
          <Link to="/rolls">Rolls</Link>
          <Link to="/salat">Salat</Link>
          <Link to="/pasta">Pasta</Link>
          <Link to="/desert">Desert</Link>
          <Link to="/icki">Icki</Link>
          <Link to="/sous">Sous</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
