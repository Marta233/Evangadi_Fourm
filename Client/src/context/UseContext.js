import React, { createContext, useState } from "react";
export const UserContext = createContext();
export const UserProvider = (props) => {
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
    // JSON.parse(localStorage.getItem("registration")) || null
  });
  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserContext.Provider>
  );
};
