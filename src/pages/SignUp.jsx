import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { updateUser, setUser, createUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });
  };

  const handleGoogleSignIn = () => {
    console.log("sing in with google");
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Google Sign In Successful");
        navigate("/");
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
          Create an account
        </h2>
        {/* <p className="text-gray-500 text-center font-medium mt-2 text-sm ">
          Welcome back! Please enter your details.
        </p> */}
        <form onSubmit={handleSignUp} className="card-body py-0 mt-4">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label text-base text-gray-600">Name</label>
            <input
              name="name"
              type="text"
              className="input outline-secondary focus:border-0"
              placeholder="Enter your name"
              required
            />
            {/* Photo URL */}
            <label className="label text-base text-gray-600">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input outline-secondary focus:border-0"
              placeholder="Enter your photo URL"
              required
            />
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
                placeholder="Create a password"
                required
              />
              <button
                onClick={handleTogglePasswordShow}
                className="absolute top-1 right-1 btn btn-sm"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              className="btn bg-[#7F56D9] hover:bg-secondary text-white text-base mt-2"
            >
              Sign Up
            </button>
          </fieldset>
        </form>
        <div className="card-body py-0">
          <button onClick={handleGoogleSignIn} className="btn mt-2 text-gray-600">
            <FcGoogle size={22} />
            Continue With Google
          </button>

          <p className="font-semibold text-center text-gray-600 text-xs pt-5">
            Already have an account?{" "}
            <Link className="text-secondary" to="/login">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
