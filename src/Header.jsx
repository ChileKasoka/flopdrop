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
          <a href="#chonkbeats">Chonk Beats</a>
          <a href="#keyboard">My Library</a>
          <a href="#chaos">Reviews</a>
        </nav>
      </div>
    </header>
  );
}
