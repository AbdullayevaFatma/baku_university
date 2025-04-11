import React from "react";
import portrait from "../assets/portrait.jpg";
import { TfiQuoteLeft } from "react-icons/tfi";
import { TfiQuoteRight } from "react-icons/tfi";

const StudentReview = () => {
  return (
    <div className="bg-[#024C97]  flex items-center justify-center py-4 ">
      <div className="flex flex-col lg:flex-row items-center bg-[#024C97] max-w-6xl w-full">
        <div className="relative w-full md:w-1/2 p-6">
          <TfiQuoteLeft className="top-2 left-2 absolute text-[#E77C22] text-4xl font-extrabold " />
          <img
            src={portrait}
            alt="portrait"
            className="rounded-xl object-cover w-full "
          />
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-xl p-8 relative">
          <p className="text-gray-800 text-lg leading-relaxed">
            At Baku University, I've had the opportunity to enhance my
            communication skills and develop the ability to work both
            independently and as part of a team. With the guidance of my
            professors, I've gained valuable practical experience, both within
            the university and through external opportunities. As a result, I'm
            growing into a more confident and effective leader.
          </p>
          <p className="text-[#E77C22] font-bold mt-4 text-right">- LEILA</p>
          <TfiQuoteRight className="-bottom-4 -right-2 absolute text-[#E77C22] text-4xl font-extrabold " />
        </div>
      </div>
    </div>
  );
};

export default StudentReview;
