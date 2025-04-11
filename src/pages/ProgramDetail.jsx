import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import programs from "../helpers/data";

const ProgramDetail = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);

  const program = programs.find((p) => p.id === Number(id));

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!program) return <p className="p-8 text-xl">Program not found.</p>;

  return (
    <div className="px-8 py-6 mb-10">
      <h1 className="text-5xl text-[#E77C22] font-semibold mt-6">
        {program.title}
      </h1>
      <hr
        className={`border-t-4 rounded-4xl my-2 mb-6 transition-all duration-2000 ease-in-out ${
          loaded ? "w-1/4" : "w-0"
        } border-[#024C97]`}
      />
      <p className="leading-8 text-[18px]">{program.details}</p>
      <div className="flex justify-end mt-6">
        <button className="bg-[#024C97] text-white py-2 px-4 rounded-lg font-bold cursor-pointer hover:bg-[#D66A1C] focus:outline-none">
          Apply
        </button>
      </div>
    </div>
  );
};

export default ProgramDetail;
