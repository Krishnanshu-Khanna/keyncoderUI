import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer({ theme }) {
  return (
    <footer
      className={`${
        theme === "dark" ? "bg-[#131313]" : "bg-[#1d1534]"
      } text-white dark:text-zinc-600 body-font`}
    >
      <div className="container mx-auto px-5 mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm md:text-base text-center md:text-left dark:text-gray-400">
            <span className="flex  items-center">
              <span className="text-[25px] mr-2">©</span>2024
            </span>
            <br /> keyNcoders
          </p>
          <span className="inline-flex mt-2 md:mt-0">
            <a
              href="#"
              className="text-sm md:text-base text-white px-3 py-1 md:px-4 md:py-2 bg-[#111B47] rounded-lg hover:bg-[#0E1840]"
            >
              Purchase Now
            </a>
          </span>
        </div>
        <hr className="w-full mt-3 bg-gray-300" />
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <p className="text-black font-bold text-base md:text-lg text-center md:text-left mb-4 md:mb-0">
            <img src="../images/logolight.png" alt="" className="w-40 h-10" />
          </p>
          <span className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 dark:text-gray-400">
            <a
              href="#"
              className="text-base md:text-lg dark:text-gray-400 text-white"
            >
              Product
            </a>
            <a
              href="#"
              className="text-base md:text-lg dark:text-gray-400 text-white"
            >
              Community
            </a>
            <a
              href="#"
              className="text-base md:text-lg dark:text-gray-400 text-white"
            >
              Support
            </a>
          </span>
          <div className="flex flex-row gap-4 mt-2 md:m-0 md:gap-8">
            <FontAwesomeIcon
              icon={faFacebook}
              className="dark:text-[#B0B8BC] text-white h-5 md:h-6"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="dark:text-[#B0B8BC] text-white h-5 md:h-6"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="dark:text-[#B0B8BC] text-white h-5 md:h-6"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="dark:text-[#B0B8BC] text-white h-5 md:h-6"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="dark:text-[#B0B8BC] text-white h-5 md:h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
