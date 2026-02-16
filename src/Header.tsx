import "./Header.css";

interface HeaderProps {
  collapsed: boolean; // pass from App to know sidebar state
}

export default function Header({ collapsed }: HeaderProps) {
  return (
    <header className="header">
      <div className="app.logo">
        <img src="/flopdropwhite.png" alt="FlopDrop Logo" className="logo-img" />
        <span className="logo-text">FlopDrop</span>
      </div>

      <div
        className="nav-header-bar"
        style={{ marginLeft: collapsed ? "80px" : "240px" }} // match sidebar width
      >
        <nav className="nav-header">
          <a href="/">Chonk Beats</a>
          <a href="/upload">My Library</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </div>
    </header>
  );
}
