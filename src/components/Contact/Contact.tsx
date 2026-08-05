import "./Contact.css";

import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Container>
        <SectionTitle
          title="Contact"
          subtitle="Let's build something together"
        />

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Email</h3>

            <p>neilpatrickperalta7@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>Location</h3>

            <p>Kidapawan City, Philippines</p>
          </div>

          <div className="contact-card">
            <h3>Availability</h3>

            <p>Open for collaborations and projects.</p>
          </div>
        </div>

        <div className="contact-buttons">
          <a href="mailto:neilpatrickperalta7@gmail.com">
            Email Me
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </Container>
    </section>
  );
}