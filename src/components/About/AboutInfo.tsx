import "./AboutInfo.css";

export default function AboutInfo() {
  return (
    <div className="hero-info">
      <span>Hello, I'm</span>

      <h2>Neil Patrick Peralta</h2>

      <h3>BS Information Technology Student</h3>

      <p>
        I create responsive websites and modern web applications using
        React, TypeScript, and Vite. I enjoy learning new technologies and
        building projects that combine creativity with clean code.
      </p>

      <div className="hero-buttons">
        <button>Projects</button>

        <button>Contact</button>
      </div>
    </div>
  );
}