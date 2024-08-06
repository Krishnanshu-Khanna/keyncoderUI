import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Footer({ theme }) {
  return (
    <footer
      className={`${
        theme === "dark" ? "bg-[#232222]" : "bg-[#E6E6E6]"
      } text-black dark:text-zinc-600 body-font`}
    >
      <div className="container mx-auto px-5 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-black font-bold text-base md:text-lg text-center md:text-left mb-4 md:mb-0">
            <img
              src={
                theme === "dark"
                  ? "../images/logolight.png"
                  : "../images/logo.png"
              }
              alt="Logo"
              className="w-40 h-10"
            />
          </p>
          <span className="inline-flex mt-2 md:mt-0">
            <Link
              target="_blank"
              to="https://rzp.io/l/y1Eux1i"
              className="text-sm md:text-base text-white px-3 py-1 md:px-4 md:py-2 bg-[#111B47] rounded-lg hover:bg-[#0E1840]"
            >
              Purchase Now
            </Link>
          </span>
        </div>
        <hr className="w-full mt-3 border-0 h-[1px] bg-gray-900 dark:bg-gray-300" />

        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <p className="text-sm md:text-base text-center md:text-left dark:text-gray-400 mb-3">
            <span className="flex  items-center">
              <span className="md:text-[25px] sm:text-[25px] sm: mr-2 ">©</span>
              2024 keyNcoders
            </span>
          </p>
          <span className="flex flex-col md:flex-row justify-center items-center md:gap-8 dark:text-gray-400 ">
            <Link
              to="/dsa"
              className="text-base md:text-lg dark:text-gray-400 text-black "
            >
              Product
            </Link>
            <a
              href="#"
              className="text-base md:text-lg dark:text-gray-400 text-black "
            >
              Community
            </a>
            <Link
              to="/contact-us"
              className="text-base md:text-lg dark:text-gray-400 text-black "
            >
              Support
            </Link>
          </span>
          <div className="flex flex-row gap-4 mt-2 md:m-0 md:gap-8">
            <FontAwesomeIcon
              icon={faFacebook}
              className="dark:text-[#B0B8BC] text-black h-5 md:h-6"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="dark:text-[#B0B8BC] text-black h-5 md:h-6"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="dark:text-[#B0B8BC] text-black h-5 md:h-6"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="dark:text-[#B0B8BC] text-black h-5 md:h-6"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="dark:text-[#B0B8BC] text-black h-5 md:h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
