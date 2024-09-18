import { useState } from "react";
import { Menu, Transition } from "@headlessui/react"; // For menu dropdown
import { FiSettings } from "react-icons/fi";

const SettingsMenu = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  return (
    <div className="relative">
      {/* Rotating Icon Button */}
      <button
        onClick={handleClick}
        className={`p-2 rounded-full focus:outline-none ${
          isRotating ? "" : "animate-spin"
        }`}
      > <FiSettings size={26} /> </button>

      {/* Menu */}
      <Menu as="div" className="relative">
        <Transition
          show={isRotating}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 text-sm w-full text-left hover:text-cyan-300`}
                    onClick={handleClick}
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
                    } block px-4 py-2 text-sm w-full text-left hover:text-cyan-300`}
                    onClick={handleClick}
                  >
                    My Account
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 text-sm w-full text-left hover:text-cyan-300`}
                    onClick={handleClick}
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

export default SettingsMenu;
