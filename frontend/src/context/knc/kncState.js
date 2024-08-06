import React, { useState, useCallback } from "react";
import kncContext from "./kncContext";

const kncState = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    college: "",
    //add more as required
  });
  const host = ""; //we have to add the backend server link here

  //to Get user info
  const getUserInfo = useCallback(async () => {
    //we have to adjust the endpoint here
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setUserInfo({
      name: json.name,
      email: json.email,
      phone: json.phone,
    });
  }, [host]);

  return (
    <kncContext.Provider
      value={{
        getUserInfo,
        userInfo,
      }}
    >
      {props.children}
    </kncContext.Provider>
  );
};

export default kncState;
