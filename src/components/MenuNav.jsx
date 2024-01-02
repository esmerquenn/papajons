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
      <div className="containere">
        <div>{category === "pizzalar" && <Ingredents />}</div>
        <div className="all">
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
      </div>
    </>
  );
}

export default MenuNav;
