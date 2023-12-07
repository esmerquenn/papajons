import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function More() {
  const { id } = useParams();
  const [foods, setFoods] = useState({});

  useEffect(() => {
    axios
      .get(`https://papaapi.yetim.me/food/${id}`)
      .then((res) => setFoods(res.data));
  }, []);

  console.log(foods);
  //   const { category, composition, id, img, price } = foods;
  return (
    <div>
      <div className="" key={foods.id}>
        <div className="img-div">
          <img src={foods.img} alt="aaaa" />
        </div>
        <div className="p-div">
          <h5>{foods.category}</h5>
          <h2>{foods.name}</h2>
          <p>{foods.composition}</p>
          <h4>{foods.price} AZN</h4>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default More;
