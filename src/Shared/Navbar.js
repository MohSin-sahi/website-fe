import React, { useState } from "react";
import logo from "../Assets/img/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const menu = [
    "Home",
    "Services",
    "Portfolio",
    "Ezi updates",
    "Software",
    "Login",
    "Contact",
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="py-8 px-4 fixed top-0 left-0 right-0 z-10 bg-[#000000e8]">
      <div className="flex gap-4 items-center justify-between container mx-auto">
        <img src={logo} alt="logo" className="w-56" />
        <div className="hidden lg:flex justify-between items-center gap-5">
          <ul className="list-none flex gap-4 xl:gap-8">
            {menu.map((item, i) => (
              <li key={i}>
                <a
                  href="1"
                  className="cursor-pointer text-3xl text-[#fff] font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden text-right">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose size={24} className="text-[#fff]" />
            ) : (
              <AiOutlineMenu size={24} className="text-[#fff]" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md mt-2 absolute top-36 right-6 w-[90%]">
          <ul className="list-none flex flex-col items-start gap-4 p-8">
            {menu.map((item, i) => (
              <li key={i}>
                <a href="1" className="cursor-pointer text-3xl font-medium">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
