import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header-details">
        <h1 className="brand-name">CASTOR CONSULT AG</h1>
        <p className="header-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
