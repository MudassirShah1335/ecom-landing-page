import React from "react";
// import Card1 from "../images/card1";
import Card1 from "../images/card1.png";
const Card = (prop) => {
  return (
    <div
      className=" w-[350px] pb-24 shadow-xl rounded-3xl flex  px-5 pt-10 gap-4
    "
    >
      <div>
        <img src={Card1} alt="logo" className="w-[220px]" />
      </div>
      <div>
        <h1 className="font-semibold pb-2">{prop.Cname}</h1>
        <p>{prop.Cpara}</p>
      </div>
    </div>
  );
};

export default Card;
