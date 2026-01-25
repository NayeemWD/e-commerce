import React, { useContext, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="border-y py-2 border-gray-200">
      <div className="flex justify-between items-center container mx-auto px-4 sm:px-8 md:px-12 md:gap-4  lg:px-24">
        <div className="flex hover:scale-110 transition-all cursor-pointer hover:duration-500 items-center gap-2 bgp text-white py-2 px-6 rounded-md">
          <BiCategory />
          <Link to="/shop">
            <button>All Category</button>
          </Link>
        </div>
        <div className="hidden md:flex gap-12">
          <NavLink className={({ isActive }) => (isActive ? `cp` : ``)} to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `cp` : ``)}
            to="/shop">
            Shop Now
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `cp` : ``)}
            to="/about">
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `cp` : ``)}
            to="/blog">
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `cp` : ``)}
            to="/contact">
            Contact
          </NavLink>
        </div>
        <div className="hidden md:flex md:pr-4 cursor-pointer hover:scale-110 transition-all hover:duration-500 items-center gap-2 bgp text-white py-2 px-6 rounded-md">
          <LuShoppingCart />
          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col items-center gap-4">
            <NavLink
              className={({ isActive }) => (isActive ? `cp` : ``)}
              to="/">
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? `cp` : ``)}
              to="/shop">
              Shop Now
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? `cp` : ``)}
              to="/about">
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? `cp` : ``)}
              to="/blog">
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? `cp` : ``)}
              to="/contact">
              Contact
            </NavLink>
            <div className="flex  cursor-pointer hover:scale-110 transition-all hover:duration-500 items-center gap-2 bgp text-white py-2 px-6 rounded-md">
              <LuShoppingCart />
              <Link to="/shop">
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;