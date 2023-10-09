import { React, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.jpg";
const MenuBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="md:hidden bg-white w-[100%] py-4  mb-4 fixed top-0 left-0 z-40 ">
        <div className="flex  bg-white  max-w-full ">
          <div>
            <img src={Logo} alt="" className="px-3" width="70px" />
          </div>
          <div className=" max-w-full h-10 flex space-x-10 sm:space-x-32  justify-between">
            <input
              type="text"
              className="max-w-md text-black rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
              defaultValue="Search for games"
            />

            <div className="flex justify-center items-center gap-2">
              <div className="flex md:hidden cursor-pointer items-center  rounded-md py-2  hover:bg-gray-100 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fillRule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {/* <span className="text-sm font-medium">Orders</span> */}
              </div>
              <div className="flex cursor-pointer items-center rounded-md py-2  hover:bg-gray-100 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                {/* <span className="text-sm font-medium">Favorites</span> */}
              </div>
              <div className="flex cursor-pointer items-center rounded-md py-2  hover:bg-gray-100 hover:text-black">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                    3
                  </span>
                </div>
                {/* <span className="text-sm font-medium">Cart</span> */}
              </div>
            </div>
          </div>

          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="fixed top-4 right-4 text-4xl text-black md:hidden cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="fixed top-4 right-4 text-4xl text-black md:hidden  cursor-pointer"
            />
          )}
        </div>
        <div
          className={`z-[99999999] transition-all ease-in duration-300 fixed   h-screen  w-full bg-black text-white   gap-4 p-4 text-2x top-10 
             ${toggle ? "top-[4rem]" : "top-[-100%]"}

      `}
        >
          {/* /////////////////////////////// header second setion ////////////////////// */}
          <div className={` flex flex-col md:hidden mt-4  `}>
            <div className=" flex gap-2 flex-col gap-x-8">
              <div></div>
              <span className=" text-white cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">
                PC
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">
                PS4
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">
                PS5
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">
                Computers
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">
                XBox
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">
                TOP,UPS
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">
                New Arrivals
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">
                Coming Soon
              </span>
            </div>
            <div className="ml-2 mt-12 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100 hover:text-black">
              <span className="text-sm font-medium">Sign in</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
