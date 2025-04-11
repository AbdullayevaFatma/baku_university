import React, { useContext, useState } from "react";
import { IoIosSchool } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { NavLink } from "react-router-dom";

const menu = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Programs", path: "/programs" },
  { title: "Academic Staff", path: "/academics" },
  { title: "Library", path: "/library" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { student, logOut } = useContext(AuthContext);

  const handleClick = () => {
    if (student?.email) {
      logOut();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-[#024C97] flex justify-between px-8 py-4 items-center text-white">
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <IoIosSchool style={{ color: "#E77C22", fontSize: "40px" }} />
        <span className="text-xl tracking-wider">BAKU UNIVERSITY</span>
      </div>
      <div className="hidden lg:flex space-x-6 items-center">
        {menu.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `text-[18px] transition duration-500 ${
                isActive
                  ? "text-[#E77C22] font-semibold"
                  : "text-white hover:text-[#F08A34]"
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <div className="relative group z-20">
        <button
          onClick={handleClick}
          className="bg-[#E77C22] text-white py-2 px-4 rounded-lg font-bold text-[18px] cursor-pointer hover:bg-[#F08A34] focus:outline-none transition"
        >
          {student?.email ? "Exit Library" : "Access Library"}
        </button>

        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-500">
          <div className="bg-white text-[#024C97] text-base px-3 py-2 w-max font-semibold rounded-full shadow-md relative">
            Baku University students only
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
