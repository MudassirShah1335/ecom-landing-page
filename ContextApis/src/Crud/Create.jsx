import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navegate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://65466341fe036a2fa9559c1e.mockapi.io/Crud", {
        I_name: name,
        I_Email: email,
        I_Age: age,
      })
      .then(() => {
        navegate("/");
      });
  };

  return (
    <section className="flex flex-col items-center bg-blue-600 h-screen text-white">
      <h1 className="text-3xl py-8">Create Data</h1>
      <div className="bg-white text-black py-12 px-5 w-[40rem] rounded-xl">
        <form
          action=""
          className="flex flex-col gap-y-8"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="">Enter Name</label>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>

          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="">Enter Email</label>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="">Enter Age</label>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-700 py-3  text-white w-full text-xl rounded-md "
            >
              Submited
            </button>
          </div>
        </form>
      </div>
      {name}
      <br />
      {email}
      <br />
      {age}
    </section>
  );
};

export default Create;
