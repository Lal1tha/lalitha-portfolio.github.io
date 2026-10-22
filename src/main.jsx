
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Camera,
  Code2,
  Heart,
  Sparkles,
  Sun,
} from 'lucide-react';
import './style.css';


const projects = [
  {
    number: '01',
    title: 'IntelliVision',
    type: 'AI / COMPUTER VISION',
    description:
      'An AI-based vehicle verification system that processes vehicle images, detects relevant visual information, and uses OCR to extract text for automated vehicle data analysis.',
    tags: ['Python', 'OCR', 'Image Processing', 'Computer Vision'],
    note: 'Vehicle image intelligence',
    color: 'peach',
    github:
      'https://github.com/Lal1tha/intelligent-media-processing-pipeline',
  },
  {
    number: '02',
    title: 'EcoLens',
    type: 'AI / MACHINE LEARNING',
    description:
      'An environmental image recognition project focused on classifying images of environmental objects and exploring how image-based machine learning can support environmental awareness.',
    tags: ['Python', 'Machine Learning', 'Image Classification', 'Computer Vision'],
    note: 'Recognising our environment',
    color: 'sage',
    github: 'https://github.com/Lal1tha/EcoLens',
  },
  {
    number: '03',
    title: 'Campus Event Management',
    type: 'WEB DEVELOPMENT',
    description:
      'A web application for organising campus events, presenting event information, and helping students access details about college activities through a centralised platform.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    note: 'Simplifying campus events',
    color: 'sage',
    github:
      'https://github.com/Lal1tha/Campus-Event-Management-System',
  },
  {
    number: '04',
    title: 'Handwriting Recognition',
    type: 'AI / MACHINE LEARNING',
    description:
      'An image-processing project that focuses on recognising handwritten text or characters from images and converting handwritten input into machine-readable information.',
    tags: ['Python', 'OCR', 'Image Processing', 'Pattern Recognition'],
    note: 'Making handwriting readable',
    color: 'lilac',
    github: 'https://github.com/Lal1tha/HandwritingRecognition',
  },
];


