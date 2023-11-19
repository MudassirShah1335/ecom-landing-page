import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import Logo from "../images/logo.png";
// import Button from "./Button";

const Slidemenue = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="md:hidden">
      <div className="p-4 ">
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="fixed  top-7 right-4 text-4xl text-black z-30 md:hidden cursor-pointer"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="fixed top-7 right-4 text-4xl text-white md:hidden  cursor-pointer"
          />
        )}
      </div>
      <div>
        <div
          className={` transition-all ease-in duration-300 fixed  items-center h-screen z-0 w-full bg-white text-black flex flex-col gap-4 p-4 text-2x top-0
      ${toggle ? "right-[0]" : "right-[-100%]"}
      `}
        >
          <ul className="mt-[10rem]">
            <li className="border-b-[1px] border-[#171749] w-36 py-3 text-center">
              <a href="#" className="text-center">
                Home
              </a>
            </li>
            <li className="border-b-[1px] border-[#171749] w-36 py-3 text-center">
              <a href="#features" className="text-center">
                Features
              </a>
            </li>
            <li className="border-b-[1px] border-[#171749] w-36 py-3 text-center">
              <a href="#" className="text-center">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slidemenue;
