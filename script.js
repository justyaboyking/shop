// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Shop Page Functionality
    initShopFunctionality();
    
    // Initialize Shopping Cart
    initShoppingCart();

    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;

    if (testimonialSlider && prevBtn && nextBtn) {
        // Set initial position
        updateSlider();

        // Previous button click
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
            updateSlider();
        });

        // Next button click
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
            updateSlider();
        });

        // Auto slide every 5 seconds
        setInterval(function() {
            currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
            updateSlider();
        }, 5000);

        // Update slider position
        function updateSlider() {
            testimonialSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .footer-links a, .cta-buttons a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only process links that point to an ID on the page
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    if (navMenu.classList.contains('show')) {
                        navMenu.classList.remove('show');
                    }
                    
                    // Scroll to the element
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Here you would typically send the data to your server
            // For demo purposes, we'll just log it and show a success message
            console.log('Form submitted:', formObject);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your message! We\'ll get back to you soon.';
            
            contactForm.innerHTML = '';
            contactForm.appendChild(successMessage);
        });
    }

    // Sticky header on scroll
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    if (header && heroSection) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }

    // Create images directory placeholder
    console.log('Note: Create an "images" directory and add the following images:');
    console.log('- hero-image.png');
    console.log('- hero-bg.jpg');
    console.log('- account-management.jpg');
    console.log('- growth-service.jpg');
    console.log('- content-creation.jpg');
    console.log('- instagram-ads.jpg');
    console.log('- client-1.jpg, client-2.jpg, client-3.jpg');
    console.log('- about-image.jpg');
    console.log('- product-hashtag-tool.jpg');
    console.log('- product-ebook.jpg');
    console.log('- product-templates.jpg');
    console.log('- product-analytics.jpg');
    console.log('- product-content-calendar.jpg');
    console.log('- product-feed-templates.jpg');
});

// Add CSS for mobile menu and sticky header
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        /* Mobile Menu Styles */
        @media screen and (max-width: 768px) {
            nav ul {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: #fff;
                flex-direction: column;
                padding: 20px;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                transform: translateY(-10px);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            nav ul.show {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            nav ul li {
                margin: 15px 0;
            }
        }
        
        /* Sticky Header */
        header.sticky {
            padding: 10px 0;
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
        
        /* Success Message */
        .success-message {
            padding: 20px;
            background-color: #e8f5e9;
            border-radius: 5px;
            text-align: center;
            color: #4CAF50;
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        .success-message i {
            margin-right: 10px;
            font-size: 1.3rem;
        }
        
        /* Testimonial Slider */
        .testimonial-slider {
            display: flex;
            transition: transform 0.5s ease;
        }
    `;
    document.head.appendChild(style);
});


// Shop Page Functionality
function initShopFunctionality() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (categoryButtons.length > 0 && productCards.length > 0) {
        // Category filtering
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const category = button.getAttribute('data-category');
                
                // Show/hide products based on category
                productCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Shopping Cart Functionality
function initShoppingCart() {
    // Cart state
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // DOM Elements
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartCount = document.querySelector('.cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    // Update cart count
    function updateCartCount() {
        if (cartCount) {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }
    
    // Update cart display
    function updateCartDisplay() {
        if (!cartItemsContainer) return;
        
        // Clear cart items container
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            // Show empty cart message
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Your cart is empty</p>
                </div>
            `;
            cartTotalPrice.textContent = '$0.00';
            return;
        }
        
        // Add cart items
        let total = 0;
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="cart-item-image">
                    <img src="images/product-${item.id}.jpg" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-index="${index}">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-index="${index}">
                        <button class="quantity-btn increase" data-index="${index}">+</button>
                    </div>
                </div>
                <button class="remove-item" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            
            cartItemsContainer.appendChild(cartItemElement);
        });
        
        // Update total price
        cartTotalPrice.textContent = `$${total.toFixed(2)}`;
        
        // Add event listeners to quantity buttons and remove buttons
        document.querySelectorAll('.quantity-btn.decrease').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.getAttribute('data-index'));
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                    saveCart();
                    updateCartDisplay();
                    updateCartCount();
                }
            });
        });
        
        document.querySelectorAll('.quantity-btn.increase').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.getAttribute('data-index'));
                cart[index].quantity++;
                saveCart();
                updateCartDisplay();
                updateCartCount();
            });
        });
        
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', () => {
                const index = parseInt(input.getAttribute('data-index'));
                const quantity = parseInt(input.value);
                if (quantity >= 1) {
                    cart[index].quantity = quantity;
                    saveCart();
                    updateCartDisplay();
                    updateCartCount();
                }
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.getAttribute('data-index'));
                cart.splice(index, 1);
                saveCart();
                updateCartDisplay();
                updateCartCount();
            });
        });
    }
    
    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Add item to cart
    function addToCart(id, name, price) {
        // Check if item already exists in cart
        const existingItemIndex = cart.findIndex(item => item.id === id);
        
        if (existingItemIndex !== -1) {
            // Increase quantity if item already exists
            cart[existingItemIndex].quantity++;
        } else {
            // Add new item to cart
            cart.push({
                id,
                name,
                price,
                quantity: 1
            });
        }
        
        saveCart();
        updateCartCount();
        updateCartDisplay();
        
        // Show cart modal
        if (cartModal) {
            cartModal.classList.add('open');
        }
    }
    
    // Initialize cart
    if (cartBtn && cartModal && closeCartBtn) {
        // Open cart modal
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cartModal.classList.add('open');
        });
        
        // Close cart modal
        closeCartBtn.addEventListener('click', () => {
            cartModal.classList.remove('open');
        });
        
        // Close cart when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('open');
            }
        });
    }
    
    // Add to cart buttons
    if (addToCartButtons) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-id');
                const name = button.getAttribute('data-name');
                const price = parseFloat(button.getAttribute('data-price'));
                
                addToCart(id, name, price);
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `<i class="fas fa-check-circle"></i> ${name} added to cart!`;
                
                document.body.appendChild(successMessage);
                
                // Remove success message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            });
        });
    }
    
    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            
            alert('Thank you for your purchase! Your order has been placed.');
            
            // Clear cart
            cart = [];
            saveCart();
            updateCartDisplay();
            updateCartCount();
            
            // Close cart modal
            cartModal.classList.remove('open');
        });
    }
    
    // Initialize cart display
    updateCartCount();
    updateCartDisplay();
}