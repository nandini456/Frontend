import React, { useState } from "react";
import "./CreditScoreSimulator.css";

function CreditScoreSimulator() {
  const [debt, setDebt] = useState(2000);
  const [payment, setPayment] = useState(200);

  const handleSimulation = (e) => {
    e.preventDefault();
    // Simple example: if payment is > 30% of debt, simulate a score improvement
    console.log("Simulating credit score with debt:", debt, "payment:", payment);
  };

  return (
    <section id="simulator" className="dashboard-section simulator-section">
      <h2>Credit Score Simulator</h2>
      <form onSubmit={handleSimulation}>
        <label>Current Debt ($)</label>
        <input
          type="number"
          value={debt}
          onChange={(e) => setDebt(e.target.value)}
        />

        <label>Monthly Payment ($)</label>
        <input
          type="number"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        />

        <button type="submit">Simulate</button>
      </form>
      <p className="simulator-note">
        *This is a simplified simulation. Actual credit scores may vary based on
        multiple factors.
      </p>
    </section>
  );
}

export default CreditScoreSimulator;