function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Lalitha home">
        LN<span>.</span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#creative">Beyond the screen</a>
      </nav>

      <a className="header-contact" href="#contact">
        Let's connect <ArrowUpRight size={15} />
      </a>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />

      <main>
        {/* HERO: animated CSS sunrise */}
        <section className="hero" id="home">
          <div className="sunrise-background" aria-hidden="true">
            <div className="sun-glow" />
            <div className="sun-disc" />

            <div className="sun-cloud cloud-a" />
            <div className="sun-cloud cloud-b" />

            <div className="mountain mountain-far" />
            <div className="mountain mountain-mid" />
            <div className="mountain mountain-near" />

            <div className="foreground" />

            <span className="sky-star star-a">✦</span>
            <span className="sky-star star-b">✧</span>
            <span className="sky-star star-c">✳</span>
          </div>

          <div className="hero-grain" />

          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              MCA STUDENT · DEVELOPER · CREATIVE SOUL
            </div>

            <h1>
              Curious by nature.
              <br />
              <em>Creative</em> by heart.
            </h1>

            <p className="hero-copy">
              Hi, I'm <strong>Lalitha</strong> — exploring AI, building
              little ideas into real projects, and finding inspiration
              in the colours of the sky.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>

              <a className="text-link" href="#about">
                A little about me <ArrowDown size={15} />
              </a>
            </div>

            <div className="hero-sticker sticker-note">
              currently learning
              <br />
              <b>one idea at a time</b> ✿
            </div>
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <span className="bottom-line" />
            <span>MADE WITH CURIOSITY ✳</span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="intro section-wrap" id="about">
          <div className="section-kicker">
            <span>01</span> THE PERSON BEHIND THE PIXELS
          </div>

          <div className="intro-grid">
            <h2>
              I'm interested in
              <br />
              how things <em>work</em> —
              <br />
              and how they <em>feel.</em>
            </h2>

            <div className="intro-text">
              <p>
                I'm an MCA student with a growing interest in artificial
                intelligence, machine learning, and software development.
                I like exploring how technology can solve practical
                problems, then learning by building.
              </p>

              <p>
                Outside the code, you'll usually find me taking photos
                of the sky, crocheting something by hand, or collecting
                little moments that make an ordinary day feel special.
              </p>

              <div className="signature">
                Lalitha <span>♡</span>
              </div>
            </div>
          </div>

          <div className="interest-strip">
            <div>
              <Sun />
              <span>Sky watcher</span>
            </div>
            <div>
              <Code2 />
              <span>Curious builder</span>
            </div>
            <div>
              <Camera />
              <span>Photography</span>
            </div>
            <div>
              <Heart />
              <span>Handmade things</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-kicker">
              <span>02</span> THINGS I'M EXPLORING
            </div>

            <div className="skills-heading">
              <h2>
                A toolbox that's
                <br />
                <em>always growing.</em>
              </h2>

              <p>
                I believe in learning by doing. These are technologies
                I've explored or used in projects; I'm always working
                to deepen my understanding.
              </p>
            </div>

            <div className="skills-grid">
              <article className="skill-card skill-main">
                <div className="skill-icon">
                  <Code2 />
                </div>
                <span className="card-label">01 / BUILD</span>
                <h3>Development</h3>
                <div className="tag-list">
                  <span>Python</span>
                  <span>HTML & CSS</span>
                  <span>JavaScript</span>
                  <span>VB.NET</span>
                  <span>Kotlin</span>
                </div>
                <div className="card-doodle">{'{ }'}</div>
              </article>

              <article className="skill-card skill-ai">
                <div className="skill-icon">
                  <Sparkles />
                </div>
                <span className="card-label">02 / EXPLORE</span>
                <h3>AI & Data</h3>
                <div className="tag-list">
                  <span>Machine Learning</span>
                  <span>Computer Vision</span>
                  <span>OCR</span>
                  <span>NumPy</span>
                  <span>Pandas</span>
                  <span>Scikit-learn</span>
                </div>
                <div className="mini-sun" />
              </article>

              <article className="skill-card skill-tools">
                <div className="skill-icon">
                  <Heart />
                </div>
                <span className="card-label">03 / ORGANISE</span>
                <h3>Tools & Data</h3>
                <div className="tag-list">
                  <span>Git & GitHub</span>
                  <span>SQL Server</span>
                  <span>MySQL</span>
                  <span>Android Studio</span>
                </div>
                <div className="card-doodle doodle-star">✳</div>
              </article>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects-section section-wrap" id="projects">
          <div className="section-kicker">
            <span>03</span> A FEW THINGS I'VE BUILT
          </div>

          <div className="projects-heading">
            <h2>
              Ideas, meet <em>execution.</em>
            </h2>

            <p>
              A collection of projects where I explore ideas, experiment
              with technology, and turn what I learn into something practical.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.color}`}
                key={project.number}
              >
                <div className="project-top">
                  <span>{project.number} / PROJECT</span>

                  <a
                    className="project-arrow"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <div className="project-illustration">
                  <span className="illustration-shape" />
                  <span className="illustration-label">
                    {project.note}
                  </span>
                  <span className="illustration-spark">✳</span>
                </div>

                <div className="project-info">
                  <div className="card-label">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className="project-github-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="project-footnote">
            Explore the repositories to learn more about the code and
            implementation of each project.
          </p>
        </section>

        {/* CREATIVE SCRAPBOOK: REAL PHOTOGRAPHS */}
        <section className="creative-section" id="creative">
          <div className="section-wrap">
            <div className="section-kicker">
              <span>04</span> LIFE BEYOND THE SCREEN
            </div>

            <div className="creative-heading">
              <div>
                <h2>
                  My little corner
                  <br />
                  of <em>creativity.</em>
                </h2>

                <p>
                  A little photography, a little crochet, and the
                  beauty I find in everyday life.
                </p>
              </div>

              <span className="handwritten">made with love ↘</span>
            </div>

            <div className="scrapbook-grid">
              {/* Crochet rose */}
              <article className="scrap scrap-crochet">
                <div className="tape tape-pink" />

                <div className="photo-art">
                  <img
                    src="/images/crochet-rose.jpeg"
                    alt="Pink crochet rose handmade with yarn"
                    loading="lazy"
                  />
                </div>

                <div className="scrap-caption">
                  <b>Made by hand</b>
                  <span>01 · CROCHET & CRAFTS</span>
                  <p>A little rose, made one stitch at a time.</p>
                </div>
              </article>

              {/* Evening sky */}
              <article className="scrap scrap-photo">
                <div className="tape" />

                <div className="photo-art">
                  <img
                    src="/images/evening-sky.jpeg"
                    alt="Pink and purple evening sky photographed at sunset"
                    loading="lazy"
                  />
                </div>

                <div className="scrap-caption">
                  <b>Through my lens</b>
                  <span>02 · SKY PHOTOGRAPHY</span>
                  <p>Collecting colours from the evening sky.</p>
                </div>
              </article>

              {/* Flower photography */}
              <article className="scrap scrap-journal">
                <div className="tape tape-yellow" />

                <div className="photo-art">
                  <img
                    src="/images/flowers.jpeg"
                    alt="Pale yellow flowers captured in a photograph"
                    loading="lazy"
                  />
                </div>

                <div className="scrap-caption">
                  <b>Nature in focus</b>
                  <span>03 · NATURE PHOTOGRAPHY</span>
                  <p>Finding beauty in the smallest details.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section section-wrap" id="contact">
          <div className="contact-sun" />

          <div className="section-kicker">
            <span>05</span> THE NEXT CHAPTER
          </div>

          <div className="contact-content">
            <span className="handwritten contact-note">
              good things start with a hello ✿
            </span>

            <h2>
              Have an idea?
              <br />
              Let's make <em>something.</em>
            </h2>

            <p>
              I'm open to learning opportunities, interesting projects,
              and connecting with people who love building things.
            </p>

            <a
              className="button button-dark"
              href="mailto:lalitha19n@gmail.com"
            >
              Say hello <Mail size={17} />
            </a>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/Lal1tha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} />
              GitHub
              <ArrowUpRight size={13} />
            </a>

            <a
              href="https://www.linkedin.com/in/lalitha-n-5669b8279/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={17} />
              LinkedIn
              <ArrowUpRight size={13} />
            </a>

            <a href="#creative">
              <Camera size={17} />
              Creative corner
              <ArrowUpRight size={13} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="wordmark" href="#home">
          LN<span>.</span>
        </a>

        <p>Built with curiosity & a little sunshine.</p>

        <span>© {new Date().getFullYear()} Lalitha N</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
