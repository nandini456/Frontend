// src/pages/dashboard/PersonalizedTips.jsx
import React from "react";
import "./PersonalizedTips.css";

function PersonalizedTips() {
  return (
    <section
      id="personalized-tips"
      className="dashboard-section personalized-tips-section"
    >
      <h2>Personalized Tips</h2>
      <p>
        Here are some tailored suggestions to help you improve your credit
        score:
      </p>
      <ul>
        <li>
          <strong>Pay On Time:</strong> Late payments can drastically lower your
          credit score. Set up auto-pay or reminders to ensure you never miss a
          due date.
        </li>
        <li>
          <strong>Maintain Low Credit Utilization:</strong> Aim to use less than
          30% of your credit limit. High balances can signal risk to lenders.
        </li>
        <li>
          <strong>Keep Old Accounts Open:</strong> The length of your credit
          history matters. Closing old accounts can shorten your history and
          reduce your score.
        </li>
        <li>
          <strong>Review Credit Reports:</strong> Regularly check for errors or
          fraudulent activity. Disputing inaccuracies can give your score a
          quick boost.
        </li>
        <li>
          <strong>Diversify Credit Types:</strong> Having both revolving (e.g.
          credit cards) and installment (e.g. car loan) accounts can improve
          your credit mix.
        </li>
      </ul>
      <p className="tips-footer">
        Need more guidance? Explore our <em>Credit Score Simulator</em> or speak
        to one of our financial advisors for personalized assistance.
      </p>
    </section>
  );
}

export default PersonalizedTips;
