import { useEffect } from "react";
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
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".section, .hero, .project-card, .card"
    );

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      revealElements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
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
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">
          Jamilah's <span>Portofolio</span>
        </h1>
        <div className="links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="section">
        <h3 className="section-title">About Me</h3>
        <p className="section-text">
          I’m passionate about technology and backend systems. My goal is to
          become a reliable backend engineer who builds applications that are
          scalable and easy to maintain.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <h3 className="section-title">Skills</h3>
        <div className="skills-grid">
          {/* Frontend */}
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

          {/* Backend */}
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

          {/* Tools */}
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

          {/* Other */}
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

      {/* Projects */}
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

      {/* Contact
      <section id="contact" className="section contact">
        <h3 className="section-title">Contact Me</h3>
        <div className="contact-links">
          <a
            href="mailto:nurjamilahh98@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            href="https://www.linkedin.com/in/nur-jamilah-966b98328/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" /> LinkedIn
          </a>
        </div>
      </section> */}

    </div>
  );
}
