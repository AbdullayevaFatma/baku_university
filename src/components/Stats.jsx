import React, { useEffect, useState } from "react";

const numbersBy = [
  { count: 23344, title: "Students from Around the World" },
  { count: 1238, title: "Academicians and Researchers" },
  { count: 78222, title: "International Publications" },
];

const Stats = () => {
  const [counts, setCounts] = useState(
    numbersBy.map((item) => ({ ...item, currentCount: 0 })),
  );

  useEffect(() => {
    const incrementCounters = () => {
      const updatedCounts = numbersBy.map((item, index) => {
        let start = counts[index]?.currentCount || 0;
        const end = item.count;

        if (start === end) return item;

        let incrementTime = 20;
        let step = end / 100;

        const timer = setInterval(() => {
          start += step;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = {
              ...newCounts[index],
              currentCount: Math.floor(start),
            };
            return newCounts;
          });
        }, incrementTime);
      });
    };

    incrementCounters();
  }, []);

  return (
    <div className="text-center flex flex-col justify-between gap-6 mx-auto w-[80vw] my-6 md:flex-row">
      {counts.map((item) => (
        <div key={item.title} className="">
          <h2 className="text-5xl font-extrabold text-[#024C97] relative inline-block">
            {item.currentCount}
          </h2>
          <p className="mt-4 text-xl text-black max-w-xs mx-auto">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
