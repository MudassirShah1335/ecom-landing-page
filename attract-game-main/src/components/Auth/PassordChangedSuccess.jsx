import React from "react";
import { GoHomeFill } from "react-icons/go";
import Logo from "../../assets/AuthImages/logo.png";
import Footer from "../../layouts/Footer";
import success from "../../assets/AuthImages/sucess.png";
import { Link } from "react-router-dom";

function PassordChangedSuccess() {
  return (
    <main>
      {/* header setion  */}
      <header>
        <Link to={"/"}>
          <img src={Logo} alt="" width="180px" />
        </Link>
      </header>
      {/* main setion  */}
      <section className="flex  items-center justify-between px-[6%]">
        <div className=" flex flex-col justify-center items-center mt-12 w-[30rem]">
          {/* main title  */}
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-3xl font-semibold">Success!</h1>
            <p className="text-lg w-[22rem] text-center text-[#000000] py-4">
              Your account password has been successfully changed.
            </p>
            <p className="text-lg w-[22rem] text-gray-400 py-0">
              Please login to us with your new password
            </p>
          </div>
          {/* main button  */}
          <div className="rounded-xl cursor-pointer border-2 text-2xl text-white justify-center my-12 flex items-center bg-[#000000b1] w-[50%] py-2">
            <p>Continue to login </p>
          </div>
        </div>
        <div className="">
          <div>
            <img src={success} alt="" />
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

export default PassordChangedSuccess;
