import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <section id="profile" className="dashboard-section profile-section">
      <h2>Profile</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="John Doe" />

        <label>Age</label>
        <input type="number" placeholder="30" />

        <label>Monthly Income</label>
        <input type="number" placeholder="5000" />

        <label>Monthly Expenses</label>
        <input type="number" placeholder="3000" />

        <button>Update Profile</button>
      </form>
    </section>
  );
}

export default Profile;
