import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminDashBoard from "./components/AdminDashBoard";
import Header from "./components/Header";
import MyTradingLicenseForm from "./components/TradinLisenceForm";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTradingLicense, setShowTradingLicense] = useState(false);

  const handleLogin = (flag) => {
    if (flag) {
      setIsLoggedIn(true);
      return true;
    } else {
      return false;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowTradingLicense(false);
  };

  const handleRegistrationClick = () => {
    setShowTradingLicense(true);
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="content-container flex">
          <Routes>
            <Route
              path="/dashboard"
              element={
                isLoggedIn ? (
                  <>
                    <div className="dashboard-column flex-1">
                      <AdminDashBoard onRegister={handleRegistrationClick} />
                    </div>
                    {showTradingLicense && (
                      <div className="form-column flex-1">
                        <MyTradingLicenseForm />
                      </div>
                    )}
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={
                !isLoggedIn ? (
                  <Login onLogin={handleLogin} />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            />
            <Route path="/" element={<Navigate to="/logout" />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
