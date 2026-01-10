import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { signIn, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
         navigate(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        // setError(errorCode);
      });
  };

  const handleGoogleSignIn = () => {
    // console.log("sing in with google");
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // alert("Google Sign In Successful");
        navigate(from);
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
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
          <button
            onClick={handleGoogleSignIn}
            className="btn mt-2 text-gray-600"
          >
            <FcGoogle size={22} />
            Continue With Google
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
