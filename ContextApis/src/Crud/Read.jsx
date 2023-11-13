import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);
  const getData = () => {
    axios
      .get("https://65466341fe036a2fa9559c1e.mockapi.io/Crud")
      .then((res) => {
        setApiData(res.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://65466341fe036a2fa9559c1e.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="flex flex-col pt-12 items-center h-screen bg-blue-400 text-white">
      <div className="py-12">
        <h1 className="pb-12 text-4xl">READ DATA</h1>
        <table>
          <thead>
            <tr className="flex gap-x-40 text-2xl">
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <div>
            {apiData.map((it) => {
              return (
                <div className="flex justify-between">
                  <p>{it?.id}</p>
                  <p>{it?.I_name}</p>
                  <p>{it?.I_Email}</p>
                  <p>{it?.I_Age}</p>
                  <button>Edit</button>
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure")) {
                        handleDelete(it.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </table>
      </div>
      <div>
        <Link to="/create">
          <button className=" bg-black text-white py-3 px-12 fixed top-2 left-2">
            Create Data
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Read;
