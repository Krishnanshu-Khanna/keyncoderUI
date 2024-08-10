import React, { useState, useContext } from "react";
import { json } from "react-router-dom";
import Spinner from "../components/Spinner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const API_URL = "http://localhost:5000"; // Replace with your actual API URL
  const [loading, setLoading] = useState(false);
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    // const savedUser = JSON.parse(localStorage.getItem("savedUser"));
    // const user_email = savedUser.email;
    // console.log(user_email);
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      // Check if response status is within 200-299
      if (!response.ok) {
        const errorData = await response.json(); // Attempt to parse error response
        throw new Error(errorData.error || "Failed to reset password");
      } else {
        // const data = await response.json(); // Parse successful response
        setMessage("Email sent successfully");
      }
      console.log("testing");
    } catch (error) {
      console.error("An error occurred:", error.message);
      const mesaagered = "Email not registered";
      <p className="text-red-500">{setMessage(mesaagered)}</p>;
    }
  };

  return (
    <>
      <div className="bottom-0  relative h-full w-full bg-black overflow-x-hidden min-h-screen flex justify-center items-center">
        <div className="absolute  left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute flex justify-center items-center w-full h-full">
          <div className="relative h-[75vw] w-[75vw] max-w-[1000px] max-h-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] flex justify-center items-center">
            <form
              onSubmit={handleForgotPassword}
              className=" w-full max-w-[90%] sm:max-w-[400px] p-8 shadow-lg border-2 border-solid backdrop-blur-2xl rounded-md"
            >
              <h2 className="text-2xl sm:text-3xl mb-6 text-center font-semibold text-white">
                Forgot Password
              </h2>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="email">
                  Enter your registered Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
              >
                {loading && (
                  <Spinner className="absolute inset-0 m-auto w-6 h-6" />
                )}
                {!loading && "Login now"}
              </button>
              {message !== "Email not registered" ? (
                <p className="mt-4 text-center text-green-400 text-xl font-bold">
                  {message}
                </p>
              ) : (
                <p className="mt-4 text-center text-red-600 text-xl font-bold">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
