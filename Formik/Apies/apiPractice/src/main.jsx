import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PizzaContextProvider from "./contextapi/Pizzacontextapi.jsx";
import Providerdata from "./contextapi/Providerdata.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PizzaContextProvider>
    <Providerdata>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Providerdata>
  </PizzaContextProvider>
);
