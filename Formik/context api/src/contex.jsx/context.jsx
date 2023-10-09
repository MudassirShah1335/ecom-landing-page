import React, { createContext } from "react";
const DataProvider = createContext();
const Context = ({ Children }) => {
  return (
    <div>
      <DataProvider.Provider value="good">{Children}</DataProvider.Provider>
    </div>
  );
};

export { Context, DataProvider };
