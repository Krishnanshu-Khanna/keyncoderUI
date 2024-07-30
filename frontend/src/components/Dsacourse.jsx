import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Footer from "../utilities/Footer";

export default function Landing({ theme }) {
  const [paragraphStates, setParagraphStates] = useState({
    paragraph1: false,
    paragraph2: false,
    paragraph3: false,
    // Add more as needed for each paragraph
  });

  const toggleParagraph = (paragraph) => {
    setParagraphStates((prevState) => ({
      ...prevState,
      [paragraph]: !prevState[paragraph],
    }));
  };

  return (
    <>
      <div className={`${theme == "dark" ? " bg-[#131313]" : " bg-white"}`}>
        <div className="md:mx-10 md:mt-16 md:p-8 flex flex-col md:flex-row">
          <div
            className={`w-full md:w-7/10 p-4 ${
              theme == "dark"
                ? "bg-gradient-to-r from-[#2D2C2C] to-[#464646]"
                : "bg-gradient-to-r from-[#E8E8E8] via-[#A8A8A8] to-[#C2C2C2]"
            }`}
          >
            <div className="text-lg text-orange-500 font-bold">
              Courses {">"} DSA
            </div>
            <div className="text-4xl font-extrabold">
              The complete guide to building a full-stack app with NextJs
            </div>
            <div>
              Learn, Analyse and Implement Data Structure using C and C++. Learn
              Recursion and Sorting.
            </div>
            <div className="flex justify-start">
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
              </svg>
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
              </svg>
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
              </svg>
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
              </svg>
              <svg
                className="w-4 h-4 text-yellow-200"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
              </svg>
              <div className="font-extrabold ml-2">4.9</div>
            </div>
            <div className="text-lg">
              Created by <span className="font-bold">Marry Smith</span>
            </div>
          </div>

          {/* Right Column (30% width on medium screens and above) */}
          <div
            className={`w-full md:w-3/10 p-4 flex justify-end ${
              theme == "dark" ? " bg-[#464646]" : "bg-[#C2C2C2]"
            }`}
          >
            <img
              className="h-auto w-auto "
              src="../images/teacher_video.png"
              alt=""
            />
          </div>
        </div>

        {/* What you'll learn section */}
        <div className="container mx-auto p-4 bg-white dark:bg-[#131313]">
          <div className="text-3xl font-bold text-center dark:text-white">
            Why should you take this course
          </div>
          <div className="w-full">
            <img className="h-full" src="../images/WHY.png" alt="" />
          </div>
        </div>

        {/* Course details section */}
        <div>
          <div className="mx-40 mb-10">
            <div className="text-3xl font-bold mt-6">This Course Includes:</div>
            <ul className="text-2xl mt-2 flex-col items-center">
              <li className="list-disc ml-5">23 sections</li>
              <li className="list-disc ml-5">18 lectures</li>
              <li className="list-disc ml-5">Total length : 2h 38m</li>
            </ul>
          </div>
          <div className="container mx-auto p-4 rounded shadow bg-slate-300 dark:bg-slate-600 mt-1 w-4/5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Before we start</h2>
              <div className="flex font-bold">
                2 lectures - 16 min
                <button
                  onClick={() => toggleParagraph(`paragraph`)}
                  className="ml-5 focus:outline-none"
                >
                  {paragraphStates[`paragraph`] ? (
                    <IoIosArrowUp size={24} />
                  ) : (
                    <IoIosArrowDown size={24} />
                  )}
                </button>
              </div>
            </div>
            {paragraphStates[`paragraph`] && (
              <p className="mt-4 text-red-500 justify-center text-center">
                Login to view the content
              </p>
            )}
          </div>

          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div
              key={item}
              className="container mx-auto p-4 rounded shadow bg-slate-200 dark:bg-slate-600 mt-1 w-4/5"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Module {item}</h2>
                <div className="flex font-bold">
                  2 lectures - 16 min
                  <button
                    onClick={() => toggleParagraph(`paragraph${item}`)}
                    className="ml-5 focus:outline-none"
                  >
                    {paragraphStates[`paragraph${item}`] ? (
                      <IoIosArrowUp size={24} />
                    ) : (
                      <IoIosArrowDown size={24} />
                    )}
                  </button>
                </div>
              </div>
              {paragraphStates[`paragraph${item}`] && (
                <p className="mt-4 text-red-500 justify-center text-center">
                  Login to view the content
                </p>
              )}
            </div>
          ))}

          <div className="container mx-auto p-4 rounded shadow bg-slate-300 dark:bg-slate-600 mt-1  w-4/5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Acknowledgements</h2>
              <div className="flex font-bold">
                2 lectures - 16 min
                <button
                  onClick={() => toggleParagraph(`paragraph`)}
                  className="ml-5 focus:outline-none"
                >
                  {paragraphStates[`paragraph`] ? (
                    <IoIosArrowUp size={24} />
                  ) : (
                    <IoIosArrowDown size={24} />
                  )}
                </button>
              </div>
            </div>
            {paragraphStates[`paragraph`] && (
              <p className="mt-4 text-red-500 justify-center text-center">
                Login to view the content
              </p>
            )}
          </div>
        </div>

        <div
          className={
            theme === "dark"
              ? "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] w-full"
              : "bg-white"
          }
        >
          <div className="text-2xl dark:text-white ml-[5%] font-bold mt-16">
            Description:
          </div>
          <div className="ml-[5%] dark:text-[#050608] mt-4 mb-16 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className="text-2xl font-bold dark:white ml-[5%]">
            About the instructor
          </div>
          <div
            className={`mx-16 p-6 mb-10 md:mb-4 text-1xl dark:bg-white  ml-[5%]  rounded-md ${
              theme === "drak"
                ? "bg-gradient-to-r from-[#ED374D] to-[#FA793F]"
                : "bg-white"
            }`}
          >
            <div className="flex ">
              <div className="mr-4">
                <img
                  src="./images/Marry.png"
                  className="w-80 h-40 rounded-3x1 border-slate-800"
                />
                <div className="text-center mt-2 ml-[10%] text-black text-lg font-bold">
                  Marry Hello
                </div>
              </div>
              <div>
                <div className="text-2xl mt-0 text-black ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam, dolor voluptatem, eveniet accusantium dolore eius
                  libero molestiae et commodi doloremque vel omnis neque placeat
                  nam adipisci debitis optio, consequuntur laudantium.
                </div>
              </div>
            </div>
          </div>

          <div className="text-2xl font-bold dark:text-white mb-4 mt-2 ml-[5%]">
            Featured Review
          </div>
          <div
            className={`mx-20 p-5 md:mb-4 text-1xl dark:bg-white  shadow-lg rounded-lg ml-[5%]  ${
              theme === "drak"
                ? "bg-gradient-to-r from-[#ED374D] to-[#FA793F]"
                : "bg-[#e1dfdf]"
            }`}
          >
            <div className="flex items-center">
              <img
                src="./images/Marry.png"
                className="w-20 h-20 rounded-full mr-4"
              />
              <div>
                <div className="ml-1 text-zinc-700 dark:text-white">
                  Ram John
                </div>
                <div className="flex items-center"></div>
              </div>
            </div>
            <blockquote className="italic text-zinc-600 text-lg my-5">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                animi voluptate cum quis voluptatibus, labore eos et veniam
                autem soluta quibusdam fuga ex quasi officiis ut deserunt
                deleniti reprehenderit porro?
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <Footer theme={theme} />
    </>
  );
}
