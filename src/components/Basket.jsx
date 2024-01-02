import { useContext, useEffect, useState } from "react";
import { Store } from "../context/StoreContex";
import Offcanvas from "react-bootstrap/Offcanvas";
import SebetMenu from "./SebetMenu";

function Basket({ show, setShow }) {
  const handleClose = () => setShow(false);
  const { addSebet, sebet, setSebet } = useContext(Store);
  const [mebleg, setMebleg] = useState(0);
  function deleteItem(id) {
    setSebet((prev) => prev.filter((item) => item.id !== id));
  }
  function handleCount(id, eded) {
    setSebet((prev) =>
      prev.map((ss) =>
        ss.id == id ? { ...ss, count: Math.max(ss.count + eded, 1) } : ss
      )
    );
  }
  useEffect(() => {
    setMebleg(
      sebet.reduce((acc, item) => acc + item.count * item.priceItem, 0)
    );
  }, [sebet]);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Səbət</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {sebet &&
            sebet.map((item, i) => (
              <>
                <SebetMenu
                  item={item}
                  deleteItem={deleteItem}
                  handleCount={handleCount}
                  key={i}
                />
              </>
            ))}
          <div className="hesab">
            <span>Ümumi məbləğ: {mebleg}</span>
            <button>
              {sebet.length > 0 ? "Siparişi Ver" : "Menuya kecin"}
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Basket;
