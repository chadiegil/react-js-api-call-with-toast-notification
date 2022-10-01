import React from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky d-flex align-items-center justify-content-between">
        <a className="navbar-brand m-1" href="/">
          <span>Insta</span>
          <span className="logo">Graham </span>🎯
        </a>
        <div className="text-white d-flex align-items-center justify-content-between">
          <NavLink to="/" className="p-2 hover-style home">
            Home
          </NavLink>
          <div className="p-2 hover-style">Login</div>
          <div className="p-2 hover-style">Register</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
