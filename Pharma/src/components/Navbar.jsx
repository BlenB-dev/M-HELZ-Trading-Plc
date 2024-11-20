import React from "react";
import { navLinks } from "../constants";
import { logo1 } from "../assets";
import { Link } from "react-router-dom";
import Menu from "./menu";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Logo Section */}
      <a href="/">
        <img src={logo1} alt="Pharma" className="w-[140px] ml-10 h-[86px]" />
      </a>

      {/* Desktop Navigation Links */}
      <ul className="list-none sm:flex hidden items-center flex-2">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins  whitespace-nowrap ml-10 font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-40" : "mb-0"
            } text-white`}
          >
            <Link to={nav.to}>{nav.label}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
