import React from "react";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import assets from "../assets/assets";
import MainContent from "../components/MainContent";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="main-container">
          <div className="dashboard-header-container">
            <div className="welcome-details">
              <h1>Welcome! Kumar</h1>
            </div>
            <div className="date-container">
              <p>12th Jan, 2024</p>
            </div>
          </div>
          <div className="header2-container">
            <div className="header2-btn-container">
              <h1>Board</h1>
              <a>
                <p>
                  <img src={assets.peopleIcon} alt="" />
                  Add People
                </p>
              </a>
            </div>
            <div className="header2-filter-container">
              <p>This week</p>
              <img src={assets.dropDownIcon} alt="" />
            </div>
          </div>
          <div className="main-content-container">
            <MainContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
