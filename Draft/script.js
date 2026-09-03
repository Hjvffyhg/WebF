// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple form validation (if you have a form)
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Track CTA clicks (optional)
document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('CTA clicked!');
        // You can send this to Google Analytics or your own analytics
    });
});