import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home/Home";
import NormalPage from "./layouts/NormalPage";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Features from "./components/Features/Features";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Profile from "./components/Profile/Profile";
import Presenters from "./components/Presenters/Presenters";
import NotFound from "./components/NotFound/NotFound"; 

export const router = createBrowserRouter([
  {
    element: <NormalPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/presenters",
        element: <Presenters />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/sign-in",
            element: <SignIn />,
          },
          {
            path: "/sign-up",
            element: <SignUp />,
          },
          {
            path: "/forget-password",
            element: <ForgetPassword />,
          },
        ],
      },
      {
        path: "*", 
        element: <NotFound />, 
      },
    ],
  },
]);
