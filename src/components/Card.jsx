import React from "react";
import Button from "react-bootstrap/Button";

function Card({ item, handleId }) {
  return (
    <div className="carde">
      <div className="img-dive">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="p-dive">
        <div className="head-p-dive">
          <h2>{item.name}</h2>
          <Button variant="primary" onClick={() => handleId(item.id)}>
            Bunu Sec
          </Button>
        </div>
        <p>{item.composition}</p>
      </div>
    </div>
  );
}

export default Card;
