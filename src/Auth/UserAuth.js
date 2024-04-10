import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  const updateUser = (userData, userToken, userRole) => {
    setUser(userData);
    setToken(userToken);
    setRole(userRole);
  };

  return (
    <UserContext.Provider value={{ user, token, role, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
