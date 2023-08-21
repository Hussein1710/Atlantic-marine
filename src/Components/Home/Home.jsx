import React from "react";
import HeroImage from "../../assets/HeroImage.png";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="flex items-center px-[150px]">
      <div className="flex items-center px-[150px]">
        <div className="">
          <h2 className="border-l-4 border-l-red-600 pl-1 font-bold text-xl">ROV & Robotics</h2>
          <p>
            Diver observation, diverless UWILD, and general inspection of
            offshore platforms, pipelines, and FPSOs are all major uses for our
            ROVs.
          </p>
          <div className="flex bg-blue-800 rounded-sm w-32  justify-center items-center text-white mt-2">
            <Link to="/services" className="px-[8px] py-1 ">
              Learn more
            </Link>
            <HiChevronRight />
          </div>
        <img src={HeroImage} alt="Oil Rig" className="w-1/2 " />
        </div>
      </div>
    </section>
  );
};

export default Home;
