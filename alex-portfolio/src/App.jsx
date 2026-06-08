// src/App.jsx
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Background, Navbar, Footer } from '@alex_mtz/bittobyte-ui';

const PROFILE_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
];

const Projects = () => {
  const [selectedSport, setSelectedSport] = useState('mlb');

  const sportData = {
    mlb: {
      icon: 'https://www.mlbstatic.com/team-logos/league-on-dark/1.svg',
      demo: 'https://alexmtzrmz0212.github.io/MLB/',
      github: 'https://github.com/AlexMtzRmz0212/MLB',
      disabled: false,
    },
    nfl: {
      icon: 'https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg',
      demo: 'https://alexmtzrmz0212.github.io/NFL/',
      github: 'https://github.com/AlexMtzRmz0212/NFL',
      disabled: false,
    },
    nba: { icon: 'https://cdn.nba.com/logos/leagues/logo-nba.svg', disabled: true },
    nhl: { icon: 'https://media.d3.nhle.com/image/private/t_q-best/prd/assets/nhl/logos/nhl_shield_wm_on_dark_fqkbph', disabled: true },
  };

  const current = sportData[selectedSport];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4">
          <img src="https://miro.medium.com/v2/resize:fit:975/1*WdN6Wn7afiXdZ1QqvlaWXw@2x.jpeg" alt="Divisions and Leagues Maps" className="w-full h-44 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold">Divisions and Leagues Maps</h3>
          <p className="text-sm text-gray-400 flex-grow">Interactive Sports Leagues Maps that visualize all teams of each league with smart marker separation, division path connections, and team logos. All in a single interactive HTML page for each sport.</p>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-400">Sport:</label>
            <select
              value={selectedSport}
              onChange={(e) => setSelectedSport(e.target.value)}
              className="rounded-md border border-white/10 bg-gray-900 px-3 py-1.5 text-sm text-gray-300"
            >
              <option value="mlb">MLB</option>
              <option value="nfl">NFL</option>
              <option value="nba">NBA</option>
              <option value="nhl">NHL</option>
            </select>
            <img src={current.icon} alt="Sport icon" className="h-8 w-auto" />
          </div>
          <div className="flex gap-3 mt-auto">
            {current.disabled ? (
              <>
                <span className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-gray-500">Demo (Soon)</span>
                <span className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-gray-500">GitHub (Soon)</span>
              </>
            ) : (
              <>
                <a href={current.demo} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">Live Demo</a>
                <a href={current.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">GitHub</a>
              </>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4">
          <img src="Images/Sports Analytics Hub.png" alt="Sports Analytics Hub" className="w-full h-44 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold">Sports Hub</h3>
          <p className="text-sm text-gray-400 flex-grow">A dynamic dashboard for exploring sports data across different leagues. Features an interactive season timeline, quick stats, and a curated list of analytics project ideas, built with a clean UI and powered by Plotly for visualizations.</p>
          <div className="flex gap-3 mt-auto">
            <a href="https://alexmtzrmz0212.github.io/Sports/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">Live Demo</a>
            <a href="https://github.com/AlexMtzRmz0212/Sports" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4">
          <img src="Images/EE.png" alt="Express Entry Analysis" className="w-full h-44 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold">Express Entry Analysis</h3>
          <p className="text-sm text-gray-400 flex-grow">Data Analysis of Express Entry draw trends (CRS scores, draw sizes, and distributions).</p>
          <div className="flex gap-3 mt-auto">
            <a href="https://alexmtzrmz0212.github.io/ExpressEntryDrawsAnalysis/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">Live Demo</a>
            <a href="https://github.com/AlexMtzRmz0212/ExpressEntryDrawsAnalysis" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4">
          <img src="https://static.wixstatic.com/media/b141ee_8dbc2063ed9a4dd2bdce7cba5d97f29c~mv2.png/v1/fill/w_512,h_512,al_c,q_85,enc_avif,quality_auto/b141ee_8dbc2063ed9a4dd2bdce7cba5d97f29c~mv2.png" alt="Habits Analysis" className="w-full h-44 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold">Habits Analysis</h3>
          <p className="text-sm text-gray-400 flex-grow">Data analysis of personal habits and routines to identify patterns and areas for improvement.</p>
        </div>

      </div>
    </section>
  );
};

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      document.querySelectorAll('.reveal').forEach((el) => {
        if (el.getBoundingClientRect().top < triggerBottom) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-950 font-sans text-gray-100">
      <Background />
      <Navbar
        links={PROFILE_LINKS}
        logoText="Alex"
        logoHref="#home"
        githubUser="AlexMtzRmz0212"
      />

      <main className="pt-16">

        <section id="home" className="flex min-h-screen items-center justify-center px-6 text-center">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Hola, my name is{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Alejandro.
              </span>
            </h1>
            <p className="text-xl italic text-gray-400">(but you can call me Alex)</p>
            <p className="max-w-xl text-gray-400">AI & Automation Engineer | Software Developer | Data-Driven Problem Solver</p>
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-transform hover:scale-105"
            >
              View My Work
            </a>
          </div>
        </section>

        <section id="about" className="py-24 px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>I'm Alex. Engineer, Coder, and Genius (working on the billionaire, playboy, philanthropist part). Basically, the guy you call when your automation stops automating. I build SCADA systems, train my AIs as they are my pets, and design software tools that turn "this takes forever" into "done already?" Python, SQL, TensorFlow, PLCs. Yeah, I speak fluent machine, you name it.</p>
            <p>Human Languages? English and Spanish are a given. French and German are current bonus DLC I'm unlocking.</p>
            <p>When I'm not busy making machines smarter, I'm automating my own life, playing baseball, or taking things apart just to prove I can put them back together better than before. Efficiency is my superpower, coffee just keeps it running at max RPM.</p>
            <p>Go ahead and check out my projects below. If you like what you see or just want to chat about tech, sports, or life, hit me up in the contact section!</p>
          </div>
        </section>

        <Projects />

        <section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-400 mb-10">Let's connect! You can reach me on:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: 'https://github.com/AlexMtzRmz0212', label: 'GitHub' },
              { href: 'https://linkedin.com/in/alejandro-mtz', label: 'LinkedIn' },
              { href: 'mailto:alejandro.martinez.rmz97@gmail.com', label: 'Email' },
              { href: 'https://www.instagram.com/alexmtzrmz/', label: 'Instagram' },
              { href: 'https://www.facebook.com/Alejandro.Martinez.1997', label: 'Facebook' },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm text-gray-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

      </main>

      <Footer
        logoText="Alex"
        tagline="AI & Automation Engineer. Building things that work so you don't have to."
        githubUser="AlexMtzRmz0212"
        copyrightName="Alejandro Martinez"
      />

      <Analytics />
    </div>
  );
}