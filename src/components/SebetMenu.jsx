import React from "react";
import { FaXmark } from "react-icons/fa6";

function SebetMenu({ item, deleteItem, handleCount }) {
  const { name, img, count, priceItem, id, objItem } = item;
  return (
    <div>
      <div>
        <div className="basket-card">
          <div
            className="x-mark"
            onClick={() => {
              deleteItem(id);
            }}
          >
            <span>
              <h3>{name}</h3>
              <p>{objItem}</p>
            </span>

            <FaXmark />
          </div>
          <div className="cardim">
            <div className="basket-div">
              <img src={img} alt={name} />
            </div>
            <div className="count">
              <div className="counter">
                <p>{(count * priceItem).toFixed(2)} ₼</p>
                <button onClick={() => handleCount(id, -1)}>-</button>
                <span>{count}</span>
                <button onClick={() => handleCount(id, 1)}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SebetMenu;
