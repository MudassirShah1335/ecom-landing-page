import React, { useState } from "react";
import Logo from "../images/logo.png";
import axios from "axios";
import { baseUrl } from "../config/baseUrl";
import { Link, useNavigate } from "react-router-dom";

const School = () => {
  const [sendData, setSendData] = useState();
  const Navigate = useNavigate();
  const SubmitedData = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}api/role`, {
        role_name: sendData,
      })
      .then(() => {
        Navigate("/SupperAdmin");
      });
  };
  return (
    <section className="flex justify-center items-center h-screen w-full bg-gray-500 ">
      <div className="flex flex-col justify-center items-center h-[20rem] w-[30rem] bg-white rounded-2xl ">
        {/* <img src={Logo} alt="" width="100px" /> */}
        <form
          action=""
          className="flex flex-col justify-center items-center"
          onSubmit={SubmitedData}
        >
          <h1 className="text-3xl mb-7">your Role</h1>
          <input
            type="text"
            name="role_name"
            placeholder="role_name"
            className="py-2 px-2 border outline-none border-blue-500"
            onChange={(e) => setSendData(e.target.value)}
          />

          <button
            type="submit"
            className="px-12 py-2 border-2 border-blue-300 rounded-full mt-3 hover:border-blue-70"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default School;
