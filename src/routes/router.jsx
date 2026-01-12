import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import { Profiler } from "react";
import Profile from "../pages/Profile";
import SkillDetails from "../pages/SkillDetails";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/skillswapData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/skill-details/:id",
        element: (
          <PrivateRoute>
            <SkillDetails></SkillDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/skillswapData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
