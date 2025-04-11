import React from "react";

export default function BookCard({ title, author }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xs h-54 flex flex-col justify-between hover:shadow-lg transition">
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold text-[#024C97] mb-2 line-clamp-2 text-center">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-1">by {author}</p>
      </div>
      <button className="inline-block bg-[#024C97] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0366C0] transition  cursor-pointer self-center z-20">
        Download PDF
      </button>
    </div>
  );
}
