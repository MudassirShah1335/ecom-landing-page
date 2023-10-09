import React, { useContext } from "react";
// import { DataProvider } from "../Contex/Context";
import { DataProvider } from "./contex.jsx/context";
const App = () => {
  const Myname = useContext(DataProvider);
  return (
    <>
      <h1>hello</h1>
      <p>{Myname}</p>
      {/* <Myname /> */}
    </>
  );
};

export default App;
