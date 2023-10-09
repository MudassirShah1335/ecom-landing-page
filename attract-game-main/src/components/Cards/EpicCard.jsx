import React from "react";

function EpicCard(Props) {
  return (
    <section>
      <div className="h-[27rem] w-[20rem] transition-all ease-in duration-150 bg-white cursor-pointer rounded-md hover:shadow-2xl hover:translate-y-[-5px]">
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
          <div className="grid place-items-center">
            <h3 className="font-semibold text-sm py-2">{Props.title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EpicCard;
