import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import logo from "./assets/logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4">
      {/* Desktop */}
      <div className="flex items-center h-full justify-between">
        <div className="h-10">
          <Link to={"/"}>
            <img src={logo} alt="" className="h-full" />
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex items-center gap-4 md:gap-6 text-base md:text-large">
            <Link to={"/home"}>Home</Link>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/about"}>About</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
          <div className="text-xl text-slate-600" onClick={handleShowMenu}>
            <div className="border-2 border-solid text-2xl border-slate-600 p-2 rounded-full cursor-pointer">
              <FaUserAlt />
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                <Link to="/about" className="whitespace-nowrap cursor-pointer">New product</Link>
                <Link to="/login" className="whitespace-nowrap cursor-pointer">Login</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile */}
    </header>
  );
};

export default Header;
