import React from "react";
import LogoImage from "../assets/Rwanda-Revenue-Authority-logo.png";

const Header = () => {
  return (
    <header className="bg-green-900  text-white py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={LogoImage} alt="Logo" className="h-20 w-auto" />
        </div>
        {/* Other Header Contents */}
        {/* ... */}
      </div>
    </header>
  );
};

export default Header;
