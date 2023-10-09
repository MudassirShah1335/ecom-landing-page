import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function BlogCard(Props) {
  return (
    <section>
      <div className="h-[29rem] w-[15rem] transition-all ease-in duration-150 bg-white cursor-pointer rounded-md ">
        <img
          className="rounded-tl-md rounded-tr-md h-[24rem] w-full"
          src={Props.img}
          alt=""
        />
        <hr />
        <div
          className="
    "
        >
          <h3 className="font-semibold text-lg mb-3">{Props.title}</h3>
          <p className=" text-sm mb-6">{Props.details}</p>
        </div>
      </div>
    </section>
  );
}

export default BlogCard;
