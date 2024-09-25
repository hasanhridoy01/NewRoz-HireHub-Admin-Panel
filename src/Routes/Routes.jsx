import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Dashboard from "../pages/Dashboard/Dashboard";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import PrivateRoutes from "./PrivateRoutes";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />,
      },
    ],
  },
]);
