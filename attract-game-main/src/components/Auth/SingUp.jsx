import React from "react";
import Logo from "../../assets/AuthImages/logo.png";
import { AiFillHome, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
// import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import Cardimg from "../../assets/AuthImages/Default.png";
import Facebook from "../../assets/AuthImages/Rectangle 102.png";
import Footer from "../../layouts/Footer";
import { Link } from "react-router-dom";
function SingUp() {
  return (
    <main>
      {/* header setion */}
      <header>
        <Link to={"/"}>
          <img src={Logo} alt="" width="180px" />
        </Link>
      </header>
      {/* header end */}
      {/* main setion  */}
      <section className="flex gap-[10rem] items-center justify-between pl-[6%]">
        <div className=" mt-3">
          {/* main tital  */}
          <div className="">
            <h1 className="text-2xl font-semibold ml-12">Create An Account</h1>
            <p className=" text-gray-400 py-2">
              kindly fill your details to Create an accoutn{" "}
            </p>
          </div>
          {/* main all inputs  */}
          <div className="flex flex-col w-full pb-3">
            <label className="text-base font-semibold text-gray-500 pb-2">
              Your full name*
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your name"
              className="border-gray-400 outline-none  rounded-md border-2  bg-gray-100  "
            />
          </div>
          <div className="flex flex-col w-full pb-3">
            <label className="text-base font-semibold text-gray-500 pb-2">
              E-email address*
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email address"
              className="outline-none border-gray-400  rounded-md border-2  bg-gray-100  "
            />
          </div>
          <div className="flex flex-col w-full pb-3">
            <label className="text-base font-semibold text-gray-500 pb-2">
              Create password*
            </label>
            <div className="outline-none border-gray-400 rounded-md border-2 bg-gray-100 flex items-center py-1 ">
              <input
                type="text"
                name=""
                id=""
                placeholder="Pick a strong password"
                className=" w-full bg-transparent border-none   "
              />
              <AiOutlineEye className="text-2xl text-gray-600 mx-4 " />
            </div>
          </div>
          <div className="flex flex-col w-full pb-3">
            <label className="text-base font-semibold text-gray-500 pb-2">
              Conform password*
            </label>
            <div className="outline-none border-gray-400 rounded-md border-2 bg-gray-100 flex items-center py-1 ">
              <input
                type="text"
                name=""
                id=""
                placeholder="conform password"
                className=" w-full bg-transparent  border-none  "
              />
              <AiOutlineEye className="text-2xl text-gray-600 mx-4 " />
            </div>
          </div>
          {/* main check box button  */}
          <div className="flex gap-5 items-center ">
            <input type="checkbox" />
            <p> I agree to trams and Condition</p>
          </div>
          {/* main button  */}
          <div className="rounded-xl cursor-pointer border-2 text-2xl text-white justify-center my-4 flex items-center bg-[#000000b1] w-full py-2">
            <p>Registration Account</p>
          </div>
          {/* main or setion/  */}
          <div className="flex items-center pb-2  gap-7">
            <div className="bg-black h-[2px] w-[15rem]"></div>
            <h1 className="text-xl">OR</h1>
            <div className="bg-black h-[2px] w-[15rem]"></div>
          </div>
          {/* main social icons  */}
          <div className="flex  items-center justify-center gap-12">
            <FcGoogle className="text-5xl" />

            <img src={Facebook} alt="" width="51px" />
            <BsApple className="text-5xl mb-1" />
          </div>
        </div>
        {/* main img  */}
        <div className="flex flex-col justify-center items-center">
          <img src={Cardimg} alt="" />

          <div className="flex gap-3 justify-center items-center bg-[#3D3D3D] text-white py-2 px-4 rounded-xl mt-12 w-32 ">
            <AiFillHome />
            <p>Home</p>
          </div>
        </div>
        {/* footer seton  */}
      </section>
      <Footer />
    </main>
  );
}

export default SingUp;
