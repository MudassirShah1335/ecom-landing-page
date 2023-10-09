import React from "react";
import newpassword from "../../assets/AuthImages/newpassword.png";
import Logo from "../../assets/AuthImages/logo.png";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

function NewPassword() {
  return (
    <main>
      {/* header setion / */}
      <header>
        <Link to={"/"}>
          <img src={Logo} alt="" width="422px" />
        </Link>
      </header>
      {/* main setion  */}
      <section className="flex gap-[10rem] items-center justify-between pl-[6%]">
        <div className="mt-12">
          {/* main tital  */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-center font-semibold">
              Set New Password
            </h1>
            <p className="text-lg text-center text-gray-400 py-4">
              We suggest you to set your new <br /> password as it is better for
              your security
            </p>
          </div>
          {/* main inputs  */}
          <div className="flex flex-col w-full pb-7">
            <label className="text-xl text-gray-500 pb-3">
              Create Password*
            </label>
            <div className="border-gray-400 rounded-md border-2 text-2xl bg-gray-100 flex items-center py-1 ">
              <input
                type="text"
                name=""
                id=""
                placeholder="Pick a strong password"
                className=" w-full bg-transparent border-none "
              />
              <AiOutlineEye className="text-4xl text-gray-600 mx-4 " />
            </div>
          </div>
          <div className="flex flex-col w-full pb-7">
            <label className="text-xl text-gray-500 pb-3">
              Confirm Password*
            </label>
            <div className="border-gray-400 rounded-md border-2 text-2xl bg-gray-100 flex items-center py-1 ">
              <input
                type="text"
                name=""
                id=""
                placeholder="Confirm password"
                className=" w-full bg-transparent border-none "
              />
              <AiOutlineEye className="text-4xl text-gray-600 mx-4 " />
            </div>
          </div>
          {/* main button / */}
          <div className="flex justify-center items-center">
            <div className="rounded-xl cursor-pointer border-2 text-2xl text-white justify-center my-3 flex items-center bg-[#000000b1] w-[50%] py-2">
              <p>Set Password</p>
            </div>
          </div>
          <div className="flex items-center pb-10  gap-7">
            <div className="bg-black h-[2px] w-[15rem]"></div>
            <h1 className="text-xl">OR</h1>
            <div className="bg-black h-[2px] w-[15rem]"></div>
          </div>

          <Link to={"/"} className="flex justify-center items-center text-2xl">
            <p>Go to home without set password</p>
          </Link>
        </div>
        <div className="mr-20">
          {/* main img */}
          <div>
            <img src={newpassword} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default NewPassword;
