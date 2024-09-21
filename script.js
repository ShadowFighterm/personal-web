
document.addEventListener('DOMContentLoaded', function(){
    showSection('home');
    initialize();
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

function initialize() {
    const webData = {
        skills: {
            frontend: ["HTML", "CSS", "JavaScript"], 
            backend: ["Node.js","MongoDB"], 
            soft: ["Problem Solving", "Communication", "Collaboration"]
        },
        projects: {
            solitaire: {
                heading: "Project Solitaire", 
                description: "Created a solitaire game using monogame in c#"
            },
            paint:{
                heading: "Project Paint",
                description: "Created a clone to MS Paint using python library tkinter"
            },
            shogi: {
                heading: "Project Shogi",
                description: "Created my first ever graphical game on console using console functions in c++"
            } 
        },
        certification: [
            "Winter Game Jam 2022 - Mindstorm Studio",
            "Rookie Game Jam 2024 - Mindstorm Studio"
        ]
    };

    // Populate Skills
    const skillsSection = document.querySelector('.skills-cards');
    skillsSection.innerHTML = '';  // Clear existing content

    const skillCategories = Object.keys(webData.skills);
    skillCategories.forEach(category => {
        const skillCard = document.createElement('div');
        skillCard.classList.add('card');

        const skillTitle = document.createElement('h3');
        skillTitle.textContent = capitalize(category);

        const skillList = document.createElement('p');
        skillList.textContent = webData.skills[category].join(", ");

        skillCard.appendChild(skillTitle);
        skillCard.appendChild(skillList);
        skillsSection.appendChild(skillCard);
    });

    // Populate Projects
    const projectsSection = document.querySelector('.projects-cards');
    projectsSection.innerHTML = '';  // Clear existing content

    const projectKeys = Object.keys(webData.projects);
    projectKeys.forEach(projectKey => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('card');

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = webData.projects[projectKey].heading;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = webData.projects[projectKey].description;

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        projectsSection.appendChild(projectCard);
    });

    // Populate Certifications
    const certificationSection = document.querySelector('#certifications ul');
    certificationSection.innerHTML = '';  // Clear existing content

    webData.certification.forEach(cert => {
        const certItem = document.createElement('li');
        certItem.textContent = cert;
        certificationSection.appendChild(certItem);
    });
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
