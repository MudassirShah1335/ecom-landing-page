import React from "react";
import RoadMap from "../images/footer.png";
import Email from "../images/Email.png";
import Linkin from "../images/linked.png";
import Insta from "../images/insta.png";
import Twitter from "../images/twitter.png";
const Contactus = () => {
  return (
    <section className="flex flex-wrap-reverse gap-12 justify-between px-4 py-12 ">
      <div>
        <img src={RoadMap} alt="" />
        <div className="flex  items-center gap-4 py-4">
          <img src={Email} alt="" />
          <a href="">Contactus@globalskillseekers.com</a>
        </div>
        <div className="flex items-center gap-4 pb-4">
          <img src={Linkin} alt="" />
          <img src={Insta} alt="" />
          <img src={Twitter} alt="" />
        </div>
        <p>@2022 Global Skill Seekers Awardsc</p>
      </div>

      <div className="h-[40rem] w-[30rem] bg-[#B7D745] flex flex-col gap-6 px-4 rounded-3xl">
        <div className="h-[5rem] grid place-content-center">
          <h1 className="text-4xl text-white">Contact Us </h1>
        </div>
        <input className="py-4 px-3" type="text" placeholder="Full Name" />
        <input className="py-4 px-3" type="text" placeholder="Email" />
        <textarea
          className="px-3"
          name=""
          placeholder="Message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </section>
  );
};

export default Contactus;
