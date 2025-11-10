// Workflow steps data
const workflowData = [
    {
        title: "Planning & Requirements",
        description: "Defining project scope, gathering requirements, and creating a detailed roadmap for development."
    },
    {
        title: "Design & Prototyping",
        description: "Creating wireframes, mockups, and interactive prototypes to visualize the final product before development begins."
    },
    {
        title: "Development",
        description: "Building robust, scalable applications using modern technologies and best practices to bring your vision to life."
    },
    {
        title: "Testing & QA",
        description: "Comprehensive testing to ensure quality, performance, and reliability across all features and use cases."
    },
    {
        title: "Deployment & Launch",
        description: "Smooth deployment and launch process with ongoing support to ensure your application runs flawlessly in production."
    }
];

// Workflow step functionality
document.addEventListener('DOMContentLoaded', function() {
    const workflowSteps = document.querySelectorAll('.workflow-step');
    const workflowTitle = document.getElementById('workflow-title');
    const workflowDescription = document.getElementById('workflow-description');

    workflowSteps.forEach((step, index) => {
        step.addEventListener('click', function() {
            // Remove active class from all steps
            workflowSteps.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked step
            this.classList.add('active');
            
            // Update content
            workflowTitle.textContent = workflowData[index].title;
            workflowDescription.textContent = workflowData[index].description;
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
