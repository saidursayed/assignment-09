import React from "react";

const HowItWorks = () => {
  return (
    <div className="my-5 md:my-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-5 md:mb-10">
        How It Works
      </h2>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className="rounded-2xl bg-linear-to-br from-slate-50 to-blue-50 p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
            <span className="text-3xl">🎯</span>
          </div>

          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Browse Skills
          </h3>

          <p className="text-gray-600">
            Discover in-demand skills from verified experts across multiple
            categories.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className="rounded-2xl bg-linear-to-br from-slate-50 to-blue-50 p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
            <span className="text-3xl">⭐</span>
          </div>

          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Top-Rated Experts
          </h3>

          <p className="text-gray-600">
            Learn from skilled professionals with proven experience and reviews.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className="rounded-2xl bg-linear-to-br from-slate-50 to-blue-50 p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
            <span className="text-3xl">🚀</span>
          </div>

          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Start Learning
          </h3>

          <p className="text-gray-600">
            Attend live or offline classes and build real-world skills step by
            step.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className="rounded-2xl bg-linear-to-br from-slate-50 to-blue-50 p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
            <span className="text-3xl">🏆</span>
          </div>

          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Achieve Your Goals
          </h3>

          <p className="text-gray-600">
            Gain practical skills that help you grow personally and
            professionally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
