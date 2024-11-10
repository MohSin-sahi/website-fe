import React from "react";
import logo from "../../Assets/img/logo.png";

const Header = () => {
  return (
    <header className="h-[100vh] bg-[#181828] flex items-center justify-center">
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" className="w-56" />
      </div>
    </header>
  );
};

export default Header;
