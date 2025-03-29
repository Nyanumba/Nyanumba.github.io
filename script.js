// script.js

// 1. Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// 2. Highlight Active Section on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('h1, h2');
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });
    // Optionally, you could add logic to highlight a nav link if you add a navigation bar
});

// 3. Simple Project Filter (for future expansion)
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// 4. Theme Toggle (Dark/Light Mode)
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '8px 16px';
toggleButton.style.backgroundColor = '#2980b9';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#f4f4f9';
        document.querySelectorAll('.project, .code, .contacts').forEach(item => {
            item.style.backgroundColor = '#2c2c2c';
            item.style.color = '#f4f4f9';
        });
    } else {
        document.body.style.backgroundColor = '#f4f4f9';
        document.body.style.color = '#333';
        document.querySelectorAll('.project, .code, .contacts').forEach(item => {
            item.style.backgroundColor = '#fff';
            item.style.color = '#333';
        });
    }
});

// 5. Basic Console Greeting (for fun)
console.log("Welcome to Anthony Nyanumba's Portfolio!");