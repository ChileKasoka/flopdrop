import { useState } from "react";
import axios from "axios";
import { User, Mail, Lock } from "lucide-react";
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
      window.location.href = "/login";
    } catch (err) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>🎧 Join the Vibe</h2>
        <p className="subtitle">Create your account and start your music journey</p>

        <form onSubmit={handleSubmit}>
          
          <div className="input-group">
            <User size={18} />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

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

          <button type="submit">Create Account</button>
        </form>

        <p className="redirect-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;