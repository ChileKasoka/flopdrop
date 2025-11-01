import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="/flopdropwhite.png"
          alt="FlopDrop Logo"
          className="logo-img"
        />
        <span className="logo-text">FlopDrop</span>
      </div>
      <div className="nav-bar">
        <nav className="nav">
          <a href="/">Chonk Beats</a>
          <a href="/upload">My Library</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </div>
    </header>
  );
}
