import React, { useEffect, useState, useContext } from "react";
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
import SignupForm from "./components/Signup";
import DeclarationForm from "./components/Declaraion";
import MyDeclarations from "./components/MyDeclarations";
import RoleBasedComponent from "./components/RoleBasedComponent";
import DeclarationDetails from "./components/DeclarationTable";
import TradingLisenceTaxTable from "./components/TradingLIsenceTable";
import UserTable from "./components/userTable";
import UserLogin from "./components/UserLogin";
import { UserContext } from "./Auth/UserAuth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const { logout } = useContext(UserContext);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (storedToken && storedRole) {
      setIsLoggedIn(true);
      setUserRole(storedRole);
    }
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleLogin = (flag, role) => {
    setIsLoggedIn(flag);
    setUserRole(role);
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    setSelectedMenuItem(null);
    setUserRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="flex-1 flex flex-col lg:flex-row">
          <Routes>
            <Route
              path="/dashboard"
              element={
                isLoggedIn ? (
                  <AdminDashBoard onMenuItemClick={handleMenuItemClick} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            {userRole === "ADMIN" && (
              <Route
                path="/declaration-table"
                element={
                  selectedMenuItem === "Declarations table" ? (
                    <DeclarationDetails />
                  ) : (
                    <AdminDashBoard onMenuItemClick={handleMenuItemClick} />
                  )
                }
              />
            )}
            {userRole === "ADMIN" && (
              <Route
                path="/trading-license-table"
                element={
                  selectedMenuItem === "Trading License Table" ? (
                    <TradingLisenceTaxTable />
                  ) : (
                    <AdminDashBoard onMenuItemClick={handleMenuItemClick} />
                  )
                }
              />
            )}
            {userRole === "user" && (
              <Route
                path="/my-declarations"
                element={
                  selectedMenuItem === "My declarations" ? (
                    <MyDeclarations />
                  ) : (
                    <AdminDashBoard onMenuItemClick={handleMenuItemClick} />
                  )
                }
              />
            )}

            <Route
              path="/client-login"
              element={
                !isLoggedIn ? (
                  <UserLogin onLogin={handleLogin} />
                ) : (
                  <Navigate to="/dashboard" />
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
            {userRole === "ADMIN" && (
              <Route
                path="/user-table"
                element={
                  selectedMenuItem === "user's Table" ? (
                    <UserTable />
                  ) : (
                    <AdminDashBoard onMenuItemClick={handleMenuItemClick} />
                  )
                }
              />
            )}
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
          {/* Render different components based on the selected menu item */}
          {selectedMenuItem && userRole && (
            <div className="form-column flex-1 lg:mt-0 mt-4">
              <RoleBasedComponent
                role={userRole}
                selectedMenuItem={selectedMenuItem}
              />
            </div>
          )}
        </div>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
