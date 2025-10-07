// APMSS2026 Website JavaScript

// Typing animation for subtitle
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `<span class="typing-animation">${this.txt}</span>`;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Modern mobile menu functionality
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
                mobileNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
}

// Smooth scroll animation for sections and fade-in elements
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section, .fade-in-up');
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// More Info button functionality - updated for new structure
function initMoreInfoButton() {
    const moreInfoBtn = document.getElementById('more-info-button');
    const introSection = document.getElementById('intro');

    if (moreInfoBtn && introSection) {
        moreInfoBtn.addEventListener('click', () => {
            introSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

// Header transparency on scroll
function initHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled > 100) {
            header.style.backgroundColor = 'rgba(86, 86, 86, 0.95)';
        } else {
            header.style.backgroundColor = 'rgba(86, 86, 86, 0.9)';
        }
    });
}

// Loading screen
function initLoading() {
    const loading = document.querySelector('.loading');
    
    window.addEventListener('load', () => {
        if (loading) {
            loading.classList.add('fade-out');
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typing animation if on index page
    const typewriterElement = document.getElementById('typewriter-text');
    if (typewriterElement) {
        const words = [`Redefining Medicine:\nResilience,\nInnovation,\nand Global Impact...`];
        new TypeWriter(typewriterElement, words, 2000);
    }

    // Initialize all other functionality
    initMobileMenu();
    initScrollAnimations();
    initMoreInfoButton();
    initHeaderScroll();
    initLoading();
});

// Utility function for smooth navigation
function smoothNavigate(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// External registration link
function openRegistration() {
    window.open('https://app.hi.events/event/2771/asia-pacific-medical-students-symposium-apmss', '_blank');
}