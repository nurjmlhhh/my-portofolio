import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import "./App.css"; 

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h3 className="section-title">Contact Me</h3>
      <p className="section-text">
        Feel free to reach out if you’d like to collaborate, ask questions, or
        just connect with me. 🚀
      </p>

      <div className="contact-links">
        <a href="mailto:nurjamilah@example.com">
          <FaEnvelope className="icon" />
          Email
        </a>

        <a
          href="https://github.com/nurjmlhhh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/nurjamilah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
          LinkedIn
        </a>

        <a href="tel:+6281234567890">
          <FaPhoneAlt className="icon" />
          Call Me
        </a>
      </div>
    </section>
  );
}
