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
const body = document.body;

// Initialize theme
let isDark = false;

themeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    isDark = !isDark;
    
    if (isDark) {
    body.classList.add('dark');
    } else {
    body.classList.remove('dark');
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

// Function to add GitHub Pages project
function addGitHubPagesProject(title, description, repoUrl, pageUrl, imageUrl) {
    const projectGrid = document.querySelector('.project-grid');
    
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
    <img src="${imageUrl || 'https://via.placeholder.com/400x250/2575fc/ffffff?text=GitHub+Pages'}" alt="${title}" />
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="project-links">
        <a href="${pageUrl}" class="btn small" target="_blank">Live Demo</a>
        <a href="${repoUrl}" class="btn small" target="_blank">GitHub</a>
    </div>
    `;
    
    projectGrid.appendChild(projectCard);
}

// Example usage - replace with your actual GitHub Pages project details
// addGitHubPagesProject(
//     "My GitHub Pages Project",
//     "This is a description of my GitHub Pages project.",
//     "https://github.com/your-username/your-repo-name",
//     "https://alexmtzrmz0212.github.io/MLB/",
//     "https://www.mlbstatic.com/team-logos/league-on-dark/1.svg"
// );
