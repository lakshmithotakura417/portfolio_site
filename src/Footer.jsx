import React from "react";
import { NavLink } from "react-router-dom";
import Icons from "./Icons";
import { navItems } from "./Data/navLinks";
const Footer = () => {
  return (
    <div className="w-full bg-[#E6E6E6] py-[50px]">
      <div className="max-w-[1170px] mx-auto ">
        <div>
          <ul className="flex gap-[20px] py-6 text-gray-800 font-semibold items-center justify-center">
            {navItems.map((eachItem, index) => {
              const { navItem, navLink } = eachItem;
              return (
                <li className="hover:underline hover:scale-125">
                  <NavLink to={navLink}> {navItem}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-[30px] py-2 text-4xl justify-center items-center">
          <Icons />
        </div>
        <p className="py-3 text-center text-[16px] font-semibold">
          Copyright ©2020 - 2026 . All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
