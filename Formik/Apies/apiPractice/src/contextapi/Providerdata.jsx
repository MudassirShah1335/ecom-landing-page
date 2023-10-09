import React, { createContext } from "react";

export const Data = createContext();
const Providerdata = ({ children }) => {
  return (
    <div>
      <Data.Provider value="hello sir my first practice on contex api">
        {children}
      </Data.Provider>
    </div>
  );
};

export default Providerdata;
