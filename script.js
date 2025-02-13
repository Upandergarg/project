document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        document.querySelector('.background-animation').style.transform = 
            `translateY(${scrolled * 0.5}px)`;
    });

    // Add animation to product cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.product-card').forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.8s ease';
        observer.observe(card);
    });
});

// Add glitter effect to navbar on hover
const navbar = document.querySelector('.navbar');
navbar.addEventListener('mouseover', function() {
    this.style.background = 'rgba(0, 0, 0, 0.95)';
    this.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.3)';
});

navbar.addEventListener('mouseout', function() {
    this.style.background = 'rgba(0, 0, 0, 0.9)';
    this.style.boxShadow = 'none';
});
