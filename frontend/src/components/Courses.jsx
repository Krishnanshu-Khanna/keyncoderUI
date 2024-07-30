import React, { Children } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCarousel from "../utilities/CourseCaraousel";

function Courses({ theme }) {
  return (
    <>
      <section className=" dark:bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] bg-[#1d1534] dark:text-black text-white ">
        <h1 className="text-center text-white font-bold text-5xl mb-10">
          Our Courses
        </h1>
        <div className="bg-[#4E4848] mx-auto w-3/5 h-96 flex rounded-lg">
          <div className="m-6 bg-[#FFA135] w-1/2 rounded-lg"></div>
          <div className="m-4 w-1/2">
            <div className="flex">
              <div className="text-white text-6xl font-semibold ">DSA</div>
              <div className="bg-[#DEC649] text-center -mt-4 ml-36 w-40 relative pt-3">
                <div className="text-gray-900 text-lg font-semibold line-through">
                  Rs. 4999
                </div>
                <div className="text-xl text-gray-900 font-bold">Rs. 3999</div>
                <div className="flex justify-between absolute -bottom-7">
                  <div className="bg-[#DEC649] w-20 h-10 skew-y-12"></div>
                  <div className="bg-[#DEC649] w-20 h-10 -skew-y-12"></div>
                </div>
              </div>
            </div>
            <div>
              <ul className="text-white space-y-2 mt-16">
                <li>✔️ Complete C++ and DSA</li>
                <li>✔️ Topic Wise Question Practice</li>
                <li>✔️ Personal Mentor</li>
                <li>✔️ Placement Assistance</li>
              </ul>
              <div className="flex justify-center items-center mt-6">
                <button className="mt-4 bg-orange-600 text-white py-2 px-4 rounded-lg">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
        {theme === "dark" ? (
          <div classNameName="relative">
            <svg
              width="100%"
              height="100%"
              id="svg"
              viewBox="0 0 1440 310" // Changed the viewBox to better fit the wave
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                stroke="none"
                strokeWidth="0"
                fill={theme === "dark" ? "#131313" : "#1d1534"}
                fillOpacity="1"
              ></path>
            </svg>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}

export default Courses;
