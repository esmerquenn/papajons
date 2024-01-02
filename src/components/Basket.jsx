import { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Store } from "../context/StoreContex";

function Basket({ show, setShow }) {
  const handleClose = () => setShow(false);
  const { addSebet, sebet, setSebet } = useContext(Store);
  // sebet[0].setCount(3);
  // console.log(sebet[0].count);
  console.log(sebet);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sebet</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="containere">
            {sebet &&
              sebet.map((item, i) => (
                <div className="carde" key={i}>
                  <div className="img-dive">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <h3>{item.name}</h3>
                  <div className="count">
                    <div className="counter">
                      <button
                        onClick={() => item.setCount((count) => count - 1)}
                        className=""
                      >
                        -
                      </button>
                      <span>{item.count}</span>
                      <button
                        onClick={() =>
                          setSebet((prev) =>
                            prev.map((ss) =>
                              ss.id == item.id
                                ? { ...ss, count: ss.count + 1 }
                                : ss
                            )
                          )
                        }
                      >
                        +
                      </button>
                    </div>

                    <p>{item.count * item.priceItem}₼</p>
                  </div>
                </div>
              ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Basket;
