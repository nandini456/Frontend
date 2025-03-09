// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  // Create state for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Added email field
  const [age, setAge] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [creditCardBalance, setCreditCardBalance] = useState("");
  const [loanBalance, setLoanBalance] = useState("");
  const [password, setPassword] = useState(""); // Password field

  // handleSubmit function for signup
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user details in local storage (for demo purposes only)
    const userProfile = {
      name,
      email,
      age,
      monthlyIncome,
      monthlyExpenses,
      creditScore,
      creditCardBalance,
      loanBalance,
      password,
    };
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    alert("Your account has been created successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="login_page">
      <div className="form-container">
        <h2 className="title">Create Your Account</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Monthly Income</label>
            <input
              type="number"
              placeholder="Enter your monthly income"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Monthly Expenses</label>
            <input
              type="number"
              placeholder="Enter your monthly expenses"
              value={monthlyExpenses}
              onChange={(e) => setMonthlyExpenses(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Current Credit Score</label>
            <input
              type="number"
              placeholder="Enter your credit score"
              value={creditScore}
              onChange={(e) => setCreditScore(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Credit Card Balance</label>
            <input
              type="number"
              placeholder="Enter your credit card balance"
              value={creditCardBalance}
              onChange={(e) => setCreditCardBalance(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Loan Balance</label>
            <input
              type="number"
              placeholder="Enter your loan balance"
              value={loanBalance}
              onChange={(e) => setLoanBalance(e.target.value)}
              required
            />
          </div>
          {/* Password Field */}
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="sign" type="submit">
            Sign Up
          </button>
        </form>
        <div className="social-message">
          <span className="line"></span>
          <span className="message">Sign up with social accounts</span>
          <span className="line"></span>
        </div>
        <div className="social-icons">
          <button className="icon">
            <FaGoogle size={24} />
          </button>
          <button className="icon">
            <FaTwitter size={24} />
          </button>
          <button className="icon">
            <FaGithub size={24} />
          </button>
        </div>
        <div className="signup">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
