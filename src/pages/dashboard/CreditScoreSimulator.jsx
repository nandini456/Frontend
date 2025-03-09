import React, { useState } from "react";
import axios from "axios";
import "./CreditScoreSimulator.css";

function CreditScoreSimulator() {
  const [formData, setFormData] = useState({
    user_id: "U1001",
    name: "",
    age: "",
    monthly_income: "",
    monthly_expenses: "",
    current_credit_score: "",
    credit_card_balance: "",
    loan_balance: "",
    ontime_payment: "",
    onlate_payment: "",
  });

  const [predictionResult, setPredictionResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSimulation = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/predict", formData);
      setPredictionResult(response.data);
    } catch (error) {
      console.error("Prediction failed:", error);
    }
  };

  return (
    <section id="simulator" className="dashboard-section simulator-section">
      <h2>Credit Score Simulator</h2>
      <form onSubmit={handleSimulation}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Age</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />

        <label>Monthly Income ($)</label>
        <input type="number" name="monthly_income" value={formData.monthly_income} onChange={handleChange} required />

        <label>Monthly Expenses ($)</label>
        <input type="number" name="monthly_expenses" value={formData.monthly_expenses} onChange={handleChange} required />

        <label>Current Credit Score</label>
        <input type="number" name="current_credit_score" value={formData.current_credit_score} onChange={handleChange} required />

        <label>Credit Card Balance ($)</label>
        <input type="number" name="credit_card_balance" value={formData.credit_card_balance} onChange={handleChange} required />

        <label>Loan Balance ($)</label>
        <input type="number" name="loan_balance" value={formData.loan_balance} onChange={handleChange} required />

        <label>On-time Payments</label>
        <input type="number" name="ontime_payment" value={formData.ontime_payment} onChange={handleChange} required />

        <label>Late Payments</label>
        <input type="number" name="onlate_payment" value={formData.onlate_payment} onChange={handleChange} required />

        <button type="submit">Simulate</button>
      </form>

      {predictionResult && (
        <div className="prediction-results">
          <h3>Prediction Results</h3>
          <p><strong>Current Credit Score:</strong> {predictionResult.current_credit_score}</p>
          <p><strong>Potential Credit Score:</strong> {predictionResult.potential_credit_score}</p>
          <h4>Recommended Actions:</h4>
          <ul>
            {predictionResult.recommended_actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
          <h4>Personalized Tips:</h4>
          <ul>
            {predictionResult.personalized_tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}

      <p className="simulator-note">
        *This is a simplified simulation. Actual credit scores may vary based on multiple factors.
      </p>
    </section>
  );
}

export default CreditScoreSimulator;
