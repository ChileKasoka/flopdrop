import { useState } from "react";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/auth/login", formData);
      const token = res.data.access_token;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert("Login successful!");
        window.location.href = "/upload"; // redirect to upload page
      }
    } catch (err) {
      console.error(err);
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
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
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>

        <p className="redirect-text">
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
