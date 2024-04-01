import React, { useState, useEffect } from "react";
import LogoImage from "../assets/Rwanda-Revenue-Authority-logo.png";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, onLogout }) => {
  // Add onLogout prop
  const [currentTime, setCurrentTime] = useState(new Date());
  const [user, setUser] = useState("");
  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString !== null) {
      try {
        const user = JSON.parse(userString);
        setUser(user);
      } catch (error) {
        console.error("Error parsing user data:", error);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-green-900 text-white py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={LogoImage} alt="Logo" className="h-20 w-auto" />
        </div>
        <div className="px-4">
          {isLoggedIn ? (
            <button
              onClick={onLogout} // Call onLogout function when logout button is clicked
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Logout
            </button>
          ) : (
            <div className="flex space-x-4">
              <Link to={"/signup"}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Sign Up
                </button>
              </Link>
              <Link to={"/login"}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-yellow-400">
          <h1>Welcome to RLGMS</h1>
        </div>
        <div className="text-yellow-400">
          <h4>
            Logged in:{" "}
            {user && isLoggedIn
              ? user["firstName"] + " " + user["lastName"]
              : "No user logined in"}
          </h4>{" "}
          {/* Corrected spelling */}
          <div>{currentTime.toString()}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
