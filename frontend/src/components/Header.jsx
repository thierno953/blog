import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

import { images } from "../constants";

const navItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About us", "Contact us"] },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold left-0 top-0 group-hover:left-[90%] opacity-0 group-hover:opacity-100">
            _
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="flex items-center px-4 py-2 gap-x-1"
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="flex flex-col overflow-hidden text-center rounded-lg shadow-lg bg-dark-soft lg:bg-transparent">
              {item.items.map((page, index) => (
                <a
                 key={index}
                  href="/"
                  className="px-4 py-2 text-white hover:bg-dark-hard hover:text-white lg:text-dark-soft"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container flex items-center justify-between px-5 py-4 mx-auto">
        <div>
          <img className="w-[4rem]" src={images.Logo} alt="logo" />
        </div>
        <div className="z-50 lg:hidden">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-4 h-4"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-4 h-4" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="flex flex-col items-center font-semibold text-white gap-y-5 lg:text-dark-soft lg:flex-row gap-x-2">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className="px-6 py-2 mt-5 font-semibold text-blue-500 transition-all duration-300 border-2 border-blue-500 rounded-full lg:mt-0 hover:bg-blue-500 hover:text-white">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
