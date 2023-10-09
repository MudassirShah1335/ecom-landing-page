import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
function HotGamesCard(Props) {
  return (
    <section>
      <div className="h-[29rem] w-[17rem] transition-all ease-in duration-150 bg-white cursor-pointer rounded-md hover:shadow-2xl hover:translate-y-[-5px]">
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
          <h3 className="font-semibold text-sm mb-6">{Props.title}</h3>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center flex-row gap-2 w-1/2 bg-[orange] text-[#454549] text-center py-2 rounded-bl-md">
              <AiOutlineShoppingCart />
              {Props.Addcart}
            </div>
            <div className=" text-[orange] bg-[#454549] w-1/2 text-center py-2 rounded-br-md">
              {Props.dolor}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotGamesCard;
