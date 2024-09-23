import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Dashboard from "../pages/Dashboard/Dashboard";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: '/SingIn',
        element: <SignIn />
      },
      {
        path: '/SignUp',
        element: <SignUp />
      }
    ],
  },
]);
