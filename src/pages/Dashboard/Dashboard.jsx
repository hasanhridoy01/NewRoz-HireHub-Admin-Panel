import { useState } from "react"; // Tailwind-compatible icons
import AvatarImages from "../../components/dashboard/AvatarImages/AvatarImages";
import SettingsMenu from "../../components/dashboard/Settings/Settings";
import { MdDashboard } from "react-icons/md";
import { GrResume } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RiMenuFold3Line2 } from "react-icons/ri";
import { RiMenuFold4Line } from "react-icons/ri";
import DashboardContent from "../DashboardContent/DashboardContent";

const iconMap = {
  Dashboard: <MdDashboard size={20} />,
  "See Resume": <GrResume size={20} />,
  "Change password": <RiLockPasswordLine size={20} />,
  "About Us": <TbArrowRoundaboutRight size={20} />,
  Logout: <RiLogoutBoxRLine size={20} />,
};

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // Flag section
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("FR");

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSelect = (countryCode) => {
    setSelectedCountry(countryCode);
    handleClose();
  };

  // Render content based on selectedTab
  const renderContent = () => {
    switch (selectedTab) {
      case "Dashboard":
        return <DashboardContent />;
      case "See Resume":
        return <DashboardContent />;
      case "Change password":
        return <DashboardContent />;
      case "About Us":
        return <DashboardContent />;
      default:
        return <p>Select a tab</p>;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`bg-white transition-all duration-300 ${
          open ? "w-96" : "w-20"
        } h-screen`}
      >
        {/* Drawer header */}
        {open ? (
          <div className="flex items-center justify-start gap-6 p-4">
            <p className="text-gray-500 text-2xl italic ml-1">HireHub</p>
          </div>
        ) : (
          ""
        )}

        {/* List */}
        <ul className="p-4">
          {[
            "Dashboard",
            "See Resume",
            "Change password",
            "About Us",
            "Logout",
          ].map((text) => (
            <li key={text} className="mb-4">
              <button
                onClick={() => setSelectedTab(text)}
                className={`flex items-center ${
                  open ? "justify-start" : "justify-center"
                } w-full text-left p-2 rounded ${
                  selectedTab === text
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                <span className="w-8 h-8 flex justify-center items-center">
                  {iconMap[text]}
                </span>
                {/* Conditionally hide the text when the sidebar is collapsed */}
                {open && <span className="ml-4 opacity-100">{text}</span>}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="p-0 bg-gray-100">
        <header className="flex justify-between items-center h-[61px] w-full bg-white">
          <div className="flex items-center justify-start h-[61px]">
            <button
              onClick={open ? handleDrawerClose : handleDrawerOpen}
              className="text-gray-500 border-2 p-2 animation-scale-up rounded-sm"
            >
              {open ? (
                <RiMenuFold3Line2 size={20} />
              ) : (
                <RiMenuFold4Line size={20} />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between gap-5 mr-5 h-[61px]">
            <AvatarImages />
            <SettingsMenu />
          </div>
        </header>

        {/* Page content */}
        <div className="p-10">{renderContent()}</div>
      </main>
    </div>
  );
};

export default Dashboard;
