import React from "react";
import {
  FaAward,
  FaBookOpen,
  FaChartLine,
  FaHandsHelping,
} from "react-icons/fa";

const LearnSkillswap = () => {
  return (
    <div className="my-20">
      <h2 className="text-center text-3xl font-bold mb-10">
        Why learn with Skillswap
      </h2>

      <div className="flex gap-5">
        <div
          className="rounded-2xl mb-16 bg-white p-8 text-center shadow-sm border-b-4 border-orange-500
       hover:shadow-lg"
        >
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
            <FaBookOpen className="text-3xl text-[#FF6B2E]"></FaBookOpen>
          </div>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            Interactive Learning
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            Hands-on projects, live sessions, and real-world examples ensure
            deeper understanding.
          </p>
        </div>

        <div
          className="rounded-2xl mt-16  bg-white p-8 text-center shadow-sm border-b-4 border-green-500
     hover:shadow-lg"
        >
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
            <FaAward className="text-3xl text-[#FF6B2E]"></FaAward>
          </div>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            Expert Guidance
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            Learn directly from industry professionals who share practical
            insights and best practices.
          </p>
        </div>

        <div
          className="rounded-2xl mb-16 bg-white p-8 text-center shadow-sm border-b-4 border-orange-500
     hover:shadow-lg"
        >
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
            <FaChartLine className="text-3xl text-[#FF6B2E]"></FaChartLine>
          </div>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            Career Advancement
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            Build job-ready skills that open doors to new roles, promotions, and
            freelance opportunities.
          </p>
        </div>

        <div
          className="rounded-2xl mt-16 bg-white p-8 text-center shadow-sm border-b-4 border-green-500
      hover:shadow-lg"
        >
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
            <FaHandsHelping className="text-3xl text-[#FF6B2E]"></FaHandsHelping>
          </div>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            Community Support
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            Join a supportive learning community to collaborate, share
            knowledge, and stay motivated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnSkillswap;
