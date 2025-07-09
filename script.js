// Cart functionality and interactive features for Beauty & Fashion Shop

// Initialize cart from localStorage or create empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const categoryButtons = document.querySelectorAll('.category-btn');
const productCards = document.querySelectorAll('.product-card');

// Mobile navigation toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Product filtering functionality
if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter products
            filterProducts(category);
        });
    });
}

function filterProducts(category) {
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease-in';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add to cart functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const name = e.target.getAttribute('data-name');
        const price = parseFloat(e.target.getAttribute('data-price'));
        
        addToCart(name, price);
        showNotification(`${name} added to cart!`);
    }
});

function addToCart(name, price) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart display if on cart page
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}

// Display cart items
function displayCart() {
    const cartEmpty = document.getElementById('cart-empty');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartSummary = document.getElementById('cart-summary');
    
    if (!cartEmpty || !cartItemsList || !cartSummary) return;
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItemsList.style.display = 'none';
        cartSummary.style.display = 'none';
        return;
    }
    
    cartEmpty.style.display = 'none';
    cartItemsList.style.display = 'block';
    cartSummary.style.display = 'block';
    
    // Display cart items
    cartItemsList.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image ${getCategoryClass(item.name)}">
                <span>${getItemIcon(item.name)}</span>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsList.appendChild(cartItem);
    });
    
    // Update summary
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 5.99;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Helper functions for cart display
function getCategoryClass(itemName) {
    const nailItems = ['Gel Nail Polish Set', 'Nail Art Kit', 'Nail Care Set'];
    const hairItems = ['Professional Hair Dryer', 'Hydrating Shampoo', 'Hair Styling Kit'];
    const makeupItems = ['Luxury Lipstick Set', 'Eyeshadow Palette', 'Foundation & Concealer'];
    const clothesItems = ['Summer Dress', 'Casual Blouse', 'Designer Handbag'];
    
    if (nailItems.includes(itemName)) return 'nails-bg';
    if (hairItems.includes(itemName)) return 'hair-bg';
    if (makeupItems.includes(itemName)) return 'makeup-bg';
    if (clothesItems.includes(itemName)) return 'clothes-bg';
    
    return 'nails-bg'; // default
}

function getItemIcon(itemName) {
    const nailItems = ['Gel Nail Polish Set', 'Nail Art Kit', 'Nail Care Set'];
    const hairItems = ['Professional Hair Dryer', 'Hydrating Shampoo', 'Hair Styling Kit'];
    const makeupItems = ['Luxury Lipstick Set', 'Eyeshadow Palette', 'Foundation & Concealer'];
    const clothesItems = ['Summer Dress', 'Casual Blouse', 'Designer Handbag'];
    
    if (nailItems.includes(itemName)) return '💅';
    if (hairItems.includes(itemName)) return '💇‍♀️';
    if (makeupItems.includes(itemName)) return '💄';
    if (clothesItems.includes(itemName)) return '👗';
    
    return '✨'; // default
}

// Demo functions for cart page
function addSampleItem(name, price) {
    addToCart(name, price);
    showNotification(`${name} added to cart!`);
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    showNotification('Cart cleared!');
}

// Checkout functionality
document.addEventListener('DOMContentLoaded', () => {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Your cart is empty!', 'error');
                return;
            }
            
            // Simulate checkout process
            showNotification('Processing checkout...', 'info');
            setTimeout(() => {
                showNotification('Order placed successfully! Thank you for your purchase!', 'success');
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                displayCart();
            }, 2000);
        });
    }
    
    // Initialize cart display if on cart page
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
});

// Notification system
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation for contact form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Sending message...', 'info');
            
            // Submit the form
            this.submit();
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Lazy loading for images (placeholder for future implementation)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add loading animation for buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart') || 
        e.target.classList.contains('submit-btn') || 
        e.target.classList.contains('checkout-btn')) {
        
        const originalText = e.target.textContent;
        e.target.textContent = 'Loading...';
        e.target.disabled = true;
        
        setTimeout(() => {
            e.target.textContent = originalText;
            e.target.disabled = false;
        }, 1000);
    }
});

console.log('Beauty & Fashion Shop JavaScript loaded successfully!'); 