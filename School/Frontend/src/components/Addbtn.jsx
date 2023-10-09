import React from "react";
import { Link } from "react-router-dom";

const Addbtn = () => {
  return (
    <div className="flex justify-end items-center px-[%]">
      <Link to={"/school"}>
        <button className="px-12 py-2 border-2 border-blue-300 rounded-full mr-32 hover:border-blue-700">
          Add new
        </button>
      </Link>
    </div>
  );
};

export default Addbtn;
