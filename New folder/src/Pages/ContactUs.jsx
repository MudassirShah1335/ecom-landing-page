import React from "react";
import GooglePlay from "../Icons/googlePlay.png";
import AppleStore from "../Icons/Apple.png";
import { IoIosArrowUp } from "react-icons/io";
import Fb from "../Icons/fb.png";
import Twitter from "../Icons/twiter.png";
import Linkedin from "../Icons/linkin.png";
const ContactUs = () => {
  return (
    <section
      id="contact"
      className=" pt-12 lg:flex justify-between px-[7%] pb-12 bg-blue-950 text-white"
    >
      <div>
        <h1 className="text-2xl pb-12">Reach out to us</h1>
        <div className="flex flex-col">
          <input
            type="text"
            name=""
            placeholder="name"
            id=""
            className="hover:border-sky-300 bg-transparent outline-none border-2 border-white"
          />
          <input
            type="text"
            name=""
            placeholder="email"
            id=""
            className="my-2 bg-transparent hover:border-sky-300 outline-none border-2 border-white"
          />
          <input
            type="text"
            name=""
            placeholder="Phone"
            id=""
            className=" lg:w-96 hover:border-sky-300 bg-transparent outline-none border-2 border-white"
          />
          <textarea
            name=""
            className="bg-transparent outline-none hover:border-sky-300 h-[10rem] border-2 border-white mt-2"
            id=""
            cols="30"
            rows="10"
            placeholder="Type your messages here"
          ></textarea>
          <button className="text-end text-[#e4e44a] hover:text-gray-400 pt-2 text-xl font-semibold">
            Submit
          </button>
        </div>
      </div>
      <div className="py-12 md:py-0">
        <h1 className="text-2xl pb-12">About</h1>

        <div>
          <div>
            <p className="text-xl font-semibold  pb-1 hover:bg-yellow-300 cursor-pointer w-[12rem]">
              Technical info
            </p>
            <p className="h-1 w-[9rem] bg-yellow-300"></p>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold  pb-1 hover:bg-yellow-300 cursor-pointer w-[12rem]">
              Other products
            </p>
            <p className="h-1 w-[9rem] bg-yellow-300"></p>
          </div>
          <h1 className="mt-36 text-2xl pb-12">Download Time vault</h1>
          <div className="flex items-center">
            <img src={GooglePlay} alt="" className="w-[7rem]" />
            <img src={AppleStore} alt="" className="w-[6rem]" />
          </div>
        </div>
      </div>{" "}
      <div>
        <h1 className="text-2xl pb-12">Contact </h1>
        <div>
          <div>
            <p className="pb-6">
              500 Terry Francine street <br /> San Francisco, CA 94158
            </p>
            <p className="cursor-pointer">
              Tel - 123-456-7890 <br />
              <span>Email - info@mysite.com</span>
            </p>
          </div>
          <div className="mt-12">
            <a href="#">
              <IoIosArrowUp className="text-5xl font-semibold" />
            </a>
          </div>
          <div className="flex items-center mt-8 gap-x-3">
            <img src={Fb} alt="" className="w-[1.3rem]" />
            <img src={Twitter} alt="" className="w-[1.3rem]" />
            <img src={Linkedin} alt="" className="w-[1.3rem]" />
          </div>
          <div className="mt-12">
            © 2035 by Jddevinsight. <br /> Powered and secured by{" "}
            <span className="border-b-[1px] border-white">Wix</span>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default ContactUs;
