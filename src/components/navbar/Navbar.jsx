import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky">
        <a className="navbar-brand m-1" href="#">
          Insta<span className="logo">Graham </span>🎯
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
