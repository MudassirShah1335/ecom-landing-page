import React, { createContext, useState } from "react";
const PizzaContext = createContext();
const PizzaContextProvider = ({ children }) => {
  const [first, setfirst] = useState([
    2, 3, 4, 5, 6,
    // { id: 1, name: "mud" },
    // { id: 2, name: "mun" },
    // { id: 3, name: "mus" },
  ]);
  return (
    <PizzaContext.Provider value={first}>{children}</PizzaContext.Provider>
  );
};

export default PizzaContextProvider;
export { PizzaContext };
