import React from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import CustomLink from "./CustomLink";
const Menubar = () => {
  const menu = (
    <>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/portfolio">Our Portfolio</CustomLink>
      <CustomLink to="/team">Our Team</CustomLink>
      <CustomLink to="/contact">Contact Us</CustomLink>
      <Link
        to="/signin"
        className="mx-3 font-semibold sm:text-lg text-secondary bg-white px-3 py-1 rounded-sm hover:text-neutral"
      >
        SignIn
      </Link>
    </>
  );
  return (
    <nav className="bg-secondary sticky top-0 left-0 z-40">
      <div className="navbar lg:w-[90%] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <RiMenu4Fill className="text-white" fontSize={24} />
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52 text-center"
            >
              {menu}
            </ul>
          </div>
          <Link
            className="font-semibold text-base sm:text-xl text-white whitespace-nowrap"
            to="/"
          >
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal items-center"> {menu}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
