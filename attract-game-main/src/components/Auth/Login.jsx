import React from "react";
import Logo from "../../assets/AuthImages/logo.png";
import { AiFillHome, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Cardimg from "../../assets/AuthImages/Default.png";
import Facebook from "../../assets/AuthImages/Rectangle 102.png";
import Footer from "../../layouts/Footer";
import { Link } from "react-router-dom";
function Login() {
  return (
    <main>
      {/* header setion / */}
      <header>
        <Link to={"/"}>
          <img src={Logo} alt="" width="180px" />
        </Link>
      </header>
      {/* main setion  */}
      <section className="flex gap-[10rem] items-center justify-between pl-[6%]">
        <div className=" mt-6">
          {/* main tital  */}
          <div className="">
            <h1 className="text-3xl font-semibold ml-12">Wellcome Back</h1>
            <p className="text-lg text-gray-400 py-3">
              We are happy to you have back{" "}
            </p>
          </div>
          {/* main inputs  */}
          <div className="flex flex-col w-full pb-3">
            <label className="text-base font-semibold text-gray-500 pb-2">
              E-mail Address*
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email address"
              className="border-gray-400 outline-none  rounded-md border-2  bg-gray-100  "
            />
          </div>
          <div className="flex flex-col w-full pb-3">
            <label className="text-base font-semibold text-gray-500 pb-2">
              Password*
            </label>
            <div className="outline-none border-gray-400 rounded-md border-2 bg-gray-100 flex items-center py-1 ">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your password"
                className=" w-full bg-transparent border-none   "
              />
              <AiOutlineEye className="text-xl text-gray-600 mx-4 " />
            </div>
          </div>
          {/* main check box button  */}
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center ">
              <input type="checkbox" />
              <p> I agree to trams and Condition</p>
            </div>
            <div>
              <Link
                to="/forgotpassowrd"
                className=" cursor-pointer text-red-600 "
              >
                Forget password?
              </Link>
            </div>
          </div>
          {/* main button / */}
          <div className="rounded-xl cursor-pointer border-2 text-2xl text-white justify-center my-4 flex items-center bg-[#000000b1] w-full py-2">
            <p>Registration Account</p>
          </div>
          <div className="flex items-center pb-2  gap-7">
            <div className="bg-black h-[2px] w-[15rem]"></div>
            <h1 className="text-xl">OR</h1>
            <div className="bg-black h-[2px] w-[15rem]"></div>
          </div>
          {/* main social buton  */}
          <div className="flex  items-center justify-center gap-12">
            <FcGoogle className="text-5xl" />

            <img src={Facebook} alt="" width="51px" />
            <BsApple className="text-5xl mb-1" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Cardimg} alt="" />

          <div className="flex gap-3 justify-center items-center bg-[#3D3D3D] text-white py-2 px-4 rounded-xl mt-12 w-32 ">
            <AiFillHome />
            <p>Home</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Login;
