import React from "react";
import Hero from "../pages/Hero";
// import BenefitSec from "../components/BenefitSec";
import BenefitSec from "../components/BenefitSec";
import Biglmg from "../pages/Biglmg";
import Choseus from "../pages/Choseus";
import EducationalPartner from "../pages/EducationalPartner";
import Globalskill from "../pages/Globalskill";
import JoinOur from "../pages/JoinOur";
import ChangeRoad from "../pages/ChangeRoad";
import Contactus from "../pages/Contactus";
const Home = () => {
  return (
    <div>
      <Hero />
      <BenefitSec />
      <Biglmg />
      <Choseus />
      <EducationalPartner />
      <Globalskill />
      <JoinOur />
      <ChangeRoad />
      <Contactus />
    </div>
  );
};

export default Home;
