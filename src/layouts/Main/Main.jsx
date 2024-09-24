import { Outlet } from "react-router-dom";
import "./Main.css";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={true} />
      <Outlet />
    </div>
  );
};

export default Main;
