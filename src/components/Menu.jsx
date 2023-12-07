import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Menu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios
      .get("https://papaapi.yetim.me/food ")
      .then((res) => setMenu(res.data));
  }, []);
  console.log(menu, "menu");
  return (
    <div className="container">
      {menu.map((item, i) => (
        <div className="all" key={i}>
          <div className="img-div">
            <img src={item.img} alt="aaaa" />
          </div>
          <div className="p-div">
            <h5>{item.category}</h5>
            <h2>{item.name}</h2>
            <p>{item.composition}</p>
            <h4>{item.price} AZN</h4>
            <Link to={`/more/${item.id}`}>
              <button>More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
