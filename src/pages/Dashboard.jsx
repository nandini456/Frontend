// src/pages/Dashboard.jsx
import React from "react";
import "./Dashboard.css";

import Profile from "./dashboard/Profile";
import ProgressTracking from "./dashboard/ProgressTracking";
import Notifications from "./dashboard/Notifications";
import CreditScoreSimulator from "./dashboard/CreditScoreSimulator";
import FAQ from "./dashboard/FAQ";
import PersonalizedTips from "./dashboard/PersonalizedTips";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <h1>Welcome to Your Dashboard</h1>
      <Profile />
      <ProgressTracking />
      <Notifications />
      <CreditScoreSimulator />
      <PersonalizedTips />
      <FAQ />
    </div>
  );
}

export default Dashboard;
