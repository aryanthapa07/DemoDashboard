import React from "react";
import { NavLink } from "react-router-dom";
import "./DotNavigation.css"; // Add styles as per your design

const DotNavigation = () => {
  return (
    <div className="dot-navigation">
      {/* Add your paths in the `to` attribute */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "dot active" : "dot"
        }
      />
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "dot active" : "dot"
        }
      />
      <NavLink
        to="/path3"
        className={({ isActive }) =>
          isActive ? "dot active" : "dot"
        }
      />
      <NavLink
        to="/path4"
        className={({ isActive }) =>
          isActive ? "dot active" : "dot"
        }
      />
    </div>
  );
};

export default DotNavigation;
