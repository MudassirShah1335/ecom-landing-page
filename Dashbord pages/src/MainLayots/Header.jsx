import React from "react";
import Logo from "../assets/images/header-logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { GiUsaFlag } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { LuUserCircle } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
// import Menubar from "../components/Menubar";

function Header() {
  return (
    //////////// header section ///////////////////////
    <section className="relative ">
      {/* //////////// header first setion /////////////////////// */}

      <div className="flex justify-between items-center px-[6%] h-[42px] bg-[#092042] text-white">
        <div className=" flex justify-center items-center gap-5 ">
          <div className=" flex justify-center items-center gap-2">
            <AiOutlineMail className="text-xl" />
            <p className="text-sm">info@lorem.mail</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <MdCall className="text-xl" />
            <p className="text-sm">000-000-0000</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2">
            <GiUsaFlag />
            <p className="text-sm">English</p>
            <IoIosArrowDown className="text-lg mt-[8px] cursor-pointer" />
          </div>
        </div>
      </div>
      {/* //////////// header sec setion /////////////////////// */}
      <div className=" w-full  bg-white relative px-[3%]">
        <div className=" py-3 px-6">
          <div className=" hidden md:flex justify-between">
            <div className="flex items-center ">
              <img
                src={Logo}
                alt="What a Market"
                className="h-[87px] w-[324px]"
              />
            </div>
            <div className="hidden md:flex items-center justify-center ml-6  flex-1 gap-x-3">
              <div className="w-[500px] h-[40px] bg-[#454549] rounded-full flex gap-2 px-3 items-center">
                <AiOutlineSearch className="mt-2 text-[#F5F5F5] " />
                <input
                  type="search"
                  placeholder="search"
                  className="bg-transparent text-[#F5F5F5] outline-none border-none w-full"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="hidden md:flex justify-between gap-x-8 items-center ml-2 ">
              <div className="flex justify-center items-center gap-x-3">
                <div className="flex cursor-pointer items-center rounded-md py-2  hover:bg-gray-100">
                  <LuUserCircle className="text-2xl" />
                </div>
                <div className="flex cursor-pointer items-center rounded-md py-2  hover:bg-gray-100">
                  <AiOutlineShoppingCart className="text-2xl" />
                </div>
                <div className="flex cursor-pointer items-center rounded-md py-2  hover:bg-gray-100">
                  <div className="relative">
                    <AiOutlineHeart className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 ">
                <span className="text-xl font-semibold cursor-pointer">
                  Login{" "}
                </span>
                <span>|</span>
                <span className="text-xl font-semibold cursor-pointer">
                  Register
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* //////////// header third setion /////////////////////// */}
        <div className="flex  items-center justify-between px-[%]">
          <div className="hidden md:flex  bg-[#2D2D2D] text-[#FFFFFF] w-fit mx-8 items-center">
            <div className=" mr-[-1rem]  lg:flex gap-x-7 py-[2px] px-9 ">
              <span className="cursor-pointer rounded-sm py-1 px-2 text-[16px] ">
                XBOX
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-[16px] ">
                PC
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-[16px] ">
                PS4
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-[16px] ">
                Upcoming Games
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-[16px] ">
                Best Sellers
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-[16px] ">
                New Releases
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-[16px] ">
                Coming Soon
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-[16px] ">
                Pre Orders
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 px-[2%]">
            <div className="border-2 border-gray-500 flex gap-2 justify-center items-center py-1 px-2">
              <FaDollarSign />
              USA
            </div>
            <div className="border-2 border-gray-500 flex gap-2 justify-center items-center py-1 px-2">
              <GiUsaFlag />
              USA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
