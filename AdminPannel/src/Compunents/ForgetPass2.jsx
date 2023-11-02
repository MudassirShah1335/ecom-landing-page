import React from "react";

const ForgetPass2 = () => {
  return (
    <div className="bg-[#407BFF] h-screen flex flex-col justify-center items-center ">
      <div>
        <h1 className="font-semibold pb-8 pt-12 text-white text-[24.5px]">
          Attract Games Admin Login
        </h1>
      </div>
      <div className="w-[55%] pb-10 bg-white rounded-md">
        <h1 className="flex justify-center pt-12 text-[#7D7C7C] md:text-[36px] font-bold">
          Verify your email
        </h1>
        <div
          style={{ color: "rgba(130, 122, 122, 0.75)" }}
          className="text-[20px] font-normal px-44 py-8 text-center"
        >
          Please check your email and follow the instructions to verify your
          account. If you did not receive or if it expired, you can resend one.
        </div>
        <div className="px-[7%]">
          <div className="bg-[#407BFF] mt-6 rounded-md flex justify-center items-center text-white py-4">
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass2;
