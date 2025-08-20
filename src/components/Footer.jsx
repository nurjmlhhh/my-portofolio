import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
// import "../App.css";

export default function Footer() {
  return (
    <footer className="footer pastel-footer">
      <div className="footer-grid">
        {/* Phone */}
        <div>
          <h4>Phone</h4>
          <p>0838-5442-6758</p>
        </div>

        {/* Email */}
        <div>
          <h4>Email</h4>
          <p>nurjamilahh98@gmail.com</p>
        </div>

        {/* Social */}
        <div>
          <h4>Follow Me In</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/nur-jamilah-966b98328/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/nurjmlhhh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          © 2025 By <span>NurJamilah</span>
        </div>
      </div>
    </footer>
  );
}
