import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-3 py-6">
        <h2 className="font-semibold text-3xl text-center">
          Log in to your account
        </h2>
        <p className="text-gray-500 text-center font-medium mt-2 text-sm ">
          Welcome back! Please enter your details.
        </p>
        <form onSubmit={handleLogin} className="card-body py-0 mt-4">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label text-base text-gray-600">Email</label>
            <input
              name="email"
              type="email"
              className="input outline-secondary focus:border-0"
              placeholder="Enter your email"
              required
            />
            {/* password */}
            <label className="label text-base text-gray-600">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input outline-secondary focus:border-0"
                placeholder="Enter Password"
                required
              />
              <button
                onClick={handleTogglePasswordShow}
                className="absolute top-1 right-1 btn btn-sm"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div>
              <Link
                to="/forgot-password"
                className="text-secondary link link-hover font-semibold"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="btn bg-[#7F56D9] hover:bg-secondary text-white text-base mt-2"
            >
              Login
            </button>
          </fieldset>
        </form>
        <div className="card-body py-0">
          <button className="btn mt-2 text-base text-gray-600">
            <FcGoogle size={24} />
            Sign in With Google
          </button>

          <p className="font-semibold text-gray-600 text-center text-xs pt-5">
            Dont’t Have An Account ?{" "}
            <Link className="text-secondary" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
