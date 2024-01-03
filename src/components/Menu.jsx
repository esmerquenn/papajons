// import { useContext, useState } from "react";
// import { ProductContext } from "../context/UseContext";
// import ModalSizes from "./ModalSizes";
// import Card from "./Card";
// function Menu() {
//   const [menu] = useContext(ProductContext);
//   const [modalShow, setModalShow] = useState(false);
//   const [menuid, setMenuId] = useState({});
//   function handleId(id) {
//     setModalShow(true);
//     menu.map((item) =>
//       item.id == id
//         ? setMenuId({
//             id: item.id,
//             img: item.img,
//             name: item.name,
//             price: item.price,
//           })
//         : ""
//     );
//   }
//   return (
//     <div className="containere">
//       <div className="all">
//         {menu.map((item) => (
//           <Card key={item.id} item={item} handleId={handleId} />
//         ))}
//         <ModalSizes
//           menuid={menuid}
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//         />
//       </div>
//     </div>
//   );
// }

// export default Menu;
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
function Menu({ flag }) {
  console.log(flag);
  const [index, setIndex] = useState(0);
  const handleSelect = (ind) => {
    setIndex(ind);
  };
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const path = "./src/assets/";

  return (
    <div className=" menuSlider">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {arr.map((item, i) => (
          <Carousel.Item key={i}>
            <img src={`${path + (flag ? item + 10 : item)}.png`} alt={item} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Menu;
