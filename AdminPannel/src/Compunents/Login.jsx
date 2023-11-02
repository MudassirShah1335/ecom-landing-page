import React from "react";

const Login = () => {
  return (
    <div className="bg-[#407BFF] h-screen flex flex-col justify-center items-center ">
      <div>
        <h1 className="font-semibold pb-8 pt-12 text-white text-[24.5px]">
          Attract Games Admin Login
        </h1>
      </div>
      <div className="w-[55%] pb-10 bg-white rounded-md">
        <h1 className="flex justify-center pt-12 text-[#666] md:text-[20px] font-normal">
          Please fill in your unique admin login details below
        </h1>
        <div className="px-[7%]">
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="pt-7 pb-4 text-[#666] text-[20px] font-normal"
            >
              Email address
            </label>
            <input
              type="text"
              name=""
              className="outline-none border-none bg-[#F5F5F5] py-3 rounded-md"
              id=""
            />
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="pt-7 pb-4 text-[#666] text-[20px] font-normal"
              >
                Password
              </label>
              <input
                type="text"
                name=""
                className="outline-none border-none py-3 bg-[#F5F5F5] rounded-md"
                id=""
              />
            </div>
            <div className="flex justify-end">
              <p className="pt-7 pb-4 text-[#666] text-[20px] font-normal">
                forgot password
              </p>
            </div>
          </div>
          <div className="bg-[#407BFF] mt-6 rounded-md flex justify-center items-center text-white py-4">
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
