document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Mobile Menu Toggle
    // -------------------------------------------------------------
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });


    // -------------------------------------------------------------
    // 2. Skill Tabs Filtering
    // -------------------------------------------------------------
    const tabs = document.querySelectorAll('.skill-tab');
    const skillCards = document.querySelectorAll('.skill-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            const category = tab.getAttribute('data-category');

            skillCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'flex';
                    // Trigger reflow for animation
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    // Delay setting display none until transition completes
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });


    // -------------------------------------------------------------
    // 3. Interactive Terminal Shell
    // -------------------------------------------------------------
    const terminalInput = document.getElementById('terminal-input');
    const terminalBody = document.getElementById('terminal-body');
    const terminalOutput = document.querySelector('.terminal-output');
    const shortcutCmds = document.querySelectorAll('.terminal-btn-cmd');

    const rowingAscii = `
       o_
      /\\
     /  \\
    /____\\____
  =========🚣==
    `;

    const commands = {
        help: () => `
Available commands:
  <span class="text-accent">about</span>          Learn about Pedro's background
  <span class="text-accent">skills</span>         List core technologies
  <span class="text-accent">row</span>            Show Pedro's favorite sport (Rowing!)
  <span class="text-accent">contact</span>        Get direct contact credentials
  <span class="text-accent">agile</span>          Read Agile/Leadership philosophy
  <span class="text-accent">clear</span>          Clear the console screen
        `,
        about: () => `
<span class="text-info">Name:</span> Pedro Robson Leão
<span class="text-info">Role:</span> Senior Tech Leader & Software Architect
<span class="text-info">Experience:</span> Tech Lead at Bradesco (Current) | Tech Lead at Provider IT (Previous)
<span class="text-info">Summary:</span>
A seasoned technology leader with extensive IT industry experience spanning Finance, Telecom, and E-commerce. Focuses on building robust, scalable solutions on Unix/Linux platforms and leading high-performing collaborative engineering teams.
<span class="text-info">Global Reach:</span>
Led cross-border architecture deployments in Mexico, Argentina, Colombia, Peru, and Uruguay.
        `,
        skills: () => `
<span class="text-info">Languages:</span>         C, C++, Java, Python, JavaScript, Node.js, Shell Script
<span class="text-info">DevOps & Tools:</span>    Jenkins, Docker, Jira, Git
<span class="text-info">Databases:</span>         Oracle DB
<span class="text-info">Operating Systems:</span> Linux (Unix/Bash enthusiast), Windows
        `,
        row: () => `
<span class="text-success">${rowingAscii}</span>
Rowing is not just a sport; it's a practice of synchronization, focus, balance, and absolute teamwork. Just like engineering high-performance architectures!
        `,
        contact: () => `
<span class="text-info">Email:</span>     <a href="mailto:pedro.leao@gmail.com" class="text-accent">pedro.leao@gmail.com</a>
<span class="text-info">LinkedIn:</span>  <a href="https://www.linkedin.com/in/pedroleao/" target="_blank" class="text-accent">linkedin.com/in/pedroleao/</a>
<span class="text-info">GitHub:</span>    <a href="https://github.com/pedrorobsonleao" target="_blank" class="text-accent">github.com/pedrorobsonleao</a>
<span class="text-info">Instagram:</span> <a href="https://www.instagram.com/pedrorobsonleao/" target="_blank" class="text-accent">instagram.com/pedrorobsonleao/</a>
        `,
        agile: () => `
Certified Scrum Master.
<span class="text-success">"Compartilhe seu conhecimento, multiplique seu impacto. Seja um líder técnico de referência."</span>
Focuses on fostering a culture of mentorship, continuous integration, rapid feedback loops, and aligning engineering outcomes with business strategy.
        `,
        clear: () => {
            terminalOutput.innerHTML = '';
            return '';
        }
    };

    function executeCommand(cmdStr) {
        const cleanCmd = cmdStr.trim().toLowerCase();
        
        // Add prompt line to output
        const promptLine = document.createElement('p');
        promptLine.innerHTML = `<span class="terminal-prompt">visitor@pedroleao:~$</span> ${cmdStr}`;
        terminalOutput.appendChild(promptLine);

        if (cleanCmd !== '') {
            const responseLine = document.createElement('p');
            if (commands[cleanCmd]) {
                const output = commands[cleanCmd]();
                if (output !== '') {
                    responseLine.innerHTML = output;
                    terminalOutput.appendChild(responseLine);
                }
            } else {
                responseLine.innerHTML = `<span class="text-error">bash: command not found: ${cleanCmd}</span>. Type <span class="text-accent">help</span> for options.`;
                terminalOutput.appendChild(responseLine);
            }
        }
        
        // Scroll terminal to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    // Input submission
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = terminalInput.value;
            executeCommand(val);
            terminalInput.value = '';
        }
    });

    // Handle button shortcuts
    shortcutCmds.forEach(btn => {
        btn.addEventListener('click', () => {
            const cmd = btn.getAttribute('data-cmd');
            executeCommand(cmd);
        });
    });


    // -------------------------------------------------------------
    // 4. Contact Form Simulated Mailer
    // -------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.btn-submit');
            const submitText = submitBtn.querySelector('span');
            const originalText = submitText.textContent;
            
            // Show loading state
            submitBtn.disabled = true;
            submitText.textContent = 'Sending...';
            formStatus.className = 'form-status';
            formStatus.textContent = '';

            // Simulate server network request delay
            setTimeout(() => {
                // Form details
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                
                submitBtn.disabled = false;
                submitText.textContent = originalText;
                
                formStatus.classList.add('success');
                formStatus.textContent = `Thanks, ${name}! Your message has been successfully routed. I will reply to ${email} soon.`;
                
                // Clear fields
                contactForm.reset();
            }, 1500);
        });
    }

    // -------------------------------------------------------------
    // 5. Scroll Reveal Animations
    // -------------------------------------------------------------
    const revealElements = document.querySelectorAll('.about-card, .timeline-item, .skill-card, .terminal-window, .stat-img-wrapper');

    const checkReveal = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.classList.add('reveal-active');
            }
        });
    };

    // Initialize animation properties in CSS via JS to avoid plain loads
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Create a dynamic class rule for reveals
    const style = document.createElement('style');
    style.innerHTML = `
        .reveal-active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Run once at start
});
