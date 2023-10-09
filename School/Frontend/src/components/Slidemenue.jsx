import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../images/logo.png";
import Button from "./Button";

const Slidemenue = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#5a5afb] ">
      <div className="p-4 ">
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="fixed text-4xl text-white md:hidden cursor-pointer"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-4xl text-white md:hidden  cursor-pointer"
          />
        )}
      </div>
      <div>
        <ul
          className={` transition-all ease-in duration-300 fixed  items-center h-screen z-0 w-full bg-white flex flex-col gap-4 p-4 text-2x top-16
      ${toggle ? "left-[0]" : "left-[-100%]"}
      `}
        >
          <div className="flex items-center justify-center gap-4">
            <img src={Logo} alt="" width="70px" className="cursor-pointer" />
            <div className=" flex gap-2 font-semibold md:text-base lg:text-xl text-center text-[#092C60]">
              <p>Global</p>
              <p>Skill Seekers</p>
              <p>Awards</p>
            </div>
          </div>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">School Login</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <Button name="Register" />
        </ul>
      </div>
    </div>
  );
};

export default Slidemenue;
