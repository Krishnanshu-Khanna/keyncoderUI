import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../utilities/Navbar";
import LaptopSlider from "../components/LaptopSlider";
import Footer from "../utilities/Footer";
// inorder to fetch user data
// import kncContext from "../context/knc/kncContext";
// import axios from 'axios';

// const backendUrl = process.env.REACT_APP_BACKEND_URL;
const PostLogin = ({ theme, handleThemeSwitch }) => {
  const [showStats, setShowstats] = useState(true);
  const navigate = useNavigate();
  // const { getUserInfo, userInfo } = useContext(kncContext);

  // const fetchShowStats = async () => {
  //   try {
  //     const response = await axios.get(`${backendUrl}/api/showStats`);
  //     setShowstats(response.data.showStats);
  //   } catch (error) {
  //     console.error('Error fetching showStats:', error);
  //   }
  // };

  // useEffect(() => {
  // getUserInfo();
  //   fetchShowStats();
  // }, [getUserInfo]);

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
                        {/* {userInfo.name}! */}
                        User
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
        <div className="mt-[3.9rem]">
          <div
            className={`w-full h-[90vh] ${
              theme === "dark"
                ? "bg-[#1D1534]"
                : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]"
            }`}
          >
            <div className="mx-10 md:mx-12 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="max-w-xl text-4xl leading-[1.1] md:text-5xl md:leading-[1.3] font-bold text-white dark:text-white">
                  Hey{" "}
                  <span className="text-black dark:text-yellow-200">
                    {" "}
                    {/* {userInfo.name}! */}
                    User
                  </span>{" "}
                  seems you haven't enrolled yet
                </h1>
                <p className="text-[#FFB453] font-semibold mt-4 dark:text-[#e87f7f] md:text-[28px] max-w-sm mb-5">
                  Don't hesitate - Join now and get the finest available
                </p>
                <button
                  onClick={handleNavigateDsa}
                  className="dark:bg-orange-600 bg-orange-500 shadow-lg hover:bg-orange-600 dark:hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg md:mt-0 mt-10"
                >
                  Home
                </button>
              </div>
              <LaptopSlider />
            </div>
          </div>
          <Footer theme={theme} />
        </div>
      )}
    </div>
  );
};

export default PostLogin;
