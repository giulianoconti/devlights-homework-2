import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <NavLink to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Pokemons
          </span>
        </NavLink>

        <ul className="flex mt-4 md:space-x-8 mt-0 text-sm font-medium sm:space-x-1 flex-col md:flex-row">
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
              to="/list/0"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              List of Pokemons
            </NavLink>
          </li>
          {user ? (
            <li className="block pl-3 border-0 p-0 text-gray-400 hover:text-white">
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li className="block pl-3 border-0 p-0 text-gray-400 hover:text-white">
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Login
              </NavLink>
            </li>
          )}
          {user && (
            <li className="block pl-3 border-0 p-0 text-blue-500 cursor-default">
              {user.email}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
