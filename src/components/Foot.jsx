import React from "react";
import logo from "../assets/footer-images-az-AZ.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaTripadvisor } from "react-icons/fa";
import { Link } from "react-router-dom";

function Foot() {
  return (
    <div className="foot">
      <span>PJ 2023</span>
      <div className="foot-1">
        <ul>
          <li>
          <Link to={'/footoutlet'}>Haqqimizda</Link>
          </li>
          <li>sual-cavab</li>
          <li>karyera</li>
          <li>xemir</li>
          <li>Papa-talk qeydler ve sertler</li>
        </ul>
      </div>
      <img className="esi" src={logo} alt="" />
      <ul>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTripadvisor />
        </li>
      </ul>
    </div>
  );
}

export default Foot;
