import { useState, useEffect } from "react";
import "./App.css";
import profilImg from "./assets/profil.jpg";
import novelmiImg from "./assets/novelmi.png";
import trainingcImg from "./assets/trainingc.jpg";
import basisImg from "./assets/basis.jpg";
import strukturImg from "./assets/struktur.jpg";
import webImg from "./assets/web.jpg";
import javafundamentalImg from "./assets/javafundamental.jpg";
import javaImg from "./assets/java.jpg";
import reactImg from "./assets/react.jpg";
import gitImg from "./assets/git.jpg";
import instrukturImg from "./assets/instruktur.jpg";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMysql,
} from "react-icons/si";

export default function Home() {
  const [activeTab, setActiveTab] = useState("experience");

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
      <section id="about" className="section about">
        <div className="about-container">
          {/* Kiri: About Text */}
          <div className="about-text">
            <h3 className="section-title">About Me</h3>
            <p className="section-text">
              I am a final semester Accounting student with a strong passion for
              programming and software development. My background in accounting
              has shaped me to be detail-oriented and analytical, while my
              programming skills allow me to build efficient and practical
              digital solutions, especially in business and finance.
            </p>
          </div>

          {/* Kanan: Tabs */}
          <div className="about-box">
            <div className="about-tabs">
              <button
                className={activeTab === "experience" ? "tab active" : "tab"}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
              <button
                className={activeTab === "education" ? "tab active" : "tab"}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
            </div>

            {/* Isi Tab */}
            <div className="about-content">
              {activeTab === "experience" && (
                <ul>
                  <li>
                    💻 Magang Administrasi Akademik | Universitas Nasional PASIM
                  </li>
                  <li>
                    👥 Java Assistant Instructor | PUB (Pemberdayaan Umat Berkelanjutan) 
                  </li>
                </ul>
              )}
              {activeTab === "education" && (
                <ul>
                  <li>🎓 S1 Accounting - Pasim National University</li>
                  <li>🎓 MA YPI Nurul Huda - mathematics and natural sciences</li>
                </ul>
              )}
            </div>
          </div>
        </div>
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
            </ul>
          </div>

          <div className="skill-card">
            <h4>Backend</h4>
            <ul>
              <li>
                <FaNodeJs className="icon node" /> Node.js / Express
              </li>
              <li>
                ☕ Java
              </li>
              <li>
                <SiExpress className="icon express" /> RESTful API
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
              title: "Logic Algorithm (C Languange)",
              desc: "PUB Training Center Programming",
              img: trainingcImg,
            },
            {
              id: 1,
              title: "Data Structure (C Languange)",
              desc: "PUB Training Center Programming",
              img: strukturImg,
            },
            {
              id: 1,
              title: "Database Programming Training",
              desc: "PUB Training Center Programming",
              img: basisImg,
            },
            {
              id: 1,
              title: "Web Programming Training (HTML, CSS, JavaScript)",
              desc: "PUB Training Center Programming",
              img: webImg,
            },
            {
              id: 1,
              title: "JAVA Fundamental Backend",
              desc: "PUB Training Center Programming",
              img: javafundamentalImg,
            },
            {
              id: 1,
              title: "Advance JAVA Backend (Springboot)",
              desc: "PUB Training Center Programming",
              img: javaImg,
            },
            {
              id: 1,
              title: "React Programming Training",
              desc: "PUB Training Center Programming",
              img: reactImg,
            },
            {
              id: 1,
              title: "Git and GitHub Training",
              desc: "PUB Training Center Programming",
              img: gitImg,
            },
            {
              id: 1,
              title: "Java Assistant Instructor",
              desc: "PUB Training Center Programming",
              img: instrukturImg,
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
