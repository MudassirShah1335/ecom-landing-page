import React from "react";
import Iconpaperplane from "../images/icon-paperplane 1.png";
import Button from "../components/Button";
const JoinOur = () => {
  return (
    <section id="about">
      <div className="bg-[#5a5afb] mx-[2rem] py-16 rounded-[40px] flex flex-wrap gap-4 justify-between   items-center  ">
        <div>
          <img src={Iconpaperplane} alt="" />
        </div>
        <div className="w-[45rem] px-4">
          <h1 className="text-5xl font-bold text-white">
            Join our Community Today
          </h1>
          <p className="pt-8  tracking-wider text-2xl">
            Find out more about how your school can be involved in this global
            community. One of our community ambassadors will be in touch within
            24hours.
          </p>
        </div>
        <div className="pr-6 px-4">
          <Button name="Find out more" />
        </div>
      </div>
    </section>
  );
};

export default JoinOur;
