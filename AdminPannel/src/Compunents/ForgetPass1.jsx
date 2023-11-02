import React from "react";
import Capcha from "../assets/AdmenPannelImages/Chapcha.png";
const ForgetPass1 = () => {
  return (
    <div className="bg-[#407BFF] h-screen flex flex-col justify-center items-center ">
      <div>
        <h1 className="font-semibold pb-12 text-white text-[24.5px]">
          Attract Games Admin Login
        </h1>
      </div>
      <div className="w-[55%] pb-8 pt-12 bg-white rounded-md">
        <div className="pt-12 px-[7%] flex flex-col gap-12">
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="pt-7 pb-4 text-[#666] text-[20px] font-normal"
            >
              Enter Email address
            </label>
            <input
              type="text"
              name=""
              className="outline-none border-none bg-[#F5F5F5] py-3 rounded-md"
              id=""
            />
          </div>
          <div>
            <img src={Capcha} alt="" />
          </div>
          <div className="flex flex-col ">
            <input
              type="text"
              name=""
              placeholder="Capcha Text*"
              className="outline-none border-none bg-[#F5F5F5] py-3 rounded-md"
              id=""
            />
          </div>
          <div className="flex justify-between items-center">
            <button className="px-12 bg-[#86878A] py-4 rounded-md text-white text-[20px] font-normal">
              Cancel
            </button>
            <button className="px-12 bg-[#407BFF] rounded-md py-4 text-white text-[20px] font-normal">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass1;
