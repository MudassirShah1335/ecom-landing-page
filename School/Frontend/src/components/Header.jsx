import React from "react";
import Button from "./Button";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-[#5a5afb]  py-8  ">
      <div className="hidden md:flex header bg-white rounded-[36px]  justify-between items-center mx-20 py-4   ">
        <div className="flex items-center md:gap-4 lg:gap-6 xl:gap-12 pl-4">
          <img src={Logo} alt="" width="80px" />
          <div className=" font-semibold md:text-base lg:text-xl text-center text-[#092C60]">
            <p>Global</p>
            <p>Skill Seekers</p>
            <p>Awards</p>
          </div>
        </div>
        <div className=" flex items-center md:gap-4 xl:gap-12 md:pr-4 lg:pr-8 xl:pr-12 ">
          <ul className="flex md:gap-3  lg:gap-4 xl:gap-12 md:text-sm lg:text-base xl:text-lg">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#">School Login</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <Link to={"/login"}>
            <Button name="Register" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
