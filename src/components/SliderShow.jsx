import React from "react";
import logo from "../Images/logo.jpg";

function SliderShow() {
  return (
    <div className="m-10 mx-auto p-16 sm:p-24 lg:p-48 bg-gray-200">
      <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl min-h-72">
        {/* Logo on the left side */}
        <div className="w-1/5 md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg min-h-72"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <img
            className=""
            style={{ width: "200px", height: "200px", objectFit: "contain" }}
            src={logo} // Use the imported logo here
            alt="Logo"
          />
        </div>
        {/* Rest of your content */}
        <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
          <div className="p-12 md:pr-24 md:pl-16 md:py-12">
            <p className="text-gray-600">
              <span className="text-gray-900">
                Attrack Game: Elevate Your Gaming Experience
              </span>{" "}
              Join the ranks of satisfied gamers worldwide with Attrack Game.
              Our cutting-edge platform delivers thrilling gaming adventures
              while ensuring seamless, secure transactions for players across
              the globe. Get ready to level up your gaming journey today!
            </p>
            <a
              className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900"
              href=""
            >
              <span>Learn more about our users</span>
              <span className="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
        {/* Buttons and other content */}
        <button className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
          <span className="block" style={{ transform: "scale(-1)" }}>
            &#x279c;
          </span>
        </button>
        <button className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
          <span className="block" style={{ transform: "scale(1)" }}>
            &#x279c;
          </span>
        </button>
      </div>
      {/* Additional content below the hero section */}
      <div className="flex items-center pt-5 justify-between">
        <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg"
            alt=""
            style={{ maxHeight: "60px" }}
          />
        </button>
        <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/slack.svg"
            alt=""
            style={{ maxHeight: "60px" }}
          />
        </button>
        <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/glossier.svg"
            alt=""
            style={{ maxHeight: "60px" }}
          />
        </button>
        <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/charity_water.svg"
            alt=""
            style={{ maxHeight: "60px" }}
          />
        </button>
        <button className="px-2 opacity-100 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/missguided.svg"
            alt=""
            style={{ maxHeight: "60px" }}
          />
        </button>
      </div>
    </div >
  );
}

export default SliderShow;
