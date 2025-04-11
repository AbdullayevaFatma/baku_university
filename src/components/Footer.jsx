import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { IoIosSchool } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="flex flex-col px-8 py-6 space-y-4">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          {" "}
          <IoIosSchool style={{ color: "#E77C22", fontSize: "40px" }} />
          <p className="text-xl tracking-wider">BAKU UNIVERSITY</p>
        </div>

        <div className="hidden lg:flex space-x-4 items-center">
          <p>Get Baku University News Delivered to Your Inbox</p>
          <button className="bg-[#E77C22] text-white py-2 px-4 rounded-lg font-bold cursor-pointer hover:bg-[#F08A34] focus:outline-none ">
            Sign Up for Emails
          </button>
        </div>
      </div>
      <hr className="border-t-2 border-[#E77C22]" />
      <div className="flex-col  items-center text-center gap-6 flex md:flex-row md:justify-around">
        <ul className="list-none leading-8 ">
          <li className="cursor-pointer">Hasan Aliyev St. 1</li>
          <li className="cursor-pointer">Baku, Azerbaijan</li>
          <li className="cursor-pointer">+994 (12) 321 55 55/56</li>
        </ul>
        <ul className="list-none leading-8">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Programs</li>
          <li className="cursor-pointer">Academic Staff</li>
        </ul>
        <ul className="list-none leading-8">
          <li className="cursor-pointer">Terms of use</li>
          <li className="cursor-pointer">Privacy policy</li>
          <li className="cursor-pointer">Cookies Settings</li>
        </ul>
      </div>
      <hr className="border-t-2 border-[#E77C22]" />
      <div className="flex flex-col gap-4 text-center md:flex-row justify-between">
        <p>&copy; 2025 Baku University, All Rights Reserved.</p>
        <div className="flex space-x-4 justify-center">
          <FaInstagram className="icons" />
          <CiFacebook className="icons" />
          <CiTwitter className="icons" />
          <CiLinkedin className="icons" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
