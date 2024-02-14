import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductProvider } from "./context/UseContext.jsx";
import StoreContex from "./context/StoreContex.jsx";
import Basket from "./components/Basket.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <StoreContex>
      <App />
      <Basket />
    </StoreContex>
  </ProductProvider>
);