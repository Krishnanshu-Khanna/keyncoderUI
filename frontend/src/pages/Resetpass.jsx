import React, { useState, useRef } from "react";
// import zxcvbn from "zxcvbn";
import Spinner from "../components/Spinner";
const ResetPass = ({ notify }) => {
  const backendUrl = "http://localhost:5000";
  const [password, setPassword] = useState("");
  const imgRef = useRef();
  const passRef = useRef();
  const [loading, setLoading] = useState(false);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const savedUser = JSON.parse(localStorage.getItem("savedUser"));
  const user_resetId = savedUser.resetPasswordToken;

  // const checkPasswordStrength = (password) => {
  //   const hasLetters = /[a-zA-Z]/.test(password);
  //   const hasNumbers = /\d/.test(password);
  //   const isValidLength = password.length >= 6;

  //   return hasLetters && hasNumbers && isValidLength;
  // };

  const showpass = () => {
    if (passRef.current.type === "password") {
      passRef.current.type = "text";
      imgRef.current.src = "../images/Eyecross.png";
    } else {
      passRef.current.type = "password";
      imgRef.current.src = "../images/Eyeopen.png";
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Saved User:", savedUser);

    console.log("Reset Token:", user_resetId);

    try {
      console.log("p1");
      const response = await fetch(
        `${backendUrl}/auth/reset-password/${user_resetId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        }
      );
      if (!response.ok) {
        notify("Failed to reset password");
      } else {
        notify("Password changed successfully");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-800 to-black text-white">
      <div className=" shadow-lg rounded-lg p-8 max-w-sm w-full bg-gray-800 text-white">
        <h2 className="text-2xl font-bold text-center mb-6 ">Reset Password</h2>
        <form onSubmit={handleResetPassword} className="space-y-4 ">
          <div className="relative">
            {/* <input type="hidden" name="token" value={user_resetId} /> */}

            <label
              htmlFor="password"
              className="block  text-white text-sm font-medium mb-2"
            >
              New Password
            </label>
            <input
              ref={passRef}
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your new password"
              className={`text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                password ? "border-red-500" : ""
              }`}
            />
            <span
              className="absolute inset-y-0 mt-6 flex items-center right-1 cursor-pointer"
              onClick={showpass}
            >
              <img
                ref={imgRef}
                width={24}
                src="../images/Eyeopen.png"
                alt="Eye"
              />
            </span>
          </div>

          {password.length === 0 ? (
            <p className="text-yellow-500 text-xs">Please enter a password</p>
          ) : (
            <p className="text-yellow-500 text-xs"> </p>
          )}
          <button
            disabled={loading || password.length === 0}
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            {loading && <Spinner className="absolute inset-0 m-auto w-6 h-6" />}
            {!loading && "Login now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
