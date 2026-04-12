import { useState } from "react";
import axios from "axios";
import { Mail, Lock } from "lucide-react";
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
        window.location.href = "/upload";
      }
    } catch (err) {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>🎶 Welcome Back</h2>
        <p className="subtitle">Sign in and continue your vibe</p>

        <form onSubmit={handleSubmit}>
          
          <div className="input-group">
            <Mail size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <Lock size={18} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

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