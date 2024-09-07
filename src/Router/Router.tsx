import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import LogInPage from "../Pages/LoginPage/LogInPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/login",
        element: <LogInPage />,
    },
]);

export default router;