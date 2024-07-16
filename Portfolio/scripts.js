document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#FF6347';  // Changes link color on hover
        });

        link.addEventListener('mouseleave', function() {
            this.style.color = '#00BFA5';  // Reverts link color
        });
    });
});
