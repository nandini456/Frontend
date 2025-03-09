// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handleSubmit function triggers on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieve stored user profile from local storage
    const storedUser = JSON.parse(localStorage.getItem("userProfile"));
    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        navigate("/dashboard");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } else {
      alert("No account found. Please sign up first.");
    }
  };

  return (
    <div className="login_page">
      <div className="form-container">
        <h2 className="title">Sign In</h2>
        <form className="form" onSubmit={handleSubmit}>
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
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>
          <button className="sign" type="submit">
            Sign In
          </button>
        </form>

        <div className="social-message">
          <span className="line"></span>
          <span className="message">Login with social accounts</span>
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
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
