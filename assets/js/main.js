// Smooth scrolling
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Section fade-in on scroll
const sections = document.querySelectorAll('.section');

function checkSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

function handleNavbarScroll() {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', () => {
  checkSections();
  handleNavbarScroll();
});
window.addEventListener('load', checkSections);

// Dark/light mode toggle
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.querySelector('.theme-label');
const body = document.body;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeLabel.textContent = 'Light';
} else {
  body.classList.remove('dark');
  themeLabel.textContent = 'Dark';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    themeLabel.textContent = 'Light';
    localStorage.setItem('theme', 'dark');
  } else {
    themeLabel.textContent = 'Dark';
    localStorage.setItem('theme', 'light');
  }
});

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});