import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const TopRatedInstructors = ({ data }) => {
  const [topRatedIns, setTopRatedIns] = useState([]);

  useEffect(() => {
    const topRated = data.filter((ins) => ins.rating >= 4.8);
    setTopRatedIns(topRated);
  }, [data]);

  return (
    <div className="my-20">
      <h2 className="text-center text-3xl font-bold mb-10">
        Top Rated Instructors
      </h2>

      <div className="flex justify-between gap-5">
        {topRatedIns.map((ins) => (
          <div
            key={ins.id}
            className="transform transition duration-300 hover:scale-105 hover:shadow-x rounded-2xl"
          >
            <div className="card rounded-2xl h-80 bg-base-100 shadow-sm">
              <figure className="px-10 pt-10 bg-linear-to-b from-[#F7E64A] via-[#A6D93B] to-[#2DB84D] overflow-hidden">
                <img
                  src={ins.providerImage}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body rounded-2xl bg-[#EFF1FA]">
                <h2 className="card-title text-xl">{ins.providerName}</h2>
                <p>{ins.category} Expert</p>

                <div className="flex items-center gap-1 text-orange-400">
                  {Array.from({ length: ins.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}

                  <span className="ml-0.5 text-gray-600">{ins.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedInstructors;
