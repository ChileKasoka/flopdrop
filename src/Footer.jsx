import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <img src="/flopdrop.png" alt="FlopDrop Logo" className="footer-logo" />

          <p>
            FlopDrop is a next-gen music platform for producers.
            Discover beats, collaborate, and grow your sound.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#beats">Beats</a>
          <a href="#producers">Producers</a>
          <a href="#tutorials">Tutorials</a>
          <a href="#contact">Contact</a>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>support@flopdrop.com</p>
          <p>+260 123 456 789</p>
        </div>

        {/* SOCIAL */}
        <div className="footer-column">
          <h4>Follow</h4>

          <div className="socials">
            <a href="#">🐦</a>
            <a href="#">📸</a>
            <a href="#">📘</a>
            <a href="#">▶️</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 FlopDrop • Built for creators 🎧
      </div>

    </footer>
  );
}