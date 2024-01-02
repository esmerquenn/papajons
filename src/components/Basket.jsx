import { useContext } from "react";
import { Store } from "../context/StoreContex";
import Offcanvas from "react-bootstrap/Offcanvas";
import SebetMenu from "./SebetMenu";

function Basket({ show, setShow }) {
  const handleClose = () => setShow(false);
  const { addSebet, sebet, setSebet } = useContext(Store);
  function deleteItem(id) {
    setSebet((prev) => prev.filter((item) => item.id !== id));
  }
  function count(id, eded) {
    setSebet((prev) =>
      prev.map((ss) =>
        ss.id == id ? { ...ss, count: Math.max(ss.count + eded, 1) } : ss
      )
    );
  }
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Səbət</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {sebet &&
            sebet.map((item, i) => (
              <SebetMenu
                item={item}
                deleteItem={deleteItem}
                count={count}
                key={i}
              />
            ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Basket;
