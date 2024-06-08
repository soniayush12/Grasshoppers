document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    function showSection(id) {
        document.querySelector(id).style.display = 'block';
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            hideAllSections();
            showSection(this.getAttribute('href'));
        });
    });

    // Show the first section by default
    if (sections.length > 0) {
        sections[0].style.display = 'block';
    }
});


function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
}
