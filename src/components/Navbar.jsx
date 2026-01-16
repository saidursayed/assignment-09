import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/SkillSwap.png";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("You Logged Out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const links = (
    <>
      <li className="text-lg font-medium">
        <NavLink to="/">
          <AiOutlineHome />
          Home
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink to="/my-profile">
          <CgProfile />
          My Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="navbar p-0 md:w-11/12 mx-auto px-6 md:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn p-2.5 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <img className="md:max-w-44" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end ">
          {user && (
            <Link to="/my-profile">
              <div className="relative">
                <img
                  className="w-10 h-10 rounded-full mr-4 peer cursor-pointer"
                  src={user.photoURL}
                  alt=""
                />
                <div className="absolute left-0 mt-4 w-36 block bg-white shadow-lg rounded-md opacity-0 peer-hover:opacity-100 transition-opacity duration-300">
                  <p className="px-4 py-2 text-sm text-blue-600">
                    {user.displayName}
                  </p>
                </div>
              </div>
            </Link>
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn bg-primary text-white border-[1.5px] border-primary hover:bg-white hover:text-primary px-5"
            >
              LogOut
            </button>
          ) : (
            <div className="flex gap-1 md:gap-2">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `btn btn-sm md:btn-md border-[1.5px] border-primary md:px-5 ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-white text-primary hover:bg-primary hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `btn btn-sm md:btn-md border-[1.5px] border-primary md:px-5 ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-white text-primary hover:bg-primary hover:text-white"
                  }`
                }
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
