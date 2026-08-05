import "./About.css";

import AboutCard from "./AboutCard";
import AboutInfo from "./AboutInfo";

export default function About() {
  return (
    <section className="hero" id="about">
      <h1 className="background-name">
        NEIL
        <br />
        PATRICK
        <br />
        PERALTA
      </h1>

      <div className="hero-content">
        <AboutInfo />

        <AboutCard />
      </div>
    </section>
  );
}