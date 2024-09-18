import React, { useState } from "react";// Heroicons for icons
import { Menu, Transition } from "@headlessui/react"; // Headless UI for menu behavior
import { FaMessage } from "react-icons/fa6";

export default function Message() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Message 1",
      sender: "Alice",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      name: "Message 2",
      sender: "Bob",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      name: "Message 3",
      sender: "Charlie",
      image: "https://via.placeholder.com/40",
    },
  ]);

  const handleMenuItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {messages.length > 0 && (
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="cursor-pointer">
            {/* Icon with badge */}
            <div className="relative">
              <FaMessage size={24} />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-white "></span>
            </div>
          </Menu.Button>
          {/* Menu transition */}
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
                <p className="text-sm font-semibold">Messages</p>
                <p className="text-xs text-gray-500">You have 6 messages</p>
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
                          alt={message.sender}
                          className="h-8 w-8 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-700">
                            {`ID: ${message.id} - ${message.name}`}
                          </p>
                          <p className="text-xs text-gray-500">{`From: ${message.sender}`}</p>
                        </div>
                      </button>
                    )}
                  </Menu.Item>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-500">
                  No messages
                </div>
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </div>
  );
}
