import React from "react";

const EducationalPartner = () => {
  return (
    <section className="bg-[#5a5afb] h-[] pb-8 ">
      <div className="py-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white">
          Educational Support – Teaming up
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white">
          with Partners
        </h1>
      </div>
      <div className="flex mb-12 mx-[.5rem] sm:mx-[2rem] md:mx-[5rem]  lg:mx-[15rem]   rounded-3xl bg-white ">
        <div className=" hidden md:block rounded-tl-3xl rounded-bl-3xl Fpic h-[auto] w-[150vw]"></div>
        <div className="p-4">
          <p className="text-xl md:text-2xl text-gray-500 font-semibold leading-8 tracking-wider">
            Bespoke progressive challenges linked to mental health have been
            created by George Peterkin and the team at Mind Your Health LTD for
            the Global Skill Seekers Award.
          </p>

          <br />
          <p className="text-gray-600 font-bold">
            “Mind Your Health are extremely proud to be a part of this
            initiative for schools spread around the world. The Global Skill
            Seekers Award team ethos and mindset around providing skills and
            development opportunities, goes inline with Mind Your Health's. We
            are excited to help support GSSA in this project and provide this
            fantastic, fun, engaging skill- developing opportunities to as many
            children and young people around the world.”
          </p>
          <br />
          <p className="text-[#3074E3] text-xl md:text-2xl">
            George Peterkin - Managing Director, Mind Your Health
          </p>
          <div className="flex justify-center items-center py-4">
            <a
              href="https://mindyourhealthltd.com/"
              className="text-2xl font-bold"
            >
              https://mindyourhealthltd.com/
            </a>
          </div>
        </div>
      </div>
      <div className="flex mx-[.5rem] sm:mx-[2rem] md:mx-[5rem]  lg:mx-[15rem]   rounded-3xl bg-white ">
        <div className=" hidden md:block  rounded-tl-3xl rounded-bl-3xl Spic h-[auto] w-[100rem] "></div>
        <div className="p-4">
          <p className="text-xl md:text-2xl text-gray-500 font-semibold leading-8 tracking-wider">
            Exclusive sustainability challenges have been supplied for the
            Global Skill Seekers Award by Tuu - the only sustainability tracking
            and education platform for schools.
          </p>

          <br />
          <p className="text-gray-600 font-bold">
            “We love movements that help young people gain understanding and
            agency around sustainability and climate action. We share the same
            vision as the Global Skill Seekers Award and we’re delighted to be
            providing unique sustainability challenges that empower students all
            over the world as they prepare for their futures.”
          </p>
          <br />
          <p className="text-[#3074E3] text-xl md:text-2xl">
            Ian Paynton - Cofounder - Tuu
          </p>
          <div className="flex justify-center items-center py-4">
            <a
              href="https://mindyourhealthltd.com/"
              className="text-2xl font-bold"
            >
              https://mindyourhealthltd.com/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalPartner;
