// Function for smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close the mobile menu after clicking a link
        const nav = document.querySelector('nav');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// Sticky Navbar & Shadow on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Optional: Highlight active navigation link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // Adjusted for sticky header
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.href.includes(current)) {
            a.classList.add('active');
        }
    });
});