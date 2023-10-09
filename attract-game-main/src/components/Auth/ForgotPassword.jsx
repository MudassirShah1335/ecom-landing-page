import React from "react";
import Logo from "../../assets/AuthImages/logo.png";
import forgotpassword from "../../assets/AuthImages/forgotpassword.png";
import { GoHomeFill } from "react-icons/go";
import Footer from "../../layouts/Footer";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <main>
      {/* header setion  */}
      <header>
        <Link to="/">
          <img src={Logo} alt="" width="180px" />
        </Link>
      </header>
      {/* main setion  */}
      <section className="flex py-[1rem] items-center justify-between px-[6%]">
        <div className=" flex flex-col justify-center items-center mt-12 w-[30rem]">
          {/* main title  */}
          <div className="">
            <h1 className="text-3xl  font-semibold ml-12">Forgot Password?</h1>
            <p className="text-lg w-[22rem] text-center text-gray-400 py-4">
              Don’t worry ! It happens. Please enter the email address we will
              send the OTP in this email address.
            </p>
          </div>
          {/* Input Field */}
          {/* main all inputs  */}
          <div className="flex flex-col w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email address"
              className="border-gray-400 outline-none rounded-md border-2 text-2xl bg-gray-100  "
            />
          </div>
          {/* main button  */}
          <div className="rounded-xl cursor-pointer border-2 text-2xl text-white justify-center my-12 flex items-center bg-[#000000b1] w-[50%] py-2">
            <p>Continue</p>
          </div>
        </div>
        <div className="">
          <div>
            <img src={forgotpassword} alt="" />
          </div>
          <div className="w-full flex justify-center items-center">
            <Link
              to={"/"}
              className="rounded-xl cursor-pointer border-2 text-2xl text-white justify-center my-12 flex items-center bg-[#000000b1] w-[50%] py-2"
            >
              <GoHomeFill className="text-white mr-2" />
              <p>Home</p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default ForgotPassword;
