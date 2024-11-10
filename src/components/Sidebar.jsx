import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";
import assets from "../assets/assets";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the selected item based on the current URL
  const isSelected = location.pathname.substring(1); // Removes leading "/"

  // Function to handle navigation on click
  const handleNavigation = (path) => {
    if (isSelected !== path) {
      navigate(`/${path}`); // Navigate to the clicked path
    }
  };

  return (
    <div className="sidebar-content">
      <div className="upper-container">
        <div className="branding-container">
          <img src={assets.promanageLogo} alt="Pro Manage Logo" />
          <h1>Pro Manage</h1>
        </div>
        <div className="nav-container">
          <div
            className={isSelected === "dashboard" ? "highlight" : ""}
            onClick={() => handleNavigation("dashboard")}
          >
            <img src={assets.board} alt="Board Icon" />
            <h1>Board</h1>
          </div>
          <div
            className={isSelected === "analytics" ? "highlight" : ""}
            onClick={() => handleNavigation("analytics")}
          >
            <img src={assets.analytics} alt="Analytics Icon" />
            <h1>Analytics</h1>
          </div>
          <div
            className={isSelected === "settings" ? "highlight" : ""}
            onClick={() => handleNavigation("settings")}
          >
            <img src={assets.settings} alt="Settings Icon" />
            <h1>Settings</h1>
          </div>
        </div>
      </div>
      <div className="lower-container">
        <div onClick={logout}>
          <img src={assets.logout} alt="Logout Icon" />
          <h1>Logout</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
