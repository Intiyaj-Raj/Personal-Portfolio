// Custom Cursor
// Custom cursor disabled - using normal arrow cursor

// Fire Burst Effect on Click
document.addEventListener('click', (e) => {
    createFireBurst(e.clientX, e.clientY);
});

function createFireBurst(x, y) {
    const burst = document.createElement('div');
    burst.className = 'fire-burst';
    burst.style.left = (x - 30) + 'px';
    burst.style.top = (y - 30) + 'px';

    // Create center fire ball
    const centerFire = document.createElement('div');
    centerFire.className = 'fire-center';
    burst.appendChild(centerFire);

    // Create fire particles
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'fire-particle';

        // Random positioning for more natural effect
        const angle = (i * 30) + (Math.random() * 20 - 10);
        const distance = 20 + Math.random() * 15;
        const size = 6 + Math.random() * 4;

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-${distance}px)`;
        particle.style.animationDelay = `${i * 0.03}s`;

        // Random colors for variety
        const colors = [
            'radial-gradient(circle, #ff4444, #ff6600, #cc0000)',
            'radial-gradient(circle, #ff6600, #ff4444, #990000)',
            'radial-gradient(circle, #ff8800, #ff4444, #cc0000)',
            'radial-gradient(circle, #ffaa00, #ff6600, #cc0000)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        burst.appendChild(particle);
    }

    document.body.appendChild(burst);

    // Add screen shake effect for impact
    document.body.style.animation = 'screenShake 0.3s ease-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 300);

    setTimeout(() => {
        burst.remove();
    }, 1200);
}

// Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing Effect
const typingText = document.getElementById('typing-text');
const texts = ['Intiyaj', 'Student', 'Coder', 'Developer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
        typingText.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingText.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

// Start typing effect
typeEffect();

// Tabs functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Add active class to clicked button and corresponding pane
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

/*
// Testimonials Slider
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));

    testimonialCards[index].classList.add('active');
    testimonialDots[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

// Dots navigation
testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Auto-rotate testimonials
setInterval(nextTestimonial, 5000);
*/

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
}, observerOptions);


// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.section-title, .about-image, .about-text, .service-card, .portfolio-item, .certificate-card, .contact-info, .contact-form'
    );

    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cursor hover effects
// Cursor hover effects disabled - using normal cursor

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');

    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Navbar scroll effect
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Parallax effect
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');

    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
}, 16)); // ~60fps

