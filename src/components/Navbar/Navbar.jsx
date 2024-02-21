import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="title">
        Task Manager
      </Link>
    </div>
  );
};
