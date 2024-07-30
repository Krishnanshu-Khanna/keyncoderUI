import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreLogin from "./pages/PreLogin";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Batches from "./pages/Batches";
import MyBatches from "./pages/MyBatches";
import React, { useState, useEffect } from "react";
import PostLogin from "./pages/PostLogin";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import DsaCourse from "./pages/DsaCourse";
import NextjsCourse from "./pages/NextjsCourse";
import Videos from "./utilities/Videos";
import Mentor from "./pages/Mentor";
import MentorProfile from "./pages/MentorProfile.jsx";
import JobAlerts from "./pages/JobAlerts.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import QuestionPage from "./pages/QuestionsPage.jsx";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PreLogin theme={theme} handleThemeSwitch={handleThemeSwitch} />
            }
          />
          <Route
            path="/batches"
            element={
              <Batches theme={theme} handleThemeSwitch={handleThemeSwitch} />
            }
          />
          <Route
            path="/my-batches"
            element={
              <MyBatches theme={theme} handleThemeSwitch={handleThemeSwitch} />
            }
          />
          <Route
            path="/user-postlogin"
            element={
              <PostLogin theme={theme} handleThemeSwitch={handleThemeSwitch} />
            }
          />
          <Route
            path="/dsa"
            element={
              <DsaCourse theme={theme} handleThemeSwitch={handleThemeSwitch} />
            }
          />
          <Route
            path="/nextjs"
            element={
              <NextjsCourse
                theme={theme}
                handleThemeSwitch={handleThemeSwitch}
              />
            }
          />

          <Route path="/login" element={<Login theme={theme} />} />
          <Route path="/signup" element={<Signup theme={theme} />} />
          <Route
            path="/about"
            element={
              <AboutUs handleThemeSwitch={handleThemeSwitch} theme={theme} />
            }
          />
          <Route
            path="/contact-us"
            element={
              <ContactUs handleThemeSwitch={handleThemeSwitch} theme={theme} />
            }
          />
          <Route
            path="/videos"
            element={
              <Videos theme={theme} handleThemeSwitch={handleThemeSwitch} />
            }
          />
          <Route
            path="/mentor-connect"
            element={
              <Mentor theme={theme} handleThemeSwitch={handleThemeSwitch} />
            }
          />
          <Route
            path="/mentor-profile/:mentorName"
            element={
              <MentorProfile
                theme={theme}
                handleThemeSwitch={handleThemeSwitch}
              />
            }
          />
          <Route
            path="/job-alerts"
            element={
              <JobAlerts theme={theme} handleThemeSwitch={handleThemeSwitch} />
            }
          />
          <Route path='/questions' element={
            <QuestionPage theme={theme} handleThemeSwitch={handleThemeSwitch}/>
          }/>
          <Route
            path="/user-profile"
            element={
              <UserProfile theme={theme} handleThemeSwitch={handleThemeSwitch} />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
