// src/components/Spinner.js
import React, { useEffect, useState } from "react";

const Spinner = () => {
  const [text, setText] = useState("");
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
      setText("");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center">
      {showImage ? (
        // this is basic loader-yeh hai aam zindagi
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        // yeh hai mentos zindagi
        // <img src="../images/spinner.gif" alt="spinner"></img>
        <h3>{text}</h3>
      )}
    </div>
  );
};

export default Spinner;
