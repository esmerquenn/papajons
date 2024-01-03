import { useEffect, useState } from "react";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import { GrCafeteria } from "react-icons/gr";
import Basket from "./components/Basket";
import flag_az from "./assets/flag_az.png";
function Contact({ flag }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [cont, setCont] = useState(false);

  const arr = [
    {
      frst: <GrCafeteria />,
      second: " Restoranlar PapaBonus",
    },
    {
      frst: (
        <span className="user">
          <img src={flag_az} alt="" />
          <p>AZ</p>
        </span>
      ),
      second: "Azerbaycan",
    },
    {
      frst: (
        <span className="user">
          <FaUser />
          <p> giris</p>
        </span>
      ),
      second: "Giriş /Qeydiyyat",
    },
  ];
  return (
    <div className=" same">
      <ul className=" contact restoran">
        {arr.map(({ frst, second }) => (
          <li>{flag ? frst : second}</li>
        ))}
        <li>
          <div className="sebetAll">
            <FaShoppingBasket onClick={handleShow} />
          </div>
        </li>
        <Basket show={show} setShow={setShow} />
      </ul>
    </div>
  );
}

export default Contact;
