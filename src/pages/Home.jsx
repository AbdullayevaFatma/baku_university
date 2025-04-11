import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import StudentReview from "../components/StudentReview";
import Info from "../components/Info";
import MoreAbout from "../components/MoreAbout";

const Home = () => {
  return (
    <>
      {" "}
      <Hero />
      <Stats />
      <Info />
      <MoreAbout />
      <StudentReview />
    </>
  );
};

export default Home;
