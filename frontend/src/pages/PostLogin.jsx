import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../utilities/Navbar";
import LaptopSlider from "../components/LaptopSlider";
import Footer from "../utilities/Footer";
// in order to fetch user data
import kncContext from "../context/knc/kncContext";
import { Link } from "react-router-dom";

const backendUrl = "http://localhost:5000";
// const backendUrl = process.env.BACKEND_URL;
const PostLogin = ({ theme, handleThemeSwitch }) => {
  const [showStats, setShowstats] = useState(false);
  const [userdetails, setuserdetails] = useState({});
  const navigate = useNavigate();

  const fetchShowStats = async () => {
    try {
      //verify endpoint
      const response = await fetch(`${backendUrl}/courses/getCourseAccess`);
      if (response.status === 200) {
        setShowstats(true);
      } else if (response.status === 400) {
        setShowstats(false);
      } else if (response.status === 500) {
        console.error("Server error: 500 Internal Server Error");
        setShowstats(false);
      }
    } catch (error) {
      console.error("Error fetching showStats:", error);
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("savedUser");
    if (savedUser) {
      setuserdetails(JSON.parse(savedUser));
      fetchShowStats();
    } else {
      setShowstats(false);
    }
  }, []);

  const handleNavigateDsa = () => {
    navigate("/dsa");
  };
  const handleNavigatehome = () => {
    navigate("/");
  };

  return (
    <div
      className={`flex flex-col w-full h-full overflow-x-hidden ${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-white text-black"
      }`}
    >
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />

      {showStats ? (
        <>
          <div
            className={`${
              theme === "dark"
                ? "bg-black"
                : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]"
            }`}
          >
            <div className="mt-40">
              <div
                className={`w-full h-[90vh] ${
                  theme === "dark"
                    ? "bg-black"
                    : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]"
                }`}
              >
                <div className="mx-10 md:mx-12 flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h1 className="max-w-xl text-4xl leading-[1.1] md:text-5xl md:leading-[1.3] font-bold text-white dark:text-white">
                      Hey{" "}
                      <span className="text-black dark:text-yellow-200">
                        {userdetails.name || "User"}
                      </span>{" "}
                      You’ve got a knack for smart decisions
                    </h1>
                    <p className="text-[#FFB453] font-semibold mt-4 dark:text-[#e87f7f] md:text-[28px] max-w-sm mb-5">
                      Your batch starts on Sept 6
                    </p>
                    <button
                      onClick={handleNavigatehome}
                      className="dark:bg-orange-600 bg-orange-500 shadow-lg hover:bg-orange-600 dark:hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg md:mt-0 mt-10 ml-24 sm:ml-0 lg:ml-0"
                    >
                      Home
                    </button>
                  </div>
                  <LaptopSlider />
                </div>
              </div>
              <Footer theme={theme} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`${
              theme === "dark"
                ? "bg-black"
                : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]"
            }`}
          >
            <div className="mt-40">
              <div
                className={`w-full h-[90vh] ${
                  theme === "dark"
                    ? "bg-black"
                    : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]"
                }`}
              >
                <div className="mx-10 md:mx-12 flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h1 className="max-w-xl text-4xl leading-[1.1] md:text-5xl md:leading-[1.3] font-bold text-white dark:text-white">
                      Hey{" "}
                      <span className="text-black dark:text-yellow-200">
                        {" "}
                        {userdetails.name || "User"}
                      </span>{" "}
                      seems you haven't enrolled yet
                    </h1>
                    <p className="text-[#FFB453] font-semibold mt-4 dark:text-[#e87f7f] md:text-[28px] max-w-sm mb-5">
                      Don't hesitate - Join now and get the finest available
                    </p>
                    <Link target="_blank" to="https://rzp.io/l/y1Eux1i">
                      <button
                        onClick={handleNavigatehome}
                        className="dark:bg-orange-600 bg-orange-500 shadow-lg hover:bg-orange-600 dark:hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg md:mt-0 mt-10 ml-24 sm:ml-0 lg:ml-0"
                      >
                        Join Now
                      </button>
                    </Link>
                  </div>
                  <LaptopSlider />
                </div>
              </div>
              <Footer theme={theme} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostLogin;
