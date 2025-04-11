import React from "react";

const Info = () => {
  return (
    <section className="relative flex flex-col py-8 items-center justify-center  space-y-6 min-h-[30vh] inset-0 info-bg overflow-hidden text-white text-center px-4">
      <div className="absolute inset-0 bg-[#E77C22] opacity-80 z-0 h-full"></div>

      <h1 className="text-2xl sm:text-3xl font-extrabold z-10 pl-8 text-[#024C97]">
        Building a Community Where Diversity Meets Academic Excellence
      </h1>
      <p className="max-w-4xl leading-8 z-10 pl-8 text-[#024C97] font-semibold">
        We believe that education flourishes when students contribute their
        diverse perspectives. Our university fosters an inclusive environment
        where every individual is valued. We are dedicated to cultivating a
        community that promotes collaboration, curiosity, and academic
        excellence. Our mission is to create a space where all students can
        thrive and reach their full potential.
      </p>
    </section>
  );
};

export default Info;
