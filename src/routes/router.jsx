import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import { Profiler } from "react";
import Profile from "../pages/Profile";
import SkillDetails from "../pages/SkillDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch("/skillswapData.json")
            },
            {
                path: "/my-profile",
                element: <Profile></Profile>
            },
            {
                path: "/skill-details/:id",
                element: <SkillDetails></SkillDetails>,
                loader: () => fetch("/skillswapData.json")
            }
        ]
    }
]);

export default router;