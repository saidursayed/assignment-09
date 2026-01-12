import React, { use } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const { ForgetPassword } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const prefilledEmail = location.state?.email || "";

  const handleResetPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    ForgetPassword(email)
      .then(() => {
        toast.success("Password reset link sent! Please check your email.");
        window.open("https://mail.google.com/mail/u/0/", "_blank");
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-3 py-6">
        <h2 className="font-semibold text-3xl text-center">Forgot password</h2>
        <p className="text-gray-500 text-center font-medium mt-2 text-sm ">
          Enter your email address and we’ll send you a password reset link.
        </p>
        <form onSubmit={handleResetPassword} className="card-body py-0 mt-4">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label text-base text-gray-600">Email</label>
            <input
              name="email"
              type="email"
              className="input outline-secondary focus:border-0"
              placeholder="Enter your email"
              defaultValue={prefilledEmail}
              required
            />
            <button
              type="submit"
              className="btn bg-[#7F56D9] hover:bg-secondary text-white text-base mt-2"
            >
              Reset Password
            </button>
          </fieldset>
        </form>
        <div className="card-body py-0">
          <Link
            className="hover:underline font-semibold text-gray-600 text-center text-xs pt-5 flex justify-center items-center gap-1.5"
            to="/login"
          >
            <FaArrowLeft className="text-gray-400" /> Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
