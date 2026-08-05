import "./Navbar.css";

import { navLinks } from "../../constants/navLinks";
import { siteConfig } from "../../constants/siteConfig";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#about" className="logo">
          {siteConfig.name}
        </a>

        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}