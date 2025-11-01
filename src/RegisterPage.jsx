import { useState } from "react";
import axios from "axios";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/auth/register", formData);
      alert("Registration successful!");
      console.log(res.data);
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            value={formData.username}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>

        <p className="redirect-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
