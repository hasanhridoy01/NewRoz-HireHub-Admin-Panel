import { useState } from "react";
import AvatarImages from "../../components/dashboard/AvatarImages/AvatarImages";
import SettingsMenu from "../../components/dashboard/Settings/Settings";
import { MdDashboard } from "react-icons/md";
import { GrResume } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RiMenuFold3Line2, RiMenuFold4Line } from "react-icons/ri";
import DashboardContent from "../DashboardContent/DashboardContent";
import SeeResume from "../SeeResume/SeeResume";
import ChangePassword from "../ChangePassword/ChangePassword";
import About from "../About/About";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [key, setKey] = useState(0); // Add a key state to force re-render

  const handleDrawerToggle = () => setOpen(!open);

  const handleNavigate = () => {
    // Logic to navigate or reload, if necessary
  };

  const handleDashboardClick = () => {
    setSelectedTab("Dashboard");
    setKey((prevKey) => prevKey + 1); // Update key to trigger re-render
    handleNavigate();
  };

  const handleResumeClick = () => {
    setSelectedTab("See Resume");
    setKey((prevKey) => prevKey + 1); // Update key to trigger re-render
    handleNavigate();
  };

  const handleChangePasswordClick = () => {
    setSelectedTab("Change Password");
    setKey((prevKey) => prevKey + 1); // Update key to trigger re-render
    handleNavigate();
  };

  const renderContent = () => {
    if (selectedTab === "Dashboard") {
      return <DashboardContent key={key} />;
    } else if (selectedTab === "See Resume") {
      return <SeeResume key={key} />;
    } else if (selectedTab === "Change Password") {
      return <ChangePassword key={key} />;
    } else if (selectedTab === "About Us") {
      return <About key={key} />;
    }
    return <p>Select a tab</p>;
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`bg-white transition-all duration-300 ${
          open ? "w-80" : "w-20"
        } fixed left-0 top-0 z-50 h-full`}
      >
        {open && (
          <div className="flex items-center justify-start gap-6 p-4">
            <p className="text-gray-500 text-2xl italic ml-1">HireHub</p>
          </div>
        )}
        {/* List */}
        <ul className="p-4">
          <li className="mb-4">
            <button
              onClick={handleDashboardClick}
              className={`flex items-center ${
                open ? "justify-start" : "justify-center"
              } w-full text-left p-2 rounded ${
                selectedTab === "Dashboard"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <span className="w-8 h-8 flex justify-center items-center">
                <MdDashboard size={20} />
              </span>
              {open && <span className="ml-4">Dashboard</span>}
            </button>
          </li>

          <li className="mb-4">
            <button
              onClick={handleResumeClick}
              className={`flex items-center ${
                open ? "justify-start" : "justify-center"
              } w-full text-left p-2 rounded ${
                selectedTab === "See Resume"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <span className="w-8 h-8 flex justify-center items-center">
                <GrResume size={20} />
              </span>
              {open && <span className="ml-4">See Resume</span>}
            </button>
          </li>

          <li className="mb-4">
            <button
              onClick={handleChangePasswordClick}
              className={`flex items-center ${
                open ? "justify-start" : "justify-center"
              } w-full text-left p-2 rounded ${
                selectedTab === "Change Password"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <span className="w-8 h-8 flex justify-center items-center">
                <RiLockPasswordLine size={20} />
              </span>
              {open && <span className="ml-4">Change Password</span>}
            </button>
          </li>

          <li className="mb-4">
            <button
              onClick={() => setSelectedTab("About Us")}
              className={`flex items-center ${
                open ? "justify-start" : "justify-center"
              } w-full text-left p-2 rounded ${
                selectedTab === "About Us"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <span className="w-8 h-8 flex justify-center items-center">
                <TbArrowRoundaboutRight size={20} />
              </span>
              {open && <span className="ml-4">About Us</span>}
            </button>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main
        className={`flex-grow p-0 bg-gray-100 transition-all duration-300 ${
          open ? "ml-80" : "ml-20"
        }`}
      >
        <header
          className={`fixed top-0 left-0 right-0 z-40 flex justify-between items-center h-[61px] w-full bg-white transition-all duration-300 ${
            open ? "pl-80" : "pl-20"
          }`}
        >
          <button
            onClick={handleDrawerToggle}
            className="text-gray-500 border-2 p-2 rounded-sm"
          >
            {open ? (
              <RiMenuFold3Line2 size={20} />
            ) : (
              <RiMenuFold4Line size={20} />
            )}
          </button>
          <div className="flex items-center justify-between gap-5 mr-5">
            <AvatarImages />
            <SettingsMenu />
          </div>
        </header>
        <div className="p-10 pt-[61px]">{renderContent()}</div>
      </main>
    </div>
  );
};

export default Dashboard;
