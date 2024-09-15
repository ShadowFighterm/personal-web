
document.addEventListener('DOMContentLoaded', function(){
    showSection('home');
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    });
})


function showSection(sectionId)
{
    const buttonId = sectionId + "-btn";
    currentButton(buttonId);
    const homeSection = document.getElementById('home');
    const skillsSection = document.getElementById('skills');
    const projectsSection = document.getElementById('projects');
    const certificationsSection = document.getElementById('certifications');
    const contactSection = document.getElementById('contact');
    homeSection.style.display = (sectionId === "home")?'block':'none';
    skillsSection.style.display = (sectionId === "skills")?'block':'none';
    projectsSection.style.display = (sectionId === "projects")?'block':'none';
    certificationsSection.style.display = (sectionId === "certifications")?'block':'none';
    contactSection.style.display = (sectionId === "contact")?'block':'none';
}

function currentButton(buttonId)
{
    button = document.getElementById(buttonId)
    navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(navLink => {
        navLink.classList.remove('active-btn')
    });
    button.classList.add('active-btn');
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
