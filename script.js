// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

// Intersection Observer for scroll-triggered animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll(
    '.benefit-card, .project-card, .team-member, .roadmap-step'
);

animatedElements.forEach(el => observer.observe(el));

// ==================== ROADMAP LINE ANIMATION ====================
const roadmapLine = document.getElementById('roadmap-line');
const roadmapSection = document.querySelector('.journey');

const roadmapObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            roadmapLine.classList.add('active');
            
            // Trigger rocket launch on last step
            setTimeout(() => {
                const rocket = document.getElementById('rocket');
                if (rocket) {
                    rocket.classList.add('launch');
                }
            }, 3000);
        }
    });
}, { threshold: 0.3 });

if (roadmapSection) {
    roadmapObserver.observe(roadmapSection);
}

// ==================== NAVBAR SCROLL EFFECT ====================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    }
    
    lastScroll = currentScroll;
});

// ==================== SMOOTH SCROLLING FOR CTA BUTTONS ====================
const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
        
        // You can add your application form logic here
        // For now, let's scroll to the hero or show an alert
        alert('Application form coming soon! Thank you for your interest in WeStart.');
    });
});

// ==================== PARALLAX EFFECT FOR GRADIENT ORBS ====================
window.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        
        orb.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// ==================== LIGHTNING BOLT RANDOM APPEARANCE ====================
const lightningBolts = document.querySelectorAll('.lightning-bolt');

function randomLightningFlash() {
    const randomBolt = lightningBolts[Math.floor(Math.random() * lightningBolts.length)];
    randomBolt.style.opacity = '0.4';
    
    setTimeout(() => {
        randomBolt.style.opacity = '0.1';
    }, 200);
}

setInterval(randomLightningFlash, 3000);

// ==================== CARD HOVER EFFECT WITH TILT ====================
const cards = document.querySelectorAll('.benefit-card, .project-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ==================== NUMBER COUNTER ANIMATION ====================
const numberHighlight = document.querySelector('.number-highlight');

const countUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
            entry.target.dataset.counted = 'true';
            animateNumber(entry.target);
        }
    });
}, { threshold: 0.5 });

function animateNumber(element) {
    const text = element.textContent;
    const match = text.match(/(\d+)/);
    
    if (match) {
        const targetNumber = parseInt(match[1]);
        const duration = 2000;
        const steps = 60;
        const increment = targetNumber / steps;
        const stepDuration = duration / steps;
        
        let currentNumber = 0;
        
        const counter = setInterval(() => {
            currentNumber += increment;
            
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(counter);
            }
            
            element.textContent = text.replace(/\d+/, Math.floor(currentNumber));
        }, stepDuration);
    }
}

if (numberHighlight) {
    countUpObserver.observe(numberHighlight);
}

// ==================== PROGRESSIVE REVEAL FOR ROADMAP STEPS ====================
const roadmapSteps = document.querySelectorAll('.roadmap-step');

roadmapSteps.forEach((step, index) => {
    const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
            }
        });
    }, { threshold: 0.5 });
    
    stepObserver.observe(step);
});

// ==================== SCROLL PROGRESS INDICATOR ====================
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollProgress = (window.pageYOffset / documentHeight) * 100;
    
    // You can use this to create a progress bar if needed
    // For now, we'll use it to trigger additional effects
    if (scrollProgress > 80) {
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.style.opacity = '1';
        }
    }
});

// ==================== TEAM MEMBER CARD STAGGER ANIMATION ====================
const teamMembers = document.querySelectorAll('.team-member');

const teamObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, { threshold: 0.3 });

teamMembers.forEach(member => teamObserver.observe(member));

// ==================== PROJECT CARDS SCALE ANIMATION ====================
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 150);
        }
    });
}, { threshold: 0.2 });

projectCards.forEach(card => projectObserver.observe(card));

// ==================== DYNAMIC GRADIENT BACKGROUND ====================
let gradientAngle = 0;

function animateGradient() {
    gradientAngle += 0.5;
    
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.background = `
            radial-gradient(circle at ${30 + Math.sin(gradientAngle * 0.01) * 10}% 50%, rgba(0, 201, 217, 0.15), transparent 50%),
            radial-gradient(circle at ${70 + Math.cos(gradientAngle * 0.01) * 10}% 50%, rgba(255, 163, 0, 0.15), transparent 50%),
            radial-gradient(circle at 50% ${80 + Math.sin(gradientAngle * 0.02) * 10}%, rgba(255, 0, 94, 0.15), transparent 50%)
        `;
    }
    
    requestAnimationFrame(animateGradient);
}

animateGradient();

// ==================== ENHANCED SCROLL INDICATOR ====================
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to expensive scroll operations
const debouncedScroll = debounce(() => {
    // Any expensive scroll operations can go here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== ACCESSIBILITY: KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c WeStart - Startup Acceleration Platform ', 
    'background: linear-gradient(135deg, #00C9D9, #FFA300, #FF005E); color: white; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Ready to transform your idea into reality? ', 
    'color: #00C9D9; font-size: 14px; font-weight: bold;');

