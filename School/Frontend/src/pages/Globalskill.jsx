import React from "react";
import Kid1 from "../images/kid (1).png";
import Kid2 from "../images/kid (2).png";
import Kid3 from "../images/kid (3).png";
import Kid4 from "../images/kid (4).png";
import Kid5 from "../images/kid (5).png";
import Kid6 from "../images/kid (6).png";
import Kid7 from "../images/kid (7).png";
import ChangeImage from "../images/changeImage.png";
const Globalskill = () => {
  return (
    <section className="pb-10">
      <h1 className=" text-3xl md:text-5xl font-bold text-center py-6">
        #GlobalSkillSeekers
      </h1>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <img src={ChangeImage} alt="" />
        <img src={Kid2} alt="" />
        <img src={Kid3} alt="" />
        <img src={Kid1} alt="" />
        <img src={Kid5} alt="" />
        <img src={Kid6} alt="" />
        <img src={Kid7} alt="" />
        <img src={Kid4} alt="" />
      </div>
    </section>
  );
};

export default Globalskill;
