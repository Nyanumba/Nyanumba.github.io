// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional dark mode toggle (you can keep or remove)
const toggle = document.createElement('button');
toggle.textContent = 'Dark Mode';
toggle.className = 'dark-toggle';
document.body.appendChild(toggle);

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});