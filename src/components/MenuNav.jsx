import { useContext, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ProductContext } from "../context/UseContext";
import Ingredents from "./Ingredents";
import Card from "./Card";
import ModalSizes from "./ModalSizes";
function MenuNav() {
  const { category } = useParams();
  const [data] = useContext(ProductContext);
  const [params, setParams] = useSearchParams();
  const subCategory = params.get("cath");
  const [modalShow, setModalShow] = useState(false);
  const [menuid, setMenuId] = useState({});
  function handleId(id) {
    setModalShow(true);
    data.map((item) =>
      item.id == id
        ? setMenuId({
            id: item.id,
            img: item.img,
            name: item.name,
            price: item.price,
          })
        : ""
    );
  }
  return (
    <>
      <div>{category === "pizzalar" && <Ingredents />}</div>
      <div className="containere">
        {data
          .filter((item) => item.category.toLowerCase() === category)
          .filter((item) =>
            subCategory ? item.cath?.includes(subCategory) : true
          )
          .map((item) => (
            <Card key={item.id} item={item} handleId={handleId} />
          ))}
        <ModalSizes
          show={modalShow}
          menuid={menuid}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}

export default MenuNav;

// <div className="carde" key={i}>
//   <div className="img-dive">
//     <img src={item.img} alt="aaaa" />
//   </div>
//   <div className="p-dive">
//     <div className="head-p-dive">
//       <h2>{item.name}</h2>
//       <Button variant="primary" onClick={() => handleId(item.id)}>
//         modal
//       </Button>
//     </div>
//     <p>{item.composition}</p>
//   </div>
// </div>
