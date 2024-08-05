import React from "react";
import PostloginCard from "../components/PostloginCard";
import CustomCalendar from "../components/CustomCalendar";
import Statistics from "../components/Statistics";
import CircularProgress from "../components/CircularProgress";
import PostloginNavbar from "../utilities/PostloginNavbar";
import PostloginCourseCard from "../utilities/PostloginCourseCard";

const PostLogin = ({ theme, handleThemeSwitch }) => {
  return (
    <div
      className={`flex flex-col w-full h-full overflow-x-hidden ${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-white text-black"
      }`}
    >
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <div>
        <div className="flex ">
          <PostloginCard theme={theme} />
          <CustomCalendar theme={theme} />
        </div>
        <div className="text-2xl font-bold dark:white ml-[3%] mt-2">
          My Statistics
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col w-[40rem] ml-8">
            <div className="flex w-full">
              <Statistics theme={theme} />
              <div className="flex flex-col justify-evenly items-center h-[300px]">
                <div className="bg-[#D8D8D8] py-2 rounded-2xl">
                  <CircularProgress
                    label="Productivity"
                    value="100"
                    width="100"
                  />
                </div>
                <div className="bg-[#D8D8D8] py-2 rounded-2xl">
                  <CircularProgress label="Quiz" value="75" width="100" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center bg-[#D8D8D8] w-[40rem] rounded-3xl p-3 mb-10">
              <img src="../images/dsa-postlogin.png" alt="" className="w-20" />
              <div className="mr-48">
                <h3 className="font-bold">DSA</h3>
                <div>1.1.1a Longest Subsequence</div>
              </div>
              <CircularProgress label="Practice" value="50" width="60" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center  w-[43.5rem] mr-8 h-fit">
            <PostloginCourseCard
              theme={theme}
              course="JAVA"
              topic="Bitwise Operator"
              img="network"
              play={false}
            />
            <PostloginCourseCard
              theme={theme}
              course="DSA"
              topic="Linked List"
              img="dsa-postlogin"
              play={true}
            />
            <PostloginCourseCard
              theme={theme}
              course="UI/UX"
              topic="Auto Layout"
              img="hack"
              play={false}
            />
            <PostloginCourseCard
              theme={theme}
              course="PYTHON"
              topic="Basics of Python Programming"
              img="network"
              play={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLogin;
