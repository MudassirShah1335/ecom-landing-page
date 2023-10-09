import React from "react";

const Button = (prop) => {
  return (
    <button className="py-4 px-14 text-[#fff] text-lg bg bg-[#B2D443] hover:bg-[#a5c245] rounded-3xl">
      {prop.name}
    </button>
  );
};

export default Button;
