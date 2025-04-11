import React from "react";
import jcortez from "../assets/jcortez.jpg"
import stran from "../assets/stran.jpg"
import mreid from "../assets/mreid.jpg"
import ewinters from "../assets/ewinters.jpg"
import ahassan from "../assets/ahassan.jpg"
import ngreene from "../assets/ngreene.jpg"

const academics = [
  {
    name: "Prof. Marcus Reid",
    title: "Associate Professor of Accounting",
    contact: "Auditing, Financial Reporting, and Corporate Compliance",
    phone: "312-555-8432",
    email: "mreid@university.edu",
    image: mreid,
  },
  {
    name: "Prof. Sophia Tran",
    title: "Chair of Finance Department",
    contact: "Investment Strategies, Risk Management, and Financial Planning",
    phone: "312-555-9012",
    email: "stran@university.edu",
    image: stran,
  },
  {
    name: "Dr. Julian Cortez",
    title: "Lecturer in Microeconomics",
    contact: "Consumer Behavior, Market Structures, and Game Theory",
    phone: "312-555-6734",
    email: "jcortez@university.edu",
    image: jcortez,
  },
  {
    name: "Dr. Natalie Greene",
    title: "Senior Lecturer in Accounting",
    contact: "Taxation, Forensic Accounting, and Managerial Accounting",
    phone: "312-555-7745",
    email: "ngreene@university.edu",
    image: ngreene,
  },
  {
    name: "Dr. Amir Hassan",
    title: "Assistant Professor of Finance",
    contact: "Corporate Finance, Derivatives, and Portfolio Management",
    phone: "312-555-9981",
    email: "ahassan@university.edu",
    image: ahassan,
  },
  {
    name: "TA. Eleanor Winters",
    title: "Teaching Assistant",
    contact: "Economic Policy, Global Markets, and Behavioral Economics",
    phone: "312-555-1287",
    email: "ewinters@university.edu",
    image: ewinters,
  },
];


const Academics = () => {
  return (
    <div className="bg-white py-12 px-6 max-w-5xl mx-auto">
      {academics.map((person, index) => (
        <div key={index} className="border-b py-6 flex flex-col sm:flex-row gap-6">
          <img
            src={person.image}
            alt={person.name}
            className="w-32 h-32 object-cover rounded-md shadow-md"
          />
          <div>
            <h2 className="text-xl font-bold">{person.name}</h2>
            <p className="text-lg mt-1">{person.title}</p>
            <p className="text-lg mt-1">
              Contact for: {person.contact}
            </p>
            <p className="text-lg mt-1">{person.phone}</p>
            <p className="text-lg mt-1 font-semibold underline">
              <a href={`mailto:${person.email}`} >{person.email}</a>
            </p>
            <button className="mt-4 px-4 py-1 border border-[#E77C22] text-[#E77C22] font-semibold hover:bg-[#E77C22] hover:text-white transition rounded-sm cursor-pointer text-xl">
              About Me
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Academics;
