export default ModalSizes;
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Store } from "../context/StoreContex";

function ModalSizes(props) {
  const { name, img, price, id } = props?.menuid;
  const [count, setCount] = useState(1);
  const [priceItem, setPriceItem] = useState(5.5);
  const { addSebet, sebet } = useContext(Store);
  const obj = {
    xs: "Mini Pizza 15sm",
    sm: "Kicik 23sm",
    md: "Orta 30sm",
    lg: "Boyuk 35sm",
  };
  const [objItem, setObjItem] = useState(obj.xs);

  useEffect(() => {
    typeof price !== "object"
      ? setPriceItem(price)
      : setPriceItem(Object.values(price)[0]);
  }, [props]);

  // function handleCount(num) {
  //   setCount((prevCount) =>
  //     prevCount === 1 && eded == -1
  //       ? 1
  //       : prevCount >= 1
  //       ? prevCount + eded
  //       : prevCount
  //   );
  // }
  function handleCount(num) {
    setCount((prevCount) => Math.max(prevCount + num, 1));
  }

  useEffect(() => {
    props.show == false && setCount(1);
  }, [props.show]);

  function selectedPrice(e) {
    setPriceItem(price[e.target.value]);
    setObjItem(obj[e.target.value]);
    console.log(e.target.value);
  }
  function sebeteAt() {
    addSebet({
      id,
      img,
      name,
      count,
      setCount,
      priceItem,
      objItem,
    });

    props.onHide();
  }
  return (
    <Modal {...props} size="sm" centered className="modalim">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <img src={img} alt="img" />
        <h3>{name}</h3>
        <div className="selectQiymet">
          <select
            onChange={selectedPrice}
            className={`${typeof price === "object" ? "block" : "none"}`}
          >
            {/* {price
              ? Object.entries(price).map((item, i) => (
                  <option key={i} value={item[1]}>
                    {obj[item[0]]}-{item[1]}
                  </option>
                ))
              : ""} */}
            {price &&
              Object.entries(price).map(([size, value], i) => (
                <option key={i} value={size}>
                  {obj[size]} - {value}
                </option>
              ))}
          </select>
          <div className="count">
            <div className="counter">
              <button onClick={() => handleCount(-1)} className="">
                -
              </button>
              <span>{count}</span>
              <button onClick={() => handleCount(1)}>+</button>
            </div>
            <p>{(count * priceItem).toFixed(2)}₼</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            sebeteAt();
          }}
        >
          Sebete Elave et
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
