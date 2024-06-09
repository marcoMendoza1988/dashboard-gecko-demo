import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaRoute, 
  FaBars, 
  FaTimes
} from 'react-icons/fa';
import AccesibilityTools from '../AccesibilityTools';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed h-screen p-4 ${isOpen ? 'w-64' : 'w-12'} bg-white transition-all duration-300 shadow-2xl`}>
      <div className="flex items-center justify-between">
        <h2 className={`text-xl text-[#e53935] font-normal ${!isOpen && 'hidden'}`}>{`<Gecko />`}</h2>
        <button onClick={toggleSidebar} className="md:hidden focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul className="mt-8">
        <li className={`mb-3`}>
          <NavLink
            to="/dashboard-gecko-demo"
            className={({ isActive }) =>
              `flex items-center md:justify-left space-x-2 py-2 rounded-lg ${isOpen ? 'pl-2' : 'pl-0'} ${
                isActive ? 'bg-[#e53935] text-white' : 'text-black hover:text-gray-400'
              }`
            }
          >
            <FaTachometerAlt />
            {isOpen && <span>Dashboard</span>}
          </NavLink>
        </li>
        <li className={`mb-3`}>
          <NavLink
            to="/features"
            className={({ isActive }) =>
              `flex items-center md:justify-left space-x-2 py-2 rounded-lg ${isOpen ? 'pl-2' : 'pl-0'} ${
                isActive ? 'bg-[#e53935] text-white' : 'text-black hover:text-gray-400'
              }`
            }
          >
            <FaRoute />
            {isOpen && <span>Features</span>}
          </NavLink>
        </li>
      </ul>
      <AccesibilityTools isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;
