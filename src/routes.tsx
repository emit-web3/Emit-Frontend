import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home/Home";
import NormalPage from "./layouts/NormalPage";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Features from "./components/Features/Features";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";

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
    ],
  },
]);
