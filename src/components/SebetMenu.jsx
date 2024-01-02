import React from "react";
import { FaXmark } from "react-icons/fa6";

function SebetMenu({ item, deleteItem, count }) {
  return (
    <div>
      <div>
        <div className="basket-card">
          <div
            className="x-mark"
            onClick={() => {
              deleteItem(item.id);
            }}
          >
            <h3>{item.name}</h3>

            <FaXmark />
          </div>
          <div className="cardim">
            <div className="basket-div">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="basket-count count">
              <div className="counter">
                <p>{(item.count * item.priceItem).toFixed(2)} ₼</p>
                <button onClick={() => count(item.id, -1)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => count(item.id, 1)}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SebetMenu;
