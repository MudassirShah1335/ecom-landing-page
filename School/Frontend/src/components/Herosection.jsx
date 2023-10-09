import React from "react";
import Button from "./Button";

const Herosection = () => {
  return (
    <section className="bg-[#5a5afb] text-[#fff] z-0 mb-11 px-32 py-12  ">
      <div className="w-full md:w-1/2">
        <h1 className=" text-3xl md:text-5xl font-bold">Empowering futures,</h1>
        <h1 className="text-3xl md:text-5xl font-bold py-4">
          one skill at a time!
        </h1>
        <p className="text-xl md:text-3xl">
          The Global Skill Seeker Award is designed to provide children with a
          holistic and immersive extra-curricular educational experience that is
          modern, digital and beyond conventional learning.
        </p>
        <br />
        <Button name="Reginster Now" />
      </div>
      <div></div>
    </section>
  );
};

export default Herosection;
