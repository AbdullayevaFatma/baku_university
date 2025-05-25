import React from "react";
import { books } from "../helpers/data";
import BookCard from "../components/BookCard";


const Library = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full min-h-[30vh] md:min-h-[45vh] relative overflow-hidden bg-gray-50">
        <div
          className="absolute inset-0 bg-cover bg-center library-img"
          style={{
            clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0 100%)",
          }}
        />
        <div
          style={{ clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0 100%)" }}
          className="absolute inset-0 bg-black/30 flex items-center justify-center"
        ></div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#E77C22] mb-14 tracking-wide drop-shadow-sm">
          Explore Knowledge, Discover Your Passion
        </h2>

        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden">

          {books.map((book, index) => (
            <div
              key={index}
              className={`group transform transition duration-500 hover:scale-[1.03]  hover:shadow-2xl hover:-translate-y-1 opacity-0 animate-fade-in`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="absolute inset-0 bg-gradient-to-t from-[#E77C22]/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>

                <BookCard {...book} className="w-full max-w-full overflow-hidden"/>

                <div className="absolute bottom-0 left-0 h-[2px] bg-[#024C97] group-hover:w-full w-0 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
