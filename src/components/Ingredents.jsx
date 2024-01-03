import { useContext } from "react";
import { ProductContext } from "../context/UseContext";
import { Link } from "react-router-dom";

function Ingredents() {
  const [data] = useContext(ProductContext);
  const ingredientData = Array.from(
    new Set(data?.flatMap((item) => item.cath))
  );
  return (
    <div className="ingredents same">
      <ul className="ingredents-ul">
        <li>
          <Link to={`/menu/pizzalar`}>Hamisi</Link>
        </li>
        {ingredientData.map((item, i) => (
          <li key={i}>
            <Link to={`/menu/pizzalar?cath=${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredents;
