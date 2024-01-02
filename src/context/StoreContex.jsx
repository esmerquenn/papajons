import { createContext, useState } from "react";

const Store = createContext();

function StoreContex({ children }) {
  const [sebet, setSebet] = useState([]);

  const addSebet = (props) => {
    const eyni = sebet.find(
      (item) => item.id === props.id && item.objItem === props.objItem
    );
    eyni
      ? setSebet((prev) =>
          prev.map((sbt) =>
            sbt.id === props.id && sbt.objItem === props.objItem
              ? { ...sbt, count: sbt.count + props.count }
              : sbt
          )
        )
      : setSebet([...sebet, props]);
    // burada fetch post olunmalidir
  };

  const obj = { addSebet, sebet, setSebet };
  return <Store.Provider value={obj}>{children}</Store.Provider>;
}

export default StoreContex;
export { Store };
