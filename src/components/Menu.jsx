// import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductContext } from "../context/UseContext";
import ModalSizes from "./ModalSizes";
import Card from "./Card";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
function Menu() {
  const [menu] = useContext(ProductContext);
  const [modalShow, setModalShow] = useState(false);
  const [menuid, setMenuId] = useState({});
  function handleId(id) {
    setModalShow(true);
    menu.map((item) =>
      item.id == id
        ? setMenuId({
            id: item.id,
            img: item.img,
            name: item.name,
            price: item.price,
          })
        : ""
    );
  }
  return (
    <div className="containere">
      {menu.map((item) => (
        <Card key={item.id} item={item} handleId={handleId} />
      ))}
      <ModalSizes
        menuid={menuid}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Menu;
