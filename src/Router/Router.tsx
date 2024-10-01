import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import LogInPage from "../Pages/LoginPage/LogInPage";
import RegisterPage from "../Pages/RegisterPage/Register";

const router = createBrowserRouter([
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
]);

export default router;