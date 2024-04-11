import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const updateUser = (userData, userToken, userRole) => {
    setUser(userData);
    setToken(userToken);
    setRole(userRole);
  };
  const tradingLisenceTax = (tinNo, names) => {
    setUserInfo({
      tinNo,
      names,
    });
  };
  const updateRole = (userRole) => {
    setRole(userRole);
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    setRole(null);
    setUserInfo(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        role,
        updateUser,
        userInfo,
        tradingLisenceTax,
        updateRole,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
