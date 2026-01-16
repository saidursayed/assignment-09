import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 my-5 md:my-10">
      <div className="text-center p-5 md:p-6 bg-white rounded-xl shadow-lg max-w-md">
        <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Oops! Page not found.</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block text-sm md:text-base px-4 md:px-6 py-2 md:py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
