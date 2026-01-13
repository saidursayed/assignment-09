import React from "react";

const HowItWorks = () => {
  return (
    <div className="my-20">
      <h2 className="text-center text-3xl font-bold mb-10">How It Works</h2>
      <div className=" flex gap-4">
        <div className="rounded-2xl bg-linear-to-br from-slate-50 to-blue-50 p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
            <span className="text-3xl">🎯</span>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Browse Skills
          </h3>

          {/* Description */}
          <p className="text-gray-600">
            Discover in-demand skills from verified experts across multiple
            categories.
          </p>
        </div>

        <div className="rounded-2xl bg-linear-to-br from-slate-50 to-blue-50 p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
            <span className="text-3xl">⭐</span>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Top-Rated Experts
          </h3>

          {/* Description */}
          <p className="text-gray-600">
            Learn from skilled professionals with proven experience and reviews.
          </p>
        </div>

        <div className="rounded-2xl bg-linear-to-br from-slate-50 to-blue-50 p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
            <span className="text-3xl">🚀</span>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Start Learning
          </h3>

          {/* Description */}
          <p className="text-gray-600">
            Attend live or offline classes and build real-world skills step by
            step.
          </p>
        </div>

        <div className="rounded-2xl bg-linear-to-br from-slate-50 to-blue-50 p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
            <span className="text-3xl">🏆</span>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Achieve Your Goals
          </h3>

          {/* Description */}
          <p className="text-gray-600">
           Gain practical skills that help you grow personally and professionally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
