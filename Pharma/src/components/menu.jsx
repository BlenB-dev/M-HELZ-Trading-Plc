import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
const Menu = () => {
  const [toggle, setToggle] = useState(false);
  {
    navLinks.map((nav, index) => (
      <li
        key={nav.id}
        className={`font-poppins ml-10 font-normal cursor-pointer text-[16px] ${
          index === navLinks.length - 1 ? "mr-40" : "mb-0"
        } text-white`}
      >
        <Link to={nav.to}>{nav.label}</Link>
      </li>
    ));
  }
  return (
    <div>
      <div className="sm:hidden flex flex-2 justfiy-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]
         object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient 
      absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul
          className="list-none flex items-center justify-end items-center
       flex-col"
        >
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              } text-white`}
            >
              <Link to={nav.to}>{nav.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
