import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>Neil Patrick Peralta</h2>

        <p>
          Building modern websites and applications with
          React, TypeScript, and creativity.
        </p>

        <div className="footer-links">
          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © {year} Neil Patrick Peralta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}