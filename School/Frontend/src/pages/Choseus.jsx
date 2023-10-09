import React from "react";
import When from "../images/why (1).png";
import Why from "../images/why (2).png";
import Who from "../images/why (3).png";
const Choseus = () => {
  return (
    <div className=" bg-white mb-20 grid place-items-center ">
      <div className=" flex flex-wrap justify-center  gap-12">
        <div className="bg-[#D4DF57] h-[400px] w-[370px] rounded-3xl">
          <div className="h-32 flex justify-center items-center">
            <img src={Why} alt="" className="mt-11" width="120px" />
          </div>
          <p className="p-4 text-xl text-white text-center">
            Additional layer of extra-curricular activities. Designed for each
            age group to challenge and support enquiry and skill development. A
            range of life skills, citizenship, enquiry, world awareness,
            entrepreneurship and community challenges.
          </p>
        </div>
        <div className="bg-[#164FDD] h-[400px] w-[370px] rounded-3xl">
          <div className="h-32 flex justify-center items-center">
            <img src={When} alt="" className="mt-11" width="120px" />
          </div>
          <p className="p-4 text-xl text-white text-center">
            Children can be signed up at any point in the academic year but
            ideally before within the first two months of the year to ensure
            enough time is given for children to complete the wide range of
            activities.
          </p>
        </div>
        <div className="bg-[#50A00B] h-[400px] w-[370px] rounded-3xl">
          <div className="h-32 flex justify-center items-center">
            <img src={Who} alt="" className="mt-11" width="120px" />
          </div>
          <p className="p-4 text-xl text-white text-center">
            Children from four years old to thirteen can access the Global Skill
            Seekers Award. This unique digital Award supports a wide range of
            skills being developed through a series of challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choseus;
