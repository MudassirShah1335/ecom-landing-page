import React from "react";
import Schoolheader from "../components/Schoolheader";
import SchoolCard from "../components/SchoolCard";
import Addbtn from "../components/Addbtn";

const SupperAdmin = () => {
  return (
    <section className="">
      <Schoolheader />
      <Addbtn />
      <div className="flex px-[8%] flex-wrap gap-10 py-10">
        <SchoolCard />
      </div>
    </section>
  );
};

export default SupperAdmin;
