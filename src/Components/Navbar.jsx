import React from "react";
import "./Navbar.css"; // Import the custom CSS file

const Navbar = () => {
  return (
    <>
      {/* Original Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="auth-links">
          <span className="login-text">Login</span>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* New Neon Glow Navbar Below */}
      <nav className="navbar glow-navbar">
        <div className="drawer">
          <span className="drawer-text">≡</span>
        </div>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="auth-links">
          <span className="login-text">Login</span>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
