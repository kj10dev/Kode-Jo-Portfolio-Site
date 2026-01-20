// Main JavaScript - GSAP Animations & Interactions
// Handles all page animations, smooth scrolling, and user interactions

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ===================================
// Navigation Toggle (Mobile)
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
    });
});

// ===================================
// Hero Section Animations
// ===================================
function initHeroAnimations() {
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate hero badge
    heroTimeline.from('.hero-badge', {
        opacity: 0,
        y: -30,
        duration: 0.8
    });

    // Stagger animate title lines
    heroTimeline.from('.hero-title-line', {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2
    }, '-=0.4');

    // Animate description
    heroTimeline.to('.hero-description', {
        opacity: 1,
        duration: 0.8
    }, '-=0.6');

    // Animate buttons
    heroTimeline.to('.hero-buttons', {
        opacity: 1,
        duration: 0.8
    }, '-=0.4');

    // Animate scroll indicator
    heroTimeline.to('.scroll-indicator', {
        opacity: 1,
        duration: 0.8
    }, '-=0.6');
}

// ===================================
// Smooth Scroll for Navigation
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const selector = this.getAttribute('href');
        const target = document.querySelector(selector);
        const offset = 80; // same offset you used

        if (target) {
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ===================================
// Section Animation on Scroll
// ===================================
function initScrollAnimations() {
    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // About text
    gsap.from('.about-text p', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Skill cards with stagger
    gsap.from('.skill-card', {
        scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 100,
        y: 50,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.4)'
    });

    // Project cards
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 100,
        y: 60,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Contact form
    gsap.from('.contact-form .form-group', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Contact info items
    gsap.from('.contact-item', {
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 100,
        x: 50,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
    });
}

// ===================================
// Skill Card Hover Animations
// ===================================
function initSkillCardAnimations() {
    const cards = document.querySelectorAll('.skill-card');
    if (cards.length === 0) return; // Guard: no cards to animate

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('.skill-icon'), {
                scale: 1.2,
                rotation: 360,
                duration: 0.6,
                ease: 'back.out(1.7)'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.skill-icon'), {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });
}

// ===================================
// Project Card Hover Effects
// ===================================
function initProjectCardAnimations() {
    const cards = document.querySelectorAll('.project-card');
    if (cards.length === 0) return; // Guard: no cards to animate

    cards.forEach(card => {
        const icon = card.querySelector('.project-icon');

        card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                scale: 1.2,
                rotation: 10,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });
}

// ===================================
// Modal Functionality
// ===================================
function initModals() {
    // Open modal
    document.querySelectorAll('[data-modal]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';

                // Animate modal entrance
                gsap.from(modal.querySelector('.modal-content'), {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.4,
                    ease: 'back.out(1.7)'
                });
            }
        });
    });

    // Close modal
    function closeModal(modal) {
        gsap.to(modal.querySelector('.modal-content'), {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Close on close button
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const modal = closeBtn.closest('.modal');
            closeModal(modal);
        });
    });

    // Close on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', () => {
            const modal = overlay.closest('.modal');
            closeModal(modal);
        });
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });
}

// ===================================
// Form Animations & Handling
// ===================================
function initFormAnimations() {
    const form = document.getElementById('contactForm');
    if (!form) return; // bail if missing

    const inputs = form.querySelectorAll('.form-input, .form-textarea');

    // Input focus animations
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                borderColor: '#b44cff',
                boxShadow: '0 0 20px rgba(180, 76, 255, 0.5)',
                duration: 0.3,
                ease: 'power2.out'
            });

            const label = input.previousElementSibling;
            if (label && label.classList.contains('form-label')) {
                gsap.to(label, {
                    color: '#b44cff',
                    y: -5,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                const label = input.previousElementSibling;
                if (label && label.classList.contains('form-label')) {
                    gsap.to(label, {
                        color: '#b0b0b0',
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            }
        });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.btn-submit');
        submitBtn.classList.add('loading');

        // Simulate form submission
        setTimeout(() => {
            submitBtn.classList.remove('loading');

            // Show success message
            gsap.to(submitBtn, {
                scale: 1.1,
                duration: 0.2,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut'
            });

            // Reset form
            form.reset();

            // Optional: Show success notification
            console.log('Form submitted successfully!');
        }, 2000);
    });
}

// ===================================
// Parallax Effects on Scroll
// ===================================
function initParallaxEffects() {
    // Parallax for section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -50,
            ease: 'none'
        });
    });
}

// ===================================
// Custom Cursor (Optional Enhancement)
// ===================================
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Add cursor styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .custom-cursor {
            width: 20px;
            height: 20px;
            border: 2px solid #b44cff;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease;
            mix-blend-mode: difference;
        }
        
        .custom-cursor.hover {
            transform: scale(2);
            background: rgba(180, 76, 255, 0.3);
        }
    `;
    document.head.appendChild(style);

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    // Enlarge cursor on interactive elements
    document.querySelectorAll('a, button, .project-card, .skill-card').forEach(elem => {
        elem.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        elem.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// ===================================
// Gallery Functionality
// ===================================
function initGallery() {
    // Find all gallery containers
    const galleryContainers = document.querySelectorAll('.gallery-container');
    
    galleryContainers.forEach((container) => {
        // Get all images/videos in this gallery
        const items = Array.from(container.querySelectorAll('.gallery-image'));
        
        if (items.length === 0) return;
        
        // Get gallery controls
        const prevBtn = container.querySelector('.gallery-prev');
        const nextBtn = container.querySelector('.gallery-next');
        const currentSpan = container.querySelector('.gallery-counter .current');
        const totalSpan = container.querySelector('.gallery-counter .total');
        
        // Update total count
        if (totalSpan) {
            totalSpan.textContent = items.length;
        }
        
        let currentIndex = 0;
        
        // Function to show specific slide
        function showSlide(index) {
            // Wrap index around
            if (index < 0) {
                currentIndex = items.length - 1;
            } else if (index >= items.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }
            
            // Hide all items
            items.forEach((item) => {
                item.classList.add('hidden');
                item.style.opacity = '0';
            });
            
            // Show current item with animation
            items[currentIndex].classList.remove('hidden');
            gsap.to(items[currentIndex], {
                opacity: 1,
                duration: 0.4,
                ease: 'power2.inOut'
            });
            
            // Update counter
            if (currentSpan) {
                currentSpan.textContent = currentIndex + 1;
            }
            
            // Update button states
            if (prevBtn) {
                prevBtn.disabled = items.length === 1;
            }
            if (nextBtn) {
                nextBtn.disabled = items.length === 1;
            }
        }
        
        // Next button
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showSlide(currentIndex + 1);
            });
        }
        
        // Previous button
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showSlide(currentIndex - 1);
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const modal = container.closest('.modal');
            const isModalActive = modal && modal.classList.contains('active');
            const isInCard = !modal; // In project card
            
            if (isModalActive || isInCard) {
                if (e.key === 'ArrowRight') {
                    showSlide(currentIndex + 1);
                } else if (e.key === 'ArrowLeft') {
                    showSlide(currentIndex - 1);
                }
            }
        });
        
        // Initialize - show first slide
        showSlide(0);
    });
}

// ===================================
// Initialize All Animations
// ===================================
function init() {
    initHeroAnimations();
    initScrollAnimations();
    initSkillCardAnimations();
    initProjectCardAnimations();
    initGallery();
    initModals();
    initFormAnimations();
    initParallaxEffects();
    initCustomCursor();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
