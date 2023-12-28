import { createContext, useState } from "react";

const Store = createContext();

function StoreContex({ children }) {
  const [sebet, setSebet] = useState([]);

  const addSebet = (props) => {
    setSebet([...sebet, props]);
    // burada fetch post olunmalidir
  };

  const obj = { addSebet, sebet, setSebet };
  return <Store.Provider value={obj}>{children}</Store.Provider>;
}

export default StoreContex;
export { Store };
