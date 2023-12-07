// import axios from "axios";
import { useContext } from "react";
import { ProductContext } from "../context/UseContext";

function Pizza() {
  const [data, setData] = useContext(ProductContext);
  return (
    <>
      <div className="container">
        {data
          .filter((item) => item.category == "Pizzalar")
          .map((item, i) => (
            <div className="all" key={i}>
              <div className="img-div">
                <img src={item.img} alt="aaaa" />
              </div>
              <div className="p-div">
                <h5>{item.category}</h5>
                <h2>{item.name}</h2>
                <p>{item.composition}</p>
                <h4>{item.price} AZN</h4>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Pizza;