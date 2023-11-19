import React from "react";
import Final from "../Icons/Final.png";
import Daily from "../Icons/Daily.png";
import CoinToss from "../Icons/CoinToss.png";
import Economics from "../Icons/Economics.png";
import Money from "../Icons/money.webp";
import Security from "../Icons/Security.svg";
const Features = () => {
  return (
    <section className="pt-44  flex flex-col gap-y-12  " id="features">
      {/* fist future  */}
      <div className="lg:flex pl-[10%] md:pl-[20%] gap-x-3 pr-[10%]">
        <div className="pt-12">
          <h1 className="font-bold text-3xl pb-2">Wage Tracker</h1>
          <p className="h-1 w-full md:w-96 bg-[#e2e244]"></p>
          <p className=" text-[#e2e244]">
            Effortlessly Manage Your Work Hours and Earnings
          </p>
          <p className="w-[20rem] text-sm md:text-base pr-4">
            Welcome to Wage Tracker, your go-to app for simplified wages
            calculation and time tracking
          </p>
        </div>
        <div className="h-[80vh] w-full">
          <h1 className="text-[12rem] font-bold  text-center">01</h1>
          <ul className="flex flex-col gap-y-4 text-xl">
            <li typeof="circle">
              Clear overview of all financesCreate a personalized account to
              access a tailored experience
            </li>
            <li>
              Manage multiple users under one account for convenient
              administration
            </li>
            <li>
              Ideal for freelancers or individuals working for multiple
              employers
            </li>
          </ul>
        </div>
      </div>
      {/* second Feature  */}
      <div className="lg:flex pl-[10%] md:pl-[20%] gap-x-3 pr-[10%]">
        <div className="h-[80vh]  ">
          <h1 className="text-[12rem] font-bold ">02</h1>
          <ul className="flex flex-col gap-y-4 text-xl ">
            <li typeof="circle">
              Switch between companies effortlessly for efficient task
              management.
            </li>
            <li>
              Simplify administration by keeping all company-related data in one
              place.
            </li>
            <li>
              ​Enhance your professional flexibility by working with multiple
              employers
            </li>
          </ul>
        </div>
        <div className="pt-20 h-fit   ">
          <h1 className="font-bold text-3xl pb-2">Company Management</h1>
          <p className="h-1 w-full md:w-96 bg-[#e2e244]"></p>
          <p className=" text-[#e2e244]">
            Organize Your Work with Seamless Company Integration
          </p>
          <p className="w-[20rem] pt-5 text-sm md:text-base pr-4">
            Add and switch between different companies seamlessly. Ideal for
            freelancers or individuals working for multiple employers.
          </p>
        </div>
      </div>
      {/* third feature  */}
      <div className="lg:flex pl-[10%] md:pl-[20%] gap-x-3 pr-[10%]">
        <div className="pt-20">
          <h1 className="font-bold text-3xl pb-2">Time and Data Entry</h1>
          <p className="h-1 w-full  md:w-96 bg-[#e2e244]"></p>
          <p className=" text-[#e2e244]">Log Work Hours with Precision</p>
          <p className="w-[20rem] text-sm md:text-base pr-4">
            Log your work hours with precision. Input start and end times along
            with the date, allowing for detailed time tracking.
          </p>
        </div>
        <div className="h-[80vh] w-full">
          <h1 className="text-[12rem] font-bold  text-center">03</h1>
          <ul className="flex flex-col gap-y-4 text-xl">
            <li typeof="circle">
              Efficiently record your work hours to maintain accurate time logs.
            </li>
            <li>
              Manage multiple users under one account for convenient
              administration
            </li>
            <li>
              Ideal for freelancers or individuals working for multiple
              employers
            </li>
          </ul>
        </div>
      </div>

      {/* feature in  */}
      <div className="pb-16  mb-12 w-full bg-gray-100">
        <h1 className="text-center text-gray-600 pt-12"> As featured in:</h1>
        <div className="flex justify-center">
          <div className="lg:flex justify- items- gap-x-12 pt-12">
            <img src={Final} alt="" />
            <img src={Daily} alt="" />
            <img src={CoinToss} alt="" />
            <img src={Economics} alt="" />
            <img src={Money} alt="" />
          </div>
        </div>
      </div>
      {/* security  */}
      <div className="md:flex pl-[10%] gap-x-16 pb-12 mb-12">
        <img src={Security} alt="" className="mt-24 w-[20rem]" />
        <div className="pt-20 h-fit   ">
          <h1 className="font-bold text-2xl md:text-3xl pb-2">
            Company Management
          </h1>
          <p className="h-1  md:w-96 bg-[#e2e244] mr-4 md:mr-0 "></p>

          <p className="w-[20rem] pt-12 font-semibold text-xl">
            Add and switch between different companies seamlessly. Ideal for
            freelancers or individuals working for multiple employers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
