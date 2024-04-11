import React from "react";
import MyTradingLicenseForm from "./TradinLisenceForm";
import SignupForm from "./Signup";
import DeclarationForm from "./Declaraion";

const RoleBasedComponent = ({ role, selectedMenuItem }) => {
  if (role === "ADMIN") {
    if (selectedMenuItem === "Trading License") {
      return <MyTradingLicenseForm />;
    }
    if (selectedMenuItem === "declaration") {
      return <DeclarationForm />;
    }
    if (selectedMenuItem === "New Users") {
      return <SignupForm />;
    }
  } else if (
    role === "USER" ||
    (role === "user" && selectedMenuItem === "declaration")
  ) {
    return <DeclarationForm />;
  }
  return null;
};

export default RoleBasedComponent;
