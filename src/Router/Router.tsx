import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import LogInPage from "../Pages/LoginPage/LogInPage";
import RegisterPage from "../Pages/RegisterPage/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from '../Components/Dashboard/Dashboard'


const routes = [
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/login",
        element: <LogInPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children:[
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "settings",
                element: <span>settings</span>
            },
        ]
    },

];

export default routes;