import React from "react";
import Cardimg from "../../assets/AuthImages/Default.png";
import Logo from "../../assets/AuthImages/logo.png";
import Footer from "../../layouts/Footer";
import { AiFillHome } from "react-icons/ai";

function EmailResend() {
  return (
    <main>
      {/* header setion  */}
      <header>
        <img src={Logo} alt="" width="180px" />
      </header>
      {/* main setion  */}
      <section className="flex py-[1rem] items-center justify-between px-[6%]">
        <div className=" flex flex-col justify-center items-center mt-6 w-[30rem]">
          {/* main title  */}
          <div className="">
            <h1 className="text-3xl  font-semibold ml-12">Verify your email</h1>
            <p className="text-lg w-[20rem] text-center text-gray-400 py-4">
              Please check your email and follow the instruction to verify your
              account. If you did not receive or if it expired, you can resend
              it.
            </p>
          </div>
          {/* main button  */}
          <div className="rounded-xl cursor-pointer border-2 text-2xl text-white justify-center my-12 flex items-center bg-[#000000b1] w-[50%] py-2">
            <p>Resend</p>
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

export default EmailResend;
