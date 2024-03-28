import React from "react";
import MyTradingLicenseForm from "./TaxDeclarationForm";
import SignupForm from "./Signup";
import DeclarationForm from "./Declaraion";

const RoleBasedComponent = ({ role, selectedMenuItem }) => {
  if (role === "ADMIN") {
    if (selectedMenuItem === "Trading License") {
      return <MyTradingLicenseForm />;
    } else if (selectedMenuItem === "New Users") {
      return <SignupForm />;
    }
  } else if (role === "USER" && selectedMenuItem === "declaration") {
    return <DeclarationForm />;
  }
  return null;
};

export default RoleBasedComponent;
