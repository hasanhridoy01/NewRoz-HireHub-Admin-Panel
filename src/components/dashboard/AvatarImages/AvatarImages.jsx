import { useState } from "react";
import { Menu, Transition } from "@headlessui/react"; // For menu dropdown
import { Fragment } from "react"; // For Transition
import img from "../../../assets/Images/avatar.png";

const AvatarImages = () => {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = () => {
    setAnchorEl(!anchorEl);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleLogout = () => {
    // Add your logout logic here
    handleClose();
  };

  const handleProfile = () => {
    // Add your profile navigation logic here
    handleClose();
  };

  return (
    <div className="">
      {/* Avatar with Badge */}
      <div className="relative cursor-pointer">
        <img
          alt="Avatar"
          src={img} // Replace with the actual path to the generated image
          className="w-10 h-10 rounded-full"
          onClick={handleClick}
        />

        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-ping"></span>
        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </div>

      {/* Dropdown Menu */}
      <Menu as="div" className="relative">
        <Transition
          // show={anchorEl}
          // as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none z-10">
            <div className="px-4 py-3">
              <p className="text-sm font-semibold text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">User Role</p>
            </div>
            <div className="border-t border-gray-200">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block w-full px-4 py-2 text-sm`}
                    onClick={handleProfile}
                  >
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block w-full px-4 py-2 text-sm`}
                    onClick={handleProfile}
                  >
                    Edit Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block w-full px-4 py-2 text-sm`}
                    onClick={handleProfile}
                  >
                    Index
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block w-full px-4 py-2 text-sm`}
                    onClick={handleProfile}
                  >
                    Message
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block w-full px-4 py-2 text-sm`}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default AvatarImages;
