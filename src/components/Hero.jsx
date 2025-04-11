import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-[40vh] md:h-[60vh] hero text-center flex justify-center items-end pb-4">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-white p-8 flex flex-col justify-center items-center space-y-4">
        <p className="text-2xl  font-extrabold">
          A Place for Innovators, Thinkers, and Changemakers.
        </p>
        <p className="text-lg font-semibold">
          Unlock a World of Opportunities with Our Innovative Academic Programs.
        </p>
        <button
          onClick={() => navigate("/programs")}
          className="px-6 py-2 bg-[#E77C22] text-white font-bold rounded-md hover:bg-[#F08A34] transition duration-500 cursor-pointer"
        >
          FIND YOUR PROGRAM
        </button>
      </div>
    </section>
  );
};

export default Hero;
