import React from "react";
import HotGamesCard from "./Cards/HotGamesCard";
import Productimg from "../assets/images/product.png";
import Ak from "../assets/images/ak.png";
import AkRight from "../assets/images/Group88.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import BlogCard from "./Cards/BlogCard";
import Stemcard from "./Cards/SteamCard";
import EpicCard from "./Cards/EpicCard";
import Dot from "../assets/images/foutdot.png";
import Blogimg from "../assets/images/blog.png";
import Blogimg2 from "../assets/images/blog2.png";
import Blogimg3 from "../assets/images/blog3.png";
import Blogimg4 from "../assets/images/blog4.png";
import Blogimg5 from "../assets/images/blog5.png";
import Netprodimg from "../assets/images/netproduct.png";
import Frameimg from "../assets/images/Frame.png";
import Stemimg from "../assets/images/stem.png";
import Stemimg2 from "../assets/images/Stemcard2.png";
import Stemimg3 from "../assets/images/Stemcard3.png";
import Stemimg4 from "../assets/images/Stemcard4.png";
import Epicimg from "../assets/images/Epic.png";
import Epicimg2 from "../assets/images/epic2.png";
import Epicimg3 from "../assets/images/epic3.png";
import Epicimg4 from "../assets/images/epic4.png";
function GamesCard() {
  return (
    <section className="px-[6%] pt-12 pb-12">
      {/* hot  Games cards 
   d */}
      <div className="pb-24">
        <h1 className=" text-4xl font-bold">HOT GAMES</h1>
        <div className="flex items-center justify-between">
          <div className=" flex items-center gap-4 py-12">
            <img src={Dot} alt="" />
            <select
              name=""
              id=""
              className="border-[2px] text-[orange] font-semibold text-xl border-gray-500 bg-transparent px-12 py-2 w-[13rem]"
            >
              <option value="">A-Z</option>
            </select>
          </div>
          <div
            style={{ marginTop: "5.5rem" }}
            className=" flex items-center gap-3 text-xl text-[orange] mt-5 "
          >
            <IoIosArrowDropleft className="cursor-pointer" />
            <IoIosArrowDropright className="cursor-pointer" />
          </div>
        </div>
        {/* /////////// cards ///////////// */}
        <div className="flex justify-center items-center gap-9">
          <HotGamesCard
            img={Productimg}
            title="Rendom hot deal 1key (pc) stem key Global."
            Addcart="Add to cart"
            dolor="52$"
          />
          <HotGamesCard
            img={Productimg}
            title="Rendom hot deal 1key (pc) stem key Global."
            Addcart="Add to cart"
            dolor="52$"
          />
          <HotGamesCard
            img={Productimg}
            title="Rendom hot deal 1key (pc) stem key Global."
            Addcart="Add to cart"
            dolor="52$"
          />
          <HotGamesCard
            img={Productimg}
            title="Rendom hot deal 1key (pc) stem key Global."
            Addcart="Add to cart"
            dolor="52$"
          />
        </div>
      </div>
      {/* gift cardss */}
      <div className=" pb-24">
        <h1 className="py-12 px-4 text-4xl font-bold">GIFT CARDS</h1>

        {/* /////////// cards ///////////// */}
        <div className="flex justify-center items-center gap-9">
          <HotGamesCard
            img={Productimg}
            title="Rendom hot deal 1key (pc) stem key Global."
            Addcart="Add to cart"
            dolor="52$"
          />
          <HotGamesCard
            img={Productimg}
            title="Rendom hot deal 1key (pc) stem key Global."
            Addcart="Add to cart"
            dolor="52$"
          />
          <HotGamesCard
            img={Productimg}
            title="Rendom hot deal 1key (pc) stem key Global."
            Addcart="Add to cart"
            dolor="52$"
          />
          <HotGamesCard
            img={Productimg}
            title="Rendom hot deal 1key (pc) stem key Global."
            Addcart="Add to cart"
            dolor="52$"
          />
        </div>

        {/* ........ MORE CARDS ....... */}

        <div
          style={{ marginTop: "10rem" }}
          className="flex justify-between gap-3 mt-[2rem]"
        >
          <div className="">
            <img src={Ak} alt="" />
            <div className="flex">
              <div className=" mx-auto flex justify-center items-center flex-row gap-2 w-1/2 border-2 border-[#454549] text-[#454549] text-center py-2 rounded-br-md rounded-bl-md">
                <AiOutlineShoppingCart />
                Add to cart
              </div>
              <div className="flex justify-center items-center text-[orange]">
                <h2 className="font-bold text-[1.5rem]">5$</h2>
                <strike className="text-gray-400 text-sm">11$</strike>
              </div>
            </div>
          </div>
          <div className="">
            <img src={AkRight} alt="" />
          </div>
        </div>

        {/* ////////////// blogs cards .///////////////// */}
        <div className="mt-10">
          <div className="flex justify-between items-center">
            <h1 className="py-8 text-xl flex items-center">
              Blog{" "}
              <span className="bg-[orange] rounded-md px-2 ml-2">show all</span>
            </h1>
            <div
              style={{ marginTop: "2.5rem" }}
              className=" flex items-center gap-3 text-xl text-[orange] "
            >
              <IoIosArrowDropleft className="cursor-pointer" />
              <IoIosArrowDropright className="cursor-pointer" />
            </div>
          </div>
          <div className="flex  items-center gap-4 overflow-hidden">
            <BlogCard
              img={Blogimg}
              title="Starfield premium Edition"
              details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perferendis, libero repudiandae nemo earum eaque ipsa volup"
            />
            <BlogCard
              img={Blogimg2}
              title="Starfield premium Edition"
              details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perferendis, libero repudiandae nemo earum eaque ipsa volup"
            />
            <BlogCard
              img={Blogimg3}
              title="Starfield premium Edition"
              details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perferendis, libero repudiandae nemo earum eaque ipsa volup"
            />
            <BlogCard
              img={Blogimg4}
              title="Starfield premium Edition"
              details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perferendis, libero repudiandae nemo earum eaque ipsa volup"
            />
            <BlogCard
              img={Blogimg5}
              title="Starfield premium Edition"
              details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perferendis, libero repudiandae nemo earum eaque ipsa volup"
            />
            <BlogCard
              img={Blogimg}
              title="Starfield premium Edition"
              details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perferendis, libero repudiandae nemo earum eaque ipsa volup"
            />
            <BlogCard
              img={Blogimg}
              title="Starfield premium Edition"
              details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perferendis, libero repudiandae nemo earum eaque ipsa volup"
            />
            <BlogCard
              img={Blogimg}
              title="Starfield premium Edition"
              details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perferendis, libero repudiandae nemo earum eaque ipsa volup"
            />
          </div>
        </div>
      </div>
      {/* //////////////// above blogs cards /////////////////////// */}
      <div className="">
        <div className="flex justify-between items-center px-[%] ">
          <img style={{ height: "330px" }} src={Frameimg} alt="" width={709} />
          <img src={Netprodimg} alt="" height={200} />
        </div>
      </div>
      {/* ///////////////////// stem  cards ////////////////// */}

      <div className="mt-8">
        <div className="flex items-center justify-between ">
          <h1 className="py-8 text-xl flex items-center">
            Stem{" "}
            <span className="bg-[orange] rounded-md px-2 ml-2">show all</span>
          </h1>
          <div
            style={{ marginTop: "2.5rem" }}
            className=" flex items-center gap-3 text-xl text-[orange] mt-5 "
          >
            <IoIosArrowDropleft className="cursor-pointer" />
            <IoIosArrowDropright className="cursor-pointer" />
          </div>
        </div>
        <div className="flex gap-4 items-center overflow-hidden">
          <Stemcard
            img={Stemimg}
            title="Detective pikachu return"
            dolor="52$"
            Addcart="Add to cart"
          />
          <Stemcard
            img={Stemimg2}
            title="Detective pikachu return"
            dolor="52$"
            Addcart="Add to cart"
          />
          <Stemcard
            img={Stemimg3}
            title="Detective pikachu return"
            dolor="52$"
            Addcart="Add to cart"
          />
          <Stemcard
            img={Stemimg4}
            title="Detective pikachu return"
            dolor="52$"
            Addcart="Add to cart"
          />
          <Stemcard
            img={Stemimg}
            title="Detective pikachu return"
            dolor="52$"
            Addcart="Add to cart"
          />
        </div>
      </div>

      {/* ////////////////// Epic cards  ///////////////////// */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h1 className="py-8 text-xl flex items-center">
            Epic{" "}
            <span className="bg-[orange] rounded-md px-2 ml-2">show all</span>
          </h1>
          <div
            style={{ marginTop: "2.5rem" }}
            className=" flex items-center gap-3 text-xl text-[orange] mt-5 "
          >
            <IoIosArrowDropleft className="cursor-pointer" />
            <IoIosArrowDropright className="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center gap-4 overflow-hidden">
          <EpicCard img={Epicimg} title="Detective pikachu return" />
          <EpicCard img={Epicimg2} title="Detective pikachu return" />
          <EpicCard img={Epicimg3} title="Detective pikachu return" />
          <EpicCard img={Epicimg4} title="Detective pikachu return" />
        </div>
      </div>
    </section>
  );
}

export default GamesCard;
