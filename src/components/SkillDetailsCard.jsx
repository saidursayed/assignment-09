import React from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";

const SkillDetailsCard = ({ skill }) => {
  const handleBookSession = (e) => {
    e.preventDefault();
    const form = e.target;
    toast.success("Your session has been successfully booked.");
    form.reset();
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 lg:gap-7 md:items-start my-5 md:my-16">
      <div className="md:col-span-7 lg:col-span-8">
        <div className="bg-white shadow-2xl rounded-xl">
          <div className="relative w-full">
            <img src={skill.image} alt={skill.skillName} className="w-full" />
          </div>

          <div className="p-4 md:p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {skill.skillName}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-4">
                {Array.from({ length: Math.floor(skill.rating) }).map(
                  (_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  )
                )}
                <span className="text-gray-600 text-sm md:text-base font-medium">
                  {skill.rating}
                </span>
                <span className="text-gray-400 text-sm md:text-base">
                  ({skill.slotsAvailable} slots)
                </span>
              </div>

              <p className="text-xl md:text-2xl font-semibold text-[#4A3AFF] mb-2 md:mb-4">
                ${skill.price}
              </p>

              <p className="text-gray-700 text-sm md:text-base font-medium mb-3 md:mb-6">
                {skill.description}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-base md:text-lg font-semibold">
                  Category:
                </h2>
                <p className="text-base md:text-lg font-semibold text-gray-800">
                  {skill.category}
                </p>
              </div>

              <div className="flex items-center gap-1">
                <h2 className="text-base md:text-lg font-semibold">
                  Instructor:
                </h2>
                <p className="text-base md:text-lg font-semibold text-gray-800">
                  {skill.providerName}
                </p>
              </div>

              <div className="flex items-start md:items-center gap-1">
                <h2 className="text-sm md:text-base font-semibold">Contact:</h2>
                <p className="text-sm md:text-base break-all text-gray-800">
                  {skill.providerEmail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-5 lg:col-span-4">
        <div className="max-w-md mx-auto bg-white p-5 md:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl  font-bold mb-4">
            Book a Session
          </h2>
          <form
            onSubmit={handleBookSession}
            className="flex flex-col gap-2 md:gap-4"
          >
            <div>
              <label className=" mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your full name"
                className="w-full border text-sm md:text-base border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
                required
              />
            </div>

            <div>
              <label className="mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border text-sm md:text-base border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#4A3AFF] text-sm md:text-base text-white font-semibold py-2 rounded-md hover:bg-[#3728d9] transition-colors duration-300"
            >
              Book Session
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-3">
            By booking, you’ll be in touch with the instructor to arrange your
            session and get all necessary details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillDetailsCard;
