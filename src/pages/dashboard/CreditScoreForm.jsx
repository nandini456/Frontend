import React, { useState } from "react";
import axios from "axios";
import { getCreditScorePrediction } from "../../api/ml"; // Keep only ONE import

import Profile from "./Profile";
import PersonalizedTips from "./PersonalizedTips";
import "./CreditScoreForm.css";

const CreditScoreForm = () => {
  const [formData, setFormData] = useState({
    monthly_income: "",
    monthly_expenses: "",
    credit_card_balance: "",
    loan_balance: "",
    on_time_payments: "",
    late_payments: "",
  });

  const [predictionData, setPredictionData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateDerivedValues = (data) => {
    const income = parseFloat(data.monthly_income) || 1;
    const expenses = parseFloat(data.monthly_expenses) || 0;
    const creditCardBalance = parseFloat(data.credit_card_balance) || 0;
    const loanBalance = parseFloat(data.loan_balance) || 0;

    return {
      ...data,
      debt_to_income: (creditCardBalance + loanBalance) / income,
      credit_utilization: creditCardBalance / income,
      savings_ratio: (income - expenses) / income,
      loan_to_income: loanBalance / income,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const computedData = calculateDerivedValues(formData);
    try {
      const res = await axios.post("http://localhost:5000/improve_score", computedData);
      console.log("Prediction Data:", res.data); // Debugging log
      setPredictionData(res.data);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="container">
      <h2>Credit Score Predictor</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label>{key.replace(/_/g, " ")}</label>
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Predict</button>
      </form>

      {predictionData && (
        <div>
          <Profile predictionData={predictionData} />
          <PersonalizedTips tips={predictionData.personalized_tips} />
        </div>
      )}
    </div>
  );
};

export default CreditScoreForm;
