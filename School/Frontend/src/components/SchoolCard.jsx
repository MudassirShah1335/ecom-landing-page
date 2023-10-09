import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../config/baseUrl";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
const SchoolCard = () => {
  const [data, setData] = useState([]);

  const getRoles = async () => {
    const result = await axios.get(`${baseUrl}api/role`);
    setData(result.data.data);
  };
  useEffect(() => {
    getRoles();
  }, []);

  return (
    <Link to={""}>
      <div
        className="flex justify-center items-center gap-12
      flex-wrap"
      >
        {data.map((it) => {
          return (
            <main className="">
              <section className="flex flex-col pt-12 justify-center shadow-2xl shadow-gray-300  w-44 rounded-2 rounded-2xl hover:-translate-y-4 cursor-pointer">
                <div className="flex  justify-center items-center flex-col  ">
                  <img src={Logo} alt="" className="h-16" />
                  <h1 className="pt-4">ABC School</h1>

                  <h1>{it.role_name}</h1>
                </div>

                <div className="flex  rounded-bl-2xl rounded-br-2 rounded-br-2xl justify-between     items-center button bg-white">
                  <button className="border-2 rounded-bl-2xl  w-full flex justify-center items-center hover:border-blue-600 cursor-pointer transition-all ease-in duration-300">
                    del
                  </button>
                  <div className="border-2  rounded-br-2xl w-full flex justify-center items-center hover:border-blue-600 cursor-pointer transition-all ease-in duration-300">
                    edit
                  </div>
                </div>
              </section>
            </main>
          );
        })}
      </div>
    </Link>
  );
};

export default SchoolCard;
