import React from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky d-flex align-items-center justify-content-between">
        <Link className="navbar-brand m-1" to="/">
          <span>Insta</span>
          <span className="logo">Graham </span>🎯
        </Link>
        <div className="text-white d-flex align-items-center justify-content-between">
          <NavLink to="/" className="p-2 hover-style link-style">
            Home
          </NavLink>
          <NavLink className="p-2 hover-style link-style" to="/login">
            Login
          </NavLink>
          <NavLink className="p-2 hover-style link-style" to="/register">
            Register
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
