import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Dashboard from "../pages/Dashboard/Dashboard";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
