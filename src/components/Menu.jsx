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
import s1 from "../assets/1.png";
import s2 from "../assets/2.png";
import s3 from "../assets/3.png";
import s4 from "../assets/4.png";
import s5 from "../assets/5.png";
import s6 from "../assets/6.png";
import s7 from "../assets/7.png";
import s11 from "../assets/11.png";
import s12 from "../assets/12.png";
import s13 from "../assets/13.png";
import s14 from "../assets/14.png";
import s15 from "../assets/15.png";
import s16 from "../assets/16.png";
import s17 from "../assets/17.png";
function Menu({ flag }) {
  console.log(flag);
  const [index, setIndex] = useState(0);
  const handleSelect = (ind) => {
    setIndex(ind);
  };
  const arr = [s1, s2, s3, s4, s5, s6, s7];
  const arr2 = [s11, s12, s13, s14, s15, s16, s17];

  return (
    <div className=" menuSlider">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {(flag ? arr2 : arr).map((item, i) => (
          <Carousel.Item key={i}>
            <img src={item} alt={item} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Menu;
