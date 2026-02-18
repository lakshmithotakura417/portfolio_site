import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "./Data/navLinks";
const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="w-full fixed top-0 bg-black">
      <div className="relative max-w-[1170px] mx-auto p-4 md:px-0 flex justify-between items-center">
        <h1 className="text-3xl text-blue-50 font-semibold">Portfolio</h1>
        <div
          className={`toggle_container ${
            isToggled ? "block" : "hidden"
          } md:block md:static md:flex md:flex-row md:gap-6 md:justify-between md:w-auto md:items-center absolute top-[64px] left-0 flex flex-col gap-4 w-full items-center bg-black `}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-blue-50 font-semibold">
            {navItems.map((eachItem, index) => {
              const { navItem, navLink } = eachItem;
              return (
                <li className="hover:underline hover:scale-125">
                  <NavLink
                    to={navLink}
                    onClick={() => setIsToggled(!isToggled)}
                  >
                    {" "}
                    {navItem}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div>
            <button className="text-white font-semibold px-4 py-2 border-1 rounded hover:bg-blue-50 hover:text-gray-500">
              Resume
            </button>
          </div>
        </div>
        <div className="md:hidden block text-end" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={faBars}
            className="text-white text-[35px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
