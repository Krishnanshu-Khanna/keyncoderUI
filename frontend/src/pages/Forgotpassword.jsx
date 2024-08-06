import React, { useState } from "react";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const API_URL = "http://localhost:3001"; // Replace with your actual API URL

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await fetch(`${API_URL}/auth/forgot-password`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email }),
    //   });

    //   const json = await response.json();
    //   if (json.success) {
    //     setMessage("Password reset email sent.");
    //   } else {
    //     setMessage("User does not text");
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error);
    //   setMessage("An error occurred. Please try again later.");
    // }
    setMessage("If user exixts email has been sent");
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className="flex justify-center items-center h-screen ">
        <form
          onSubmit={handleForgotPassword}
          className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg border border-gray-300"
        >
          <h2 className="text-3xl mb-6 text-center font-semibold text-gray-800">
            Forgot Password
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
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
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            Submit
          </button>
          {message && (
            <p className="mt-4 text-center text-gray-700 text-xl  font-bold">
              {message}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Forgotpassword;
