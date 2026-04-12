import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      {/* LEFT - LOGO */}
      <div className="logo">
        <img src="/flopdropwhite.png" alt="Logo" className="logo-img" />
        <span className="logo-text">FlopDrop</span>
      </div>

      {/* DESKTOP NAV */}
      <nav className="nav desktop-nav">
        <a href="/">Chonk Beats</a>
        <a href="/upload">My Library</a>
        <a href="/login">Login</a>
        <a href="/register" className="cta">Register</a>
      </nav>

      {/* MOBILE MENU BUTTON */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="/" onClick={() => setMenuOpen(false)}>Chonk Beats</a>
        <a href="/upload" onClick={() => setMenuOpen(false)}>My Library</a>
        <a href="/login" onClick={() => setMenuOpen(false)}>Login</a>
        <a href="/register" className="cta" onClick={() => setMenuOpen(false)}>
          Register
        </a>
      </div>

    </header>
  );
}