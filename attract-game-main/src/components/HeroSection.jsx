import React from "react";
import { AiFillHome } from "react-icons/ai";
import { GrGamepad } from "react-icons/gr";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { ImBlog } from "react-icons/im";
import { FaBitcoin } from "react-icons/fa";
import Carousal from "./Carousal";

function HeroSection() {
  return (
    <section className=" px-[5%]  flex mt-4 items-center">
      {/* navigation ? */}
      <div className="flex flex-col mb-4  justify-center gap-4 px-2 w-[18%]">
        <div className="flex  gap-3 bg-gray-200 w-[11.5rem]  px-4 py-2">
          <AiFillHome className="text-xl" />
          <p className="text-base">Home</p>
        </div>
        <div className="flex  items-center gap-3 w-[10rem]  px-4 py-2">
          <GrGamepad className="text-xl" />
          <p className="text-base">Hot game</p>
        </div>
        <div className="flex  items-center gap-3 w-[10rem]  px-4 py-2">
          <MdOutlineCardGiftcard className="text-xl" />
          <p className="text-base">Gift card</p>
        </div>
        <div className="flex  items-center gap-3 w-[10rem]  px-4 py-2">
          <RiComputerFill className="text-xl" />
          <p className="text-base">Steam</p>
        </div>
        <div className="flex  items-center gap-3 w-[10rem]  px-4 py-2">
          <ImBlog className="text-xl" />
          <p className="text-base">Xbox Live</p>
        </div>
        <div className="flex  items-center gap-3 w-[10rem]  px-4 py-2 ">
          <FaBitcoin className="text-xl" />
          <p className="text-base">Bitcoin</p>
        </div>
        <div className="flex  items-center gap-3 w-[10rem]  px-4 py-2">
          {/* <tv className="text-xl" /> */}
          <p className="text-base">IPTV</p>
        </div>
        <div className="flex  items-center gap-3 w-[10rem]  px-4 py-2">
          <MdOutlineCardGiftcard className="text-xl" />
          <p className="text-base">Gift card</p>
        </div>
        <div className="flex  items-center gap-3 w-[10rem]  px-4 py-2">
          <RiComputerFill className="text-xl" />
          <p className="text-base">Steam</p>
        </div>
      </div>

      <Carousal />
    </section>
  );
}

export default HeroSection;
