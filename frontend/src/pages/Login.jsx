// src/components/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { login } from "../api/Login"; no need to Import the login function

function Login({ theme }) {
  const API_URL = "http://localhost:3001"; // Replace with your actual API URL

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await fetch(`${API_URL}/auth/login`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const json = await response.json();
    //   // for debugging purpose
    //   console.log(json);

    //   if (json.success) {
    //     //if success then Save the token and redirect
    //     //double check auth-token
    //     localStorage.setItem("token", json.token);
    //   }
    //   else {
    //console.error("Login failed:", json.message);
    // we can also show an alert here
    // }
    // } catch (error) {
    //   console.error("An error occurred:", error);
    //   throw error;
    // }
    navigate("/user-postlogin");
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-r from-[#292626] via-[rgb(89,77,77)] to-[#847373] text-white"
          : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] text-black"
      } flex items-center justify-center w-full`}
    >
      <div className="bg-white rounded-lg p-8 m-6 flex md:flex-row flex-col-reverse md:px-0 md:pr-10 dark:bg-[#292626]">
        <div className="left max-w-md h-96 w-fit bg-white-300 flex-1 relative">
          <img
            src={
              theme === "dark" ? "/images/login_dark.png" : "/images/login.png"
            }
            alt="Login"
            className="h-[100%] w-fit mt-6 m-auto object-cover rounded-3xl"
          />
        </div>

        <div className="max-w-md w-full flex-1 m-2 bg-white-300">
          <h2 className="text-2xl font-bold mb-6 text-zinc-800">
            <span className="dark:text-white">Account</span>{" "}
            <span className="dark:text-[#F14A16]">Login</span>
          </h2>
          <p className="mb-4 hidden md:block text-zinc-600 dark:text-[#A4A4A4]">
            If you are already a member you can login with your email address
            and password.
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-zinc-700 dark:text-[#A4A4A4]"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-md dark:bg-[#292626]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-zinc-700 dark:text-[#A4A4A4]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-md dark:bg-[#292626]"
              />
            </div>
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
              />
              <label
                htmlFor="remember"
                className="text-zinc-700 dark:text-[#A4A4A4]"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full ${
                theme === "dark"
                  ? "dark:bg-orange-600 dark:hover:bg-gray-600"
                  : ""
              }`}
            >
              Login now
            </button>
            <div className="flex justify-between">
              <div className="mt-4 text-center text-zinc-600 dark:text-[#A4A4A4]">
                <Link
                  to={"/signup"}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Sign up here
                </Link>
              </div>
              <div className="mt-4 text-center text-zinc-600 dark:text-[#A4A4A4]">
                <Link
                  to={"/forgotPass"}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
