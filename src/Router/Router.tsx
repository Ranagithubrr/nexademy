import LandingPage from "../Pages/LandingPage/LandingPage";
import LogInPage from "../Pages/LoginPage/LogInPage";
import RegisterPage from "../Pages/RegisterPage/Register";

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
];

export default routes;
