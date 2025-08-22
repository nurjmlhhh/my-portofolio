import { useState, useEffect } from "react";
import "./App.css";
import profilImg from "./assets/profil.jpg";
import novelmiImg from "./assets/novelmi.png";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaEnvelope,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".section, .hero, .project-card, .skill-card, .cert-card"
    );

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      revealElements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 80) {
          el.classList.add("reveal");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      {/* === Navbar === */}
      <nav className="navbar">
        <h1 className="logo">
          Jamilah's <span>Portofolio</span>
        </h1>
        <div className="links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn-theme"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* === Hero === */}
      <section className="hero">
        <div className="hero-text">
          <h2>
            Hi, I'm <span className="highlight">Nur Jamilah</span>
          </h2>
          <h3 className="section-title">Junior Backend Developer</h3>
          <p className="section-text">
            I'm a junior programmer with a focus on backend development. I’m
            passionate about building efficient, structured, and scalable
            systems. Experienced with databases, APIs, and programming logic,
            and committed to continuous learning.
          </p>
          <a href="#projects" className="btn">
            View My Work
          </a>
        </div>
        <div className="hero-img">
          <img src={profilImg} className="profilImg" alt="profile" />
        </div>
      </section>

      {/* === About === */}
      <section id="about" className="section">
        <h3 className="section-title">About Me</h3>
        <p className="section-text">
          I’m passionate about technology and backend systems. My goal is to
          become a reliable backend engineer who builds applications that are
          scalable and easy to maintain.
        </p>
      </section>

      {/* === Skills === */}
      <section id="skills" className="section skills">
        <h3 className="section-title">Skills</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <h4>Frontend</h4>
            <ul>
              <li>
                <FaReact className="icon react" /> React / Next.js
              </li>
              <li>
                <FaHtml5 className="icon html" /> HTML
              </li>
              <li>
                <FaCss3Alt className="icon css" /> CSS
              </li>
              <li>
                <SiTailwindcss className="icon tailwind" /> TailwindCSS
              </li>
              <li>
                <SiJavascript className="icon js" /> JavaScript
              </li>
              <li>
                <SiTypescript className="icon ts" /> TypeScript
              </li>
            </ul>
          </div>

          <div className="skill-card">
            <h4>Backend</h4>
            <ul>
              <li>
                <FaNodeJs className="icon node" /> Node.js / Express
              </li>
              <li>
                <SiExpress className="icon express" /> RESTful API
              </li>
              <li>
                <SiMongodb className="icon mongo" /> MongoDB
              </li>
              <li>
                <SiMysql className="icon mysql" /> MySQL
              </li>
            </ul>
          </div>

          <div className="skill-card">
            <h4>Tools</h4>
            <ul>
              <li>
                <FaGithub className="icon git" /> Git / GitHub
              </li>
              <li>
                <FaDocker className="icon docker" /> Docker
              </li>
              <li>📮 Postman</li>
            </ul>
          </div>

          <div className="skill-card">
            <h4>Other</h4>
            <ul>
              <li>🧠 Problem Solving</li>
              <li>📌 Agile / Scrum</li>
              <li>🎨 UI/UX Basics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Projects === */}
      <section id="projects" className="section projects">
        <h3 className="section-title">Projects</h3>
        <div className="project-grid">
          {[
            {
              id: 1,
              title: "Perpustakaan",
              desc: "Management Perpustakaan",
              img: novelmiImg,
              link: "https://github.com/nurjmlhhh/perpustakaan",
              tools: ["Java", "Springboot", "SQLyog", "Swagger"],
            },
            {
              id: 2,
              title: "Sistem Informasi Akademik",
              desc: "Backend Java Fundamental",
              img: novelmiImg,
              link: "https://github.com/nurjmlhhh/sistem-informasi-akademik",
              tools: ["Java", "Springboot", "SQLyog"],
            },
            {
              id: 3,
              title: "NovelMi",
              desc: "Blog platform using Next.js and Tailwind.",
              img: novelmiImg,
              link: "https://github.com/nurjmlhhh/novelmi",
              tools: ["HTML", "CSS", "JavaScript"],
            },
            {
              id: 4,
              title: "Aplikasi Pelaporan Pajak (PPH 21)",
              desc: "Pelaporan pajak sederhana berbasis C.",
              img: novelmiImg,
              link: "https://github.com/nurjmlhhh/novelmi",
              tools: ["C"],
            },
            {
              id: 5,
              title: "Smart Class",
              desc: "A simple class management system.",
              img: novelmiImg,
              link: "https://github.com/nurjmlhhh/smart-class-2",
              tools: ["Node.js", "Express", "PostgreSQL"],
            },
          ].map((p) => (
            <div key={p.id} className="project-card">
              <img src={p.img} alt={p.title} />
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <div className="project-tools">
                {p.tools.map((tool, i) => (
                  <span key={i} className="tool-tag">
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-project"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* === Certificates === */}
      <section id="certificates" className="section certificates">
        <h3 className="section-title">Certificates</h3>
        <div className="cert-grid">
          {[
            {
              id: 1,
              title: "JavaScript Programming",
              desc: "Fundamentals of JavaScript programming.",
              img: novelmiImg,
            },
            {
              id: 2,
              title: "Backend Development with Node.js",
              desc: "REST API and server-side development.",
              img: novelmiImg,
            },
            {
              id: 3,
              title: "Database Design",
              desc: "Relational & NoSQL database fundamentals.",
              img: novelmiImg,
            },
          ].map((c) => (
            <div key={c.id} className="cert-card">
              <img src={c.img} alt={c.title} />
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === Contact === */}
      <section id="contact" className="section contact">
        <h3 className="section-title">Contact Me</h3>
        <p className="section-text">
          Feel free to reach out to me through the form or the platforms below
          🚀
        </p>
        <div className="contact-container">
          <div className="contact-links">
            <a href="mailto:nurjamilah@example.com">
              <FaEnvelope className="icon" /> Email
            </a>
            <a
              href="https://github.com/nurjmlhhh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/nurjamilah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" /> LinkedIn
            </a>
          </div>
          <form
            className="contact-form"
            action="mailto:nurjamilah@example.com"
            method="POST"
            encType="text/plain"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
