import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoNotifications } from "react-icons/io5";

export default function Notifications() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      file: "Document1.pdf",
      time: "2023-07-07 10:30 AM",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      file: "Image2.png",
      time: "2023-07-07 11:00 AM",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      file: "Report3.docx",
      time: "2023-07-07 11:30 AM",
      image: "https://via.placeholder.com/40",
    },
  ]);

  const handleMenuItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      {messages.length > 0 && (
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="cursor-pointer">
            <div className="relative">
              <IoNotifications size={30} />
              <span className="absolute top-0 right-1 h-2 w-2 rounded-full bg-green-500 ring-2 ring-white"></span>
            </div>
          </Menu.Button>

          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
                <p className="text-sm font-semibold">Notifications</p>
                <p className="text-xs text-gray-500">
                  You have {messages.length} notifications
                </p>
              </div>

              {messages.length > 0 ? (
                messages.map((message, index) => (
                  <Menu.Item key={message.id}>
                    {({ active }) => (
                      <button
                        onClick={() => handleMenuItemClick(index)}
                        className={`flex items-center px-4 py-2 w-full text-left text-sm ${
                          active ? "bg-gray-200" : ""
                        } ${index === activeIndex ? "shadow-md" : ""}`}
                      >
                        <img
                          src={message.image}
                          alt={`Message ${message.id}`}
                          className="h-8 w-8 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-700">{`File: ${message.file}`}</p>
                          <p className="text-xs text-gray-500">{`Time: ${message.time}`}</p>
                        </div>
                      </button>
                    )}
                  </Menu.Item>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-500">
                  No notifications
                </div>
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </div>
  );
}
