import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { adminMenus } from "../utils/MenuItems";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index); 
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <button
        className="absolute top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-full md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 to-gray-700 text-white transform transition-transform duration-500 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64`}
      >
        <h2 className="text-2xl font-bold text-center p-4 border-b border-gray-600">
          Sidebar
        </h2>
        <ul className="mt-6 space-y-4">
          {adminMenus.map((item, index) => (
            <li key={index} className="px-4 py-2">
              <div
                className="flex items-center justify-between cursor-pointer hover:bg-gray-600 rounded-lg px-2 py-2 transition duration-300"
                onClick={() => item.subMenu && toggleSubMenu(index)}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-lg">{item.name}</span>
                </div>
                {item.subMenu && (
                  <span>
                    {activeSubMenu === index ? (
                      <FaChevronUp size={16} />
                    ) : (
                      <FaChevronDown size={16} />
                    )}
                  </span>
                )}
              </div>

              {item.subMenu && activeSubMenu === index && (
                <ul className="mt-2 ml-6 space-y-2 transition-all duration-300 ease-in-out">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="hover:bg-gray-500 rounded-lg px-2 py-2 transition duration-300"
                    >
                      <a
                        href={subItem.link}
                        className="block text-sm text-gray-300 hover:text-white"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out md:ml-64 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="p-6">
          {/* <button
            onClick={toggleSidebar}
            className="hidden md:block bg-gray-800 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            {isOpen ? "Hide Sidebar" : "Show Sidebar"}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
