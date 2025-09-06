import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <h3>💦 FlopDrop</h3>
          <p>
            FlopDrop is the ultimate music platform for producers. Browse, play,
            and discover the latest Chonk beats, collaborate with other
            producers, and take your music to the next level.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#beats">Beats</a></li>
            <li><a href="#producers">Producers</a></li>
            <li><a href="#tutorials">Tutorials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@flopdrop.com</p>
          <p>Phone: +260 123 456 789</p>
          <p>Location: Lusaka, Zambia</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://twitter.com/flopdrop" target="_blank">🐦</a>
            <a href="https://instagram.com/flopdrop" target="_blank">📸</a>
            <a href="https://facebook.com/flopdrop" target="_blank">📘</a>
            <a href="https://youtube.com/flopdrop" target="_blank">▶️</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 FlopDrop. All rights reserved. | <a href="#terms">Terms</a> | <a href="#privacy">Privacy Policy</a></p>
      </div>
    </footer>
  );
}
