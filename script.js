document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            sections.forEach(section => {
                section.classList.remove('active');
            });

            const targetSection = document.getElementById(link.getAttribute('data-target'));
            targetSection.classList.add('active');
        });
    });

    
    document.getElementById('home-section').classList.add('active');
});
