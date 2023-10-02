import React from "react";
import { Carousel } from "flowbite-react";
import ImageOne from "../Images/image1.jpg";
import ImageTwo from "../Images/image2.jpg";
import ImageThree from "../Images/image3.jpg";

function Carusal() {
  return (
    <div className=" w-full h-[100vh] bg-slate-100">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={ImageOne} alt="image1" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={ImageTwo} alt="image2" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={ImageThree} alt="image3" />
        </div>
      </Carousel>
    </div>
  );
}

export default Carusal;
