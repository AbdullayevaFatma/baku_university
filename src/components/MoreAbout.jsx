import React from "react";

export default function MoreAbout() {
  return (
    <div className="bg-gray-100 text-white px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="max-w-xl text-sm md:text-base leading-relaxed text-gray-700">
        <p>
          <strong className="text-[#E77C22]">Baku University</strong> proudly
          welcomes students from all corners of the globe, fostering a vibrant,
          multicultural community that celebrates diversity in every form.
          University offers an inclusive learning environment where students of
          all backgrounds—regardless of nationality, culture, religion, or
          identity—can thrive. At Baku University, we believe that diversity
          fuels innovation, and we are dedicated to supporting a campus culture
          rooted in equality, openness, and opportunity for all. Our policies
          reflect this vision, ensuring fair treatment and access for every
          student, faculty, and staff member. Learn more about our global
          community and our commitment to inclusive education in Baku
          University's Statement on Diversity and Inclusion.
        </p>
        <p className="mt-2">
          Baku University adheres to all applicable state and federal equal
          opportunity laws and regulations.{" "}
          <a className="text-[#E77C22] hover:underline font-semibold">
            See Baku University's Policy on Non-Discrimination
          </a>
          .
        </p>
      </div>
      <div className="text-center md:text-right">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#E77C22]">
          Learn more about what makes Baku University unique
        </h2>
        <button className="bg-[#024C97] hover:bg-[#0366C0] text-white font-semibold px-6 py-3 rounded-md inline-flex items-center gap-2 transition cursor-pointer">
          Key Baku Facts
        </button>
      </div>
    </div>
  );
}
