import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SkillDetailsCard = ({ skill }) => {
  return (
    <div className="my-20 grid grid-cols-12 gap-10 items-start">
      <div className="col-span-8">
        {/* Skill Card */}
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col">
          {/* Skill Image */}
          <div className="relative w-full">
            <img src={skill.image} alt={skill.skillName} className="w-full" />
          </div>

          {/* Skill Info */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              {/* Title */}
              <h1 className="text-3xl font-bold mb-2">{skill.skillName}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: Math.floor(skill.rating) }).map(
                  (_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  )
                )}
                <span className="text-gray-600 font-medium">
                  {skill.rating}
                </span>
                <span className="text-gray-400">
                  ({skill.slotsAvailable} slots)
                </span>
              </div>

              {/* Price */}
              <p className="text-2xl font-semibold text-[#4A3AFF] mb-4">
                ${skill.price}
              </p>

              {/* Description */}
              <p className="text-gray-700 font-medium mb-6">
                {skill.description}
              </p>
            </div>

            {/* Provider Info */}
            <div className="mb-6">
              <div className="flex items-center gap-1">
                <h2 className="text-lg font-semibold">Instructor:</h2>
                <p className="text-lg font-semibold text-gray-800">
                  {skill.providerName}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <h2 className="font-semibold">Contact:</h2>
                <p className="text-base text-gray-800">{skill.providerEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#4A3AFF] text-white font-semibold py-2 rounded-md hover:bg-[#3728d9] transition-colors duration-300"
            >
              Book Session
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-3">
            By booking you agree to contact the provider for scheduling and
            details. (This is a demo — no real payment processed.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillDetailsCard;
