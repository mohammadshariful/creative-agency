import React from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
const Menubar = () => {
  const menu = (
    <>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/portfolio">Our Portfolio</CustomLink>
      <CustomLink to="/team">Our Team</CustomLink>
      <CustomLink to="/contact">Contact Us</CustomLink>
      <Link
        to="/login"
        className="mx-3 font-semibold sm:text-lg text-secondary bg-white px-3 py-1 rounded-sm hover:text-neutral"
      >
        Login
      </Link>
    </>
  );
  return (
    <nav className="bg-secondary">
      <div class="navbar lg:w-[90%] mx-auto ">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabIndex="0" class="btn btn-ghost lg:hidden">
              <RiMenu4Fill className="text-white" fontSize={24} />
            </label>
            <ul
              tabIndex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52 text-center"
            >
              {menu}
            </ul>
          </div>
          <Link
            className="font-semibold text-base sm:text-xl text-white whitespace-nowrap"
            to="/"
          >
            Creative <span>Agency</span>
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal items-center"> {menu}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
