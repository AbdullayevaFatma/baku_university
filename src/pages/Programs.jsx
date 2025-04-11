import React from "react";
import { useNavigate } from "react-router-dom";
import programs from "../helpers/data";

export default function Programs() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen space-y-12">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-extrabold  bg-clip-text text-[#E77C22] mb-3">
          Choose your career path at the highest level.
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our diverse programs built to shape future leaders and global
          innovators.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-3xl shadow-lg transform hover:scale-[1.03] transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-[#024C97] to-[#E77C22]"></div>
            <div className="p-6 flex flex-col h-full justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#024C97] mb-2">
                  {program.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  {program.description}
                </p>
              </div>
              <button
                onClick={() => navigate("/programs/" + program.id)}
                className="mt-auto py-2 px-4 bg-[#E77C22] text-white rounded-lg font-semibold hover:bg-[#F08A34] transition cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
