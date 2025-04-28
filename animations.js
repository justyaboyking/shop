/**
 * Premium Animation Library
 * High-end animations and transitions for luxury websites
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations when DOM is loaded
    initializeAnimations();
});

function initializeAnimations() {
    // Add animation classes to body after page load
    document.body.classList.add('loaded');
    
    // Initialize reveal animations
    initRevealAnimations();
    
    // Initialize parallax effects
    initParallaxEffects();
    
    // Initialize premium hover effects
    initPremiumHoverEffects();
    
    // Initialize smooth page transitions
    initSmoothPageTransitions();
    
    // Initialize luxury cursor effects
    initLuxuryCursorEffects();
}

/**
 * Reveal Animations
 * Elegant reveal animations for sections and elements
 */
function initRevealAnimations() {
    // Select all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal-element');
    
    // Create IntersectionObserver for reveal animations
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: unobserve after revealing
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe all reveal elements
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // Add reveal classes to sections
    addRevealClassesToSections();
}

/**
 * Add reveal classes to main sections
 */
function addRevealClassesToSections() {
    // Select all sections and important elements
    const sections = document.querySelectorAll('section');
    const featureCards = document.querySelectorAll('.feature-card');
    const serviceCards = document.querySelectorAll('.service-card');
    const pricingCards = document.querySelectorAll('.pricing-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const productCards = document.querySelectorAll('.product-card');
    
    // Add reveal classes with different delays
    sections.forEach(section => {
        section.classList.add('reveal-element');
    });
    
    // Add staggered animations to cards
    addStaggeredAnimations(featureCards, 'reveal-element', 100);
    addStaggeredAnimations(serviceCards, 'reveal-element', 150);
    addStaggeredAnimations(pricingCards, 'reveal-element', 200);
    addStaggeredAnimations(testimonialCards, 'reveal-element', 150);
    addStaggeredAnimations(productCards, 'reveal-element', 100);
}

/**
 * Add staggered animations to a collection of elements
 */
function addStaggeredAnimations(elements, className, delayIncrement) {
    elements.forEach((element, index) => {
        element.classList.add(className);
        element.style.transitionDelay = `${index * delayIncrement}ms`;
    });
}

/**
 * Parallax Effects
 * Subtle parallax scrolling effects for background elements
 */
function initParallaxEffects() {
    // Select elements for parallax effects
    const parallaxElements = document.querySelectorAll('.parallax');
    
    // Add parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.1;
            const offset = scrollY * speed;
            
            element.style.transform = `translateY(${offset}px)`;
        });
    });
    
    // Add parallax class to background elements
    addParallaxClassesToElements();
}

/**
 * Add parallax classes to background elements
 */
function addParallaxClassesToElements() {
    // Hero section background
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // Create parallax background elements
        const parallaxBg1 = document.createElement('div');
        parallaxBg1.className = 'parallax-bg parallax';
        parallaxBg1.setAttribute('data-speed', '0.05');
        heroSection.appendChild(parallaxBg1);
        
        const parallaxBg2 = document.createElement('div');
        parallaxBg2.className = 'parallax-bg parallax-bg-2 parallax';
        parallaxBg2.setAttribute('data-speed', '0.08');
        heroSection.appendChild(parallaxBg2);
    }
    
    // Add parallax to other sections
    const sections = document.querySelectorAll('.features, .testimonials, .cta');
    sections.forEach((section, index) => {
        const parallaxBg = document.createElement('div');
        parallaxBg.className = `parallax-bg parallax-section-${index} parallax`;
        parallaxBg.setAttribute('data-speed', `0.0${index + 3}`);
        section.appendChild(parallaxBg);
    });
}

/**
 * Premium Hover Effects
 * Elegant hover animations for interactive elements
 */
function initPremiumHoverEffects() {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', createRippleEffect);
    });
    
    // Add hover effects to cards
    addHoverEffectsToCards();
    
    // Add magnetic effect to CTA buttons
    addMagneticEffect(document.querySelectorAll('.btn-primary'));
}

/**
 * Create ripple effect on button hover
 */
function createRippleEffect(e) {
    const button = e.currentTarget;
    
    // Remove existing ripple elements
    const ripples = button.querySelectorAll('.ripple');
    ripples.forEach(ripple => ripple.remove());
    
    // Create new ripple element
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    button.appendChild(ripple);
    
    // Position the ripple
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    
    // Remove ripple after animation
    setTimeout(() => ripple.remove(), 1000);
}

/**
 * Add hover effects to cards
 */
function addHoverEffectsToCards() {
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });
    
    // Add hover effects to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });
}

/**
 * Add magnetic effect to elements
 */
function addMagneticEffect(elements) {
    elements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });
}

/**
 * Smooth Page Transitions
 * Elegant page transitions between sections
 */
function initSmoothPageTransitions() {
    // Create page transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);
    
    // Add transition to navigation links
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    navLinks.forEach(link => {
        // Skip links to other pages
        if (link.getAttribute('href').includes('.html')) return;
        
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Show overlay
                    overlay.classList.add('active');
                    
                    // After short delay, hide overlay and scroll to target
                    setTimeout(() => {
                        overlay.classList.remove('active');
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }, 400);
                }
            }
        });
    });
}

/**
 * Luxury Cursor Effects
 * Custom cursor effects for premium feel
 */
function initLuxuryCursorEffects() {
    // Create custom cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);
    
    // Update cursor position on mouse move
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .feature-card, .service-card, .pricing-card, .product-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursorDot.classList.add('active');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursorDot.classList.remove('active');
        });
    });
}

/**
 * Initialize on page load
 */
window.addEventListener('load', () => {
    // Add initial animation to hero section
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.classList.add('animate-in');
    }
    
    if (heroImage) {
        heroImage.classList.add('animate-in');
    }
    
    // Add page loaded class to body
    document.body.classList.add('page-loaded');
});