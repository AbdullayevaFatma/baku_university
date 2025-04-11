import React, { useEffect, useState } from "react";
import universityview from "../assets/universityview.jpg";
import students from "../assets/students.jpg";

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-28">
        <div className="relative flex flex-col md:flex-row items-center md:items-start min-h-[280px]">
          <div
            className={`w-full md:w-1/2 relative z-10 md:-right-6 md:-top-10 shadow-xl rounded-lg overflow-hidden
            transition-all duration-2000 ease-in-out
            ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }
          `}
          >
            <img
              src={universityview}
              alt="University View"
              className="w-full h-[280px] object-cover opacity-90 hover:opacity-100 cursor-pointer"
            />
          </div>

          <div
            className={`w-full md:w-1/2 bg-gray-100 p-6 md:p-10 rounded-md shadow-md z-0 mt-6 md:mt-0 md:top-20 min-h-[280px]
            transition-all duration-1000 ease-in-out
            ${
              animate
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }
          `}
          >
            <div className="border-t-3 border-orange-300 w-20 mb-3 rounded-2xl"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              A Legacy of Excellence Since 1970
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Founded in 1970, Baku University has a long-standing tradition of
              academic excellence and innovation. Over the decades, it has
              evolved into a leading institution in the region, attracting
              students from across the globe. The university is known for its
              diverse academic programs, dedicated faculty, and commitment to
              shaping future leaders.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row-reverse items-center md:items-start min-h-[280px]">
          <div
            className={`w-full md:w-1/2 relative z-10 shadow-xl rounded-lg overflow-hidden
            transition-all duration-1000 ease-in-out
            ${
              animate
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }
          `}
          >
            <img
              src={students}
              alt="Students photo"
              className="w-full h-[280px] object-cover  opacity-90 hover:opacity-100 cursor-pointer"
            />
          </div>

          <div
            className={`w-full md:w-1/2 bg-gray-100 p-6 md:p-10 rounded-md shadow-md z-0 mt-6 min-h-[280px] md:-right-8 md:-top-12
            transition-all duration-1000 ease-in-out
            ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }
          `}
          >
            <div className="border-t-3 border-orange-300 w-20 mb-3 rounded-2xl"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              Legacy of Leadership and Learning
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Baku University fostered a dynamic academic environment where
              students from around the world engaged in meaningful learning. The
              university shaped generations of ethical leaders known for their
              vision, integrity, and dedication to service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
