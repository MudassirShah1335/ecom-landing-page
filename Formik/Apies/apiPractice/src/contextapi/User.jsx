import { useContext } from "react";
// import React, { useContext } from "react";
import { PizzaContext } from "./contextapi/Pizzacontextapi";
const User = () => {
  const pizz = useContext(PizzaContext);
  console.log(pizz);
  return (
    <div>
      <h1>hello</h1>
      <p>{pizz}</p>
    </div>
  );
};

export default User;
