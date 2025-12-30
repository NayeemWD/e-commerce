import React from "react";
import bg from "../../../assets/image/HERO-COVER3.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div>
      {/* <div
        style={{ backgroundImage: `url(${bg})` }}
        className="container bg-cover h-[50vh] sm:h-[60vh] md:h-[70vh] px-4 sm:px-8 md:px-12 lg:px-24 mx-auto my-10">
        <div className="flex flex-col justify-center h-full items-center text-center md:items-start md:text-left gap-3">
          <h3 className="cp text-lg sm:text-xl md:text-2xl font-semibold">
            70% Off For This Winter
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold ct">
            Bigest Sale For Winter
            <br /> Man & Woman
          </h1>
          <Link to="/shop">
            <button className="btn bgp hover:scale-110 transition-all hover:duration-500 text-gray-100 ">
              Shop Now
            </button>
          </Link>
        </div>
      </div> */}

      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="
    container
    h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh]
    px-4 sm:px-8 md:px-12 lg:px-24
    mx-auto my-10 rounded-2xl

    /* background control */
    bg-none sm:bg-none md:bg-cover
    md:bg-center lg:bg-right
    bg-no-repeat
  ">
        <div className="flex flex-col justify-center h-full items-center text-center md:items-start md:text-left gap-3">
          <h3 className="cp text-lg sm:text-xl md:text-2xl font-semibold">
            50% Off For This Winter
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-4xl font-semibold ct">
            Biggest Sale For Winter
            <br /> Man & Woman
          </h1>

          <Link to="/shop">
            <button className="btn bgp hover:scale-110 transition-transform duration-500 text-gray-100">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
