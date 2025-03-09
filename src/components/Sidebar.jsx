// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaUser,
  FaChartLine,
  FaBell,
  FaTools,
  FaQuestionCircle,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar__header">
        <h2>Dashboard Menu</h2>
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>

      <div className="sidebar__links">
        {/* Using hash links for sections within Dashboard */}
        <a href="/dashboard#profile" onClick={toggleSidebar}>
          <FaUser className="sidebar-icon" /> Profile
        </a>
        <a href="/dashboard#progress" onClick={toggleSidebar}>
          <FaChartLine className="sidebar-icon" /> Progress Tracking
        </a>
        <a href="/dashboard#notifications" onClick={toggleSidebar}>
          <FaBell className="sidebar-icon" /> Notifications
        </a>
        <a href="/dashboard#simulator" onClick={toggleSidebar}>
          <FaTools className="sidebar-icon" /> Credit Score Simulator
        </a>
        <a href="/dashboard#faq" onClick={toggleSidebar}>
          <FaQuestionCircle className="sidebar-icon" /> FAQ
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
