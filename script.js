// Initialisierung der Variablen und Event-Listener
document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
    initializeSmoothScroll();
    initializeFAQ();
    initializeContactForm();
    initializeStatsAnimation();
    initializeLoadTime();
    initializeCurrentYear();
    initializeScrollProgressbar();
});

// Funktionen für den Hero-Slider
function initializeSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
    showSlide(currentSlide);

    document.querySelectorAll('.slider-control.prev').forEach(btn => btn.addEventListener('click', prevSlide));
    document.querySelectorAll('.slider-control.next').forEach(btn => btn.addEventListener('click', nextSlide));
}

// Funktionen für Smooth Scroll zu Ankern
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Funktionen für den FAQ-Bereich (Akkordeon)
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
}

// Funktionen für das Kontaktformular
function initializeContactForm() {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
        } else {
            alert('Bitte füllen Sie alle Felder aus.');
        }
    });
}

// Funktionen für die Statistik-Animation (Zahlen hochzählen)
function initializeStatsAnimation() {
    const statCards = document.querySelectorAll('.stat-card h3');

    function animateNumber(element, target) {
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = Math.floor(current) + (element.getAttribute('data-target') > 100 ? '+' : '');
        }, 16);
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    statCards.forEach(stat => observer.observe(stat));
}

// Funktionen für die Ladezeit-Anzeige
function initializeLoadTime() {
    const startTime = performance.now();
    window.addEventListener('load', () => {
        const endTime = performance.now();
        const loadTime = endTime - startTime;
        document.getElementById('loadTime').textContent = loadTime.toFixed(2);
    });
}

// Funktionen für die Anzeige des aktuellen Jahres im Footer
function initializeCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}

// Funktion für die Scroll-Progressbar
function initializeScrollProgressbar() {
    const scrollProgressbar = document.getElementById('scroll-progressbar');

    if (scrollProgressbar) {
        window.addEventListener('scroll', function() {
            const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
            const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollPosition / pageHeight) * 100;
            scrollProgressbar.style.width = scrollProgress + '%';
            scrollProgressbar.style.backgroundColor = '#007BFF'; // Blau für die Progressbar
        });
    }
}