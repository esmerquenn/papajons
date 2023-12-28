import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Basket from "./components/Basket";

function Contact() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <div className="contact">
      <div className="restoran">
        <span>Restoranlar</span>
        <span>PapaBonus</span>
      </div>
      <div className="dil">
        <span>Azerbaycan</span>
        <span>Giriş /Qeydiyyat</span>
        <span className="btn-contact">
          <Button variant="secondary" onClick={handleShow}>
            <FaShoppingBasket />
          </Button>
        </span>
        <Basket show={show} setShow={setShow} />
      </div>
    </div>
  );
}

export default Contact;
