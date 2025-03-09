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
      <h1>Dashboard Overview</h1>

      <Profile />
      <ProgressTracking />
      <Notifications />
      <CreditScoreSimulator />
      
      {/* Add the Personalized Tips section here */}
      <PersonalizedTips />

      <FAQ />
    </div>
  );
}

export default Dashboard;
