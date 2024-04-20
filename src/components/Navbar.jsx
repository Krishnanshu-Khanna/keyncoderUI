import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

const Navbar = ({ theme, handleThemeSwitch }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index, event) => {
    event.preventDefault(); // Prevents the default action (page refresh)
    setActiveLink(index);
  };

  return (
    <nav className="fixed flex flex-row justify-between items-center backdrop-blur-md h-16 px-8 my-2 mt-0 w-full">
      <span className="flex items-center gap-2">
        <h1 className="font-semibold text-2xl dark:text-white">keyNcoder</h1>
      </span>
      <span className="flex items-center gap-10">
        <ul className="flex gap-7">
          <li>
            <a
              href=""
              className={`font-medium dark:text-white ${
                activeLink === 0
                  ? "text-orange-600 underline decoration-2 decoration-orange-400 underline-offset-8"
                  : ""
              } hover:text-orange-600`}
              onClick={(event) => handleLinkClick(0, event)}
            >
              About us
            </a>
          </li>
          <li>
            <a
              href=""
              className={`font-medium dark:text-white ${
                activeLink === 1
                  ? "text-orange-600 underline decoration-2 decoration-orange-400 underline-offset-8"
                  : ""
              } hover:text-orange-600`}
              onClick={(event) => handleLinkClick(1, event)}
            >
              Batches
            </a>
          </li>
          <li>
            <a
              href=""
              className={`font-medium dark:text-white ${
                activeLink === 2
                  ? "text-orange-600 underline decoration-2 decoration-orange-400 underline-offset-8"
                  : ""
              } hover:text-orange-600`}
              onClick={(event) => handleLinkClick(2, event)}
            >
              Contact Us
            </a>
          </li>
        </ul>
        <button
          onClick={handleThemeSwitch}
          className="w-12 h-12 p-2 bg-transparent border border-gray-300 rounded-full focus:outline-none"
        >
          {theme === "light" ? (
            <FontAwesomeIcon
              icon={faMoon}
              className="-rotate-15 text-black-500 text-3xl"
            />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              className="text-yellow-500 text-3xl"
            />
          )}
        </button>
        <button className="font-medium dark:text-white border-2  border-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white focus:outline-none">
          SignIn
        </button>
      </span>
    </nav>
  );
};

export default Navbar;
