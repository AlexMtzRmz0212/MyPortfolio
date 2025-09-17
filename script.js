// Wait for the page content to load
document.addEventListener('DOMContentLoaded', () => {

  // Get the dropdown and image elements by their ID
  const sportDropdown = document.getElementById('sport-dropdown');
  const sportIcon = document.getElementById('sport-icon');

  // Create an object to map dropdown values to image paths
  const sportImagePaths = {
    mlb: 'https://www.mlbstatic.com/team-logos/league-on-dark/1.svg',
    nfl: 'https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg',
    nba: 'https://cdn.nba.com/logos/leagues/logo-nba.svg',
    nhl: 'https://media.d3.nhle.com/image/private/t_q-best/prd/assets/nhl/logos/nhl_shield_wm_on_dark_fqkbph'
  };

  // Add an event listener that fires when the dropdown value changes
  sportDropdown.addEventListener('change', (event) => {
    // Get the newly selected value (e.g., 'nfl')
    const selectedSport = event.target.value;
    
    // Find the corresponding image path from our object
    const newImagePath = sportImagePaths[selectedSport];
    
    // Update the image's src attribute
    if (newImagePath) {
      sportIcon.src = newImagePath;
    }
  });

});

document.addEventListener('DOMContentLoaded', function() {
  const sportDropdown = document.getElementById('sport-dropdown');
  
  sportDropdown.addEventListener('change', function() {
    const selectedSport = this.value;
    // You would implement the logic to change content based on selected sport
    console.log('Selected sport:', selectedSport);
    // This is where you would update the image, title, description, and links
  });
});

document.getElementById('sport-dropdown').addEventListener('change', function() {
  const selectedSport = this.value;
  
  // Hide all links
  document.querySelectorAll('.sport-links').forEach(link => {
    link.style.display = 'none';
  });
  
  // Show selected sport's links
  document.querySelector(`.${selectedSport}-links`).style.display = 'block';
});

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
