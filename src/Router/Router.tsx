import LandingPage from "../Pages/LandingPage/LandingPage";
import LogInPage from "../Pages/LoginPage/LogInPage";
import RegisterPage from "../Pages/RegisterPage/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from '../Components/Dashboard/Dashboard'
import ReactQuery from './../Components/ReactQuery/ReactQuery';


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
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "settings",
                element: <span>settings</span>
            },
            {
                path: "react-query",
                element: <ReactQuery />
            },
        ]
    },

];

export default routes;