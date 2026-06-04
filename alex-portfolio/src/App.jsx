import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";

const Navbar = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <span className="full-name">Alejandro</span>
          <span className="initials">Alex</span>
        </div>
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
          <li><a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
          <li><a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>
        <div className="theme-toggle-container">
          <div className="theme-toggle-wrapper">
            <span className="theme-label-left">Light</span>
            <button id="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark/light mode"></button>
            <span className="theme-label-right">Dark</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Projects = () => {
  const [selectedSport, setSelectedSport] = useState('mlb');

  const sportData = {
    mlb: {
      icon: 'https://www.mlbstatic.com/team-logos/league-on-dark/1.svg',
      demo: 'https://alexmtzrmz0212.github.io/MLB/',
      github: 'https://github.com/AlexMtzRmz0212/MLB',
      disabled: false
    },
    nfl: {
      icon: 'https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg',
      demo: 'https://alexmtzrmz0212.github.io/NFL/',
      github: 'https://github.com/AlexMtzRmz0212/NFL',
      disabled: false
    },
    nba: {
      icon: 'https://cdn.nba.com/logos/leagues/logo-nba.svg',
      disabled: true
    },
    nhl: {
      icon: 'https://media.d3.nhle.com/image/private/t_q-best/prd/assets/nhl/logos/nhl_shield_wm_on_dark_fqkbph',
      disabled: true
    }
  };

  const current = sportData[selectedSport];

  return (
    <section id="projects" className="section fade-in">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        
        <div className="project-card">
          <img src="https://miro.medium.com/v2/resize:fit:975/1*WdN6Wn7afiXdZ1QqvlaWXw@2x.jpeg" alt="Divisions and Leagues Maps" className="sport-image" />
          <h3 className="sport-title">Divisions and Leagues Maps</h3>
          <p className="sport-description">Interactive Sports Leagues Maps that visualize all teams of each league with smart marker separation, division path connections, and team logos. All in a single interactive HTML page for each sport.</p>
          
          <div className="sports-selector">
            <label htmlFor="sport-dropdown">Select Sport:</label>
            <select id="sport-dropdown" className="sport-dropdown" value={selectedSport} onChange={(e) => setSelectedSport(e.target.value)}>
              <option value="mlb">MLB</option>
              <option value="nfl">NFL</option>
              <option value="nba">NBA</option>
              <option value="nhl">NHL</option>
            </select>
            <img id="sport-icon" src={current.icon} alt="Sport icon" className="sport-icon" />
          </div>
          
          <div className="project-links">
            {current.disabled ? (
              <>
                <a href="#" className="btn small disabled">Live Demo (Coming Soon)</a>
                <a href="#" className="btn small disabled">GitHub (Coming Soon)</a>
              </>
            ) : (
              <>
                <a href={current.demo} className="btn small" target="_blank" rel="noreferrer">Live Demo</a>
                <a href={current.github} className="btn small" target="_blank" rel="noreferrer">GitHub</a>
              </>
            )}
          </div>
        </div>

        <div className="project-card">
          <img src="Images/Sports Analytics Hub.png" alt="Sports Analytics Hub" />
          <h3>Sports Hub</h3>
          <p>A dynamic dashboard for exploring sports data across different leagues. Features an interactive season timeline, quick stats, and a curated list of analytics project ideas, built with a clean UI and powered by Plotly for visualizations.</p>
          <div className="project-links">
            <a href="https://alexmtzrmz0212.github.io/Sports/" className="btn small" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/AlexMtzRmz0212/Sports" className="btn small" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <img src="Images/EE.png" alt="Express Entry Analysis" />
          <h3>Express Entry Analysis</h3>
          <p>Data Analysis of Express Entry draw trends (CRS scores, draw sizes, and distributions).</p>
          <div className="project-links">
            <a href="https://alexmtzrmz0212.github.io/ExpressEntryDrawsAnalysis/" className="btn small" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/AlexMtzRmz0212/ExpressEntryDrawsAnalysis" className="btn small" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <img src="https://static.wixstatic.com/media/b141ee_8dbc2063ed9a4dd2bdce7cba5d97f29c~mv2.png/v1/fill/w_512,h_512,al_c,q_85,enc_avif,quality_auto/b141ee_8dbc2063ed9a4dd2bdce7cba5d97f29c~mv2.png" alt="Habits Analysis" />
          <h3>Habits Analysis</h3>
          <p>Data analysis of personal habits and routines to identify patterns and areas for improvement.</p>
          <div className="project-links"></div>
        </div>

      </div>
    </section>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      document.querySelectorAll('.section').forEach(section => {
        if (section.getBoundingClientRect().top < triggerBottom) {
          section.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      
      <section id="home" className="section hero fade-in">
        <div className="hero-content">
          <h1>Hola, my name is <span>Alejandro.</span></h1>
          <p className="subtitle">(but you can call me Alex)</p>
          <p>AI & Automation Engineer | Software Developer | Data-Driven Problem Solver</p>
          <a href="#projects" className="btn" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
          }}>View My Work</a>
        </div>
      </section>

      <section id="about" className="section fade-in">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I’m Alex. Engineer, Coder, and Genius (working on the billionaire, playboy, philanthropist part). Basically, the guy you call when your automation stops automating. I build SCADA systems, train my AIs as they are my pets, and design software tools that turn “this takes forever” into “done already?” Python, SQL, TensorFlow, PLCs. Yeah, I speak fluent machine, you name it.<br/><br/>
          Human Languages? English and Spanish are a given. French and German are current bonus DLC I’m unlocking.<br/><br/>
          When I’m not busy making machines smarter, I’m automating my own life, playing baseball, or taking things apart just to prove I can put them back together better than before. Efficiency is my superpower, coffee just keeps it running at max RPM.<br/><br/>
          Go ahead and check out my projects below. If you like what you see or just want to chat about tech, sports, or life, hit me up in the contact section!
        </p>
      </section>

      <Projects />

      <section id="contact" className="section fade-in">
        <h2 className="section-title">Contact</h2>
        <p>Let's connect! You can reach me on:</p>
        <div className="contact-links">
          <a href="https://github.com/AlexMtzRmz0212" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
          <a href="https://linkedin.com/in/alejandro-mtz" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
          <a href="mailto:alejandro.martinez.rmz97@gmail.com"><i className="fas fa-envelope"></i> Email</a>
          <a href="https://www.instagram.com/alexmtzrmz/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
          <a href="https://www.facebook.com/Alejandro.Martinez.1997" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
        </div>
      </section>

      <footer>
        &copy; 2025 Alex. All rights reserved.
      </footer>

      <Analytics />
    </>
  );
}