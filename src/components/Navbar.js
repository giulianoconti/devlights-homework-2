import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <NavLink to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Pokemons
          </span>
        </NavLink>

        <ul className="flex mt-4 md:space-x-8 mt-0 text-sm font-medium sm:space-x-1">
          <li className="block pl-3 border-0 p-0 text-gray-400 hover:text-white">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="block pl-3 border-0 p-0 text-gray-400 hover:text-white">
            <NavLink
              to="/list"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              List of Pokemons
            </NavLink>
          </li>
          <li className="block pl-3 border-0 p-0 text-gray-400 hover:text-white">
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              Services
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
