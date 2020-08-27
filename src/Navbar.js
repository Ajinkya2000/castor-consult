import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">
        <span>Castor</span>
        <span>Consult</span>
      </h1>
      <ul className="navlinks">
        <li className="links">Home</li>
        <li className="links">About</li>
        <li className="links">Sellings</li>
        <li className="links">Current Listings</li>
        <li className="links">Contact</li>
      </ul>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
