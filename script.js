// Products Data (imported from apex_products.json — images mapped to local site-*.jpg when available)
const products = [
    { id: 1, name: "Nike React Miler", category: "shoes", price: 130.00, image: "images/site-1.jpg", description: "", rating: 4.5, reviews: 120 },
    { id: 2, name: "Nike Air Zoom Pegasus 37", category: "shoes", price: 120.00, image: "images/site-2.jpg", description: "", rating: 4.5, reviews: 98 },
    { id: 3, name: "Nike Joyride Run Flyknit", category: "shoes", price: 170.00, image: "images/site-3.jpg", description: "", rating: 4.4, reviews: 85 },
    { id: 4, name: "Nike Mercurial Vapor 13 Elite FG", category: "shoes", price: 250.00, image: "images/site-4.jpg", description: "", rating: 4.6, reviews: 64 },
    { id: 5, name: "Nike Phantom Vision Elite Dynamic Fit FG", category: "shoes", price: 280.00, image: "images/site-5.jpg", description: "", rating: 4.6, reviews: 72 },
    { id: 6, name: "Nike Phantom Venom Academy FG", category: "shoes", price: 150.00, image: "images/site-6.jpg", description: "", rating: 4.4, reviews: 54 },
    { id: 7, name: "Nike Mercurial Vapor 13 Elite Tech Craft FG", category: "shoes", price: 280.00, image: "images/site-7.jpg", description: "", rating: 4.7, reviews: 41 },
    { id: 8, name: "Nike Mercurial Superfly 7 Pro MDS FG", category: "shoes", price: 270.00, image: "images/site-8.jpg", description: "", rating: 4.7, reviews: 53 },
    { id: 9, name: "Nike Air Force 1", category: "shoes", price: 120.00, image: "images/site-9.jpg", description: "", rating: 4.6, reviews: 210 },
    { id: 10, name: "Nike Air Max 90", category: "shoes", price: 140.00, image: "images/site-10.jpg", description: "", rating: 4.5, reviews: 147 },
    { id: 11, name: "Nike Air Max 90 LTR", category: "shoes", price: 160.00, image: "images/site-11.jpg", description: "", rating: 4.5, reviews: 93 },
    { id: 12, name: "Nike Joyride Dual Run", category: "shoes", price: 140.00, image: "images/site-12.jpg", description: "", rating: 4.4, reviews: 67 },
    { id: 13, name: "Nike Renew Run", category: "shoes", price: 110.00, image: "images/site-13.jpg", description: "", rating: 4.3, reviews: 88 },
    { id: 14, name: "Nizza X Disney", category: "shoes", price: 100.00, image: "images/site-14.jpg", description: "", rating: 4.2, reviews: 52 },
    { id: 15, name: "X_PLR", category: "shoes", price: 130.00, image: "images/site-15.jpg", description: "", rating: 4.3, reviews: 46 },
    { id: 16, name: "NMD_R1", category: "shoes", price: 180.00, image: "images/site-16.jpg", description: "", rating: 4.5, reviews: 71 }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || {};
let currentFilter = 'all';
let currentLanguage = localStorage.getItem('language') || 'en';

// Translations
const translations = {
    en: {
        home: "Home",
        shop: "Shop",
        about: "About",
        contact: "Contact",
        cart_title: "Shopping Cart",
        checkout: "Checkout",
        clear_cart: "Clear Cart",
        complete_purchase: "Complete Purchase",
        shop_now: "Shop Now",
        our_collection: "Our Collection",
        all: "All",
        shoes: "Shoes",
        apparel: "Apparel",
        accessories: "Accessories",
        about_title: "About APEX",
        about_text: "APEX is a premium athletic brand dedicated to providing high-quality sports apparel, shoes, and accessories for athletes of all levels. We combine innovation, comfort, and style to help you reach your peak performance.",
        quality: "Quality",
        quality_desc: "Premium materials and expert craftsmanship",
        innovation: "Innovation",
        innovation_desc: "Cutting-edge technology for performance",
        sustainability: "Sustainability",
        sustainability_desc: "Eco-friendly production practices",
        contact_title: "Contact Us",
        name_placeholder: "Your Name",
        email_placeholder: "Your Email",
        message_placeholder: "Your Message",
        send_message: "Send Message",
        where_performance: "Where Performance Meets Style",
        subtotal: "Subtotal: $",
        tax: "Tax (10%): $",
        total: "Total: $",
        shipping_info: "Shipping Information",
        full_name: "Full Name",
        address: "Address",
        city: "City",
        zip_code: "ZIP Code",
        payment_info: "Payment Information",
        card_number: "Card Number",
        expiry: "MM/YY",
        cvv: "CVV",
        order_confirmed: "Order Confirmed",
        thank_you: "Thank you for your purchase!",
        order_id: "Order ID:",
        email_confirmation: "You will receive a confirmation email shortly.",
        continue_shopping: "Continue Shopping",
        add_to_cart: "Add to Cart",
        your_cart_empty: "Your cart is empty",
        copyright: "© 2026 APEX Athletic. All rights reserved."
    },
    sq: {
        home: "Kreu",
        shop: "Dyqani",
        about: "Rreth nesh",
        contact: "Kontakt",
        cart_title: "Shporta e Blerjeve",
        checkout: "Paguaj",
        clear_cart: "Zbraz Shportën",
        complete_purchase: "Përfundo Blerjen",
        shop_now: "Bleni Tani",
        our_collection: "Koleksioni Ynë",
        all: "Të Gjitha",
        shoes: "Këpucë",
        apparel: "Rroba",
        accessories: "Aksesorë",
        about_title: "Rreth APEX",
        about_text: "APEX është një markë atletike premium e dedikuar për të siguruar veshje sportive me cilësi të lartë, këpucë dhe aksesorë për atletët e të gjithë niveleve. Ne kombinojmë inovacionin, komoditetin dhe stilin për t'ju ndihmuar të arrini përfeksionin tuaj.",
        quality: "Cilësia",
        quality_desc: "Materiale premium dhe zanati i ekspertëve",
        innovation: "Inovacioni",
        innovation_desc: "Teknologjia e prerë për performancën",
        sustainability: "Qëndrueshmëria",
        sustainability_desc: "Praktikat e prodhimit miqësore me mjedisin",
        contact_title: "Na Kontaktoni",
        name_placeholder: "Emri Juaj",
        email_placeholder: "Email-i Juaj",
        message_placeholder: "Mesazhi Juaj",
        send_message: "Dërgo Mesazh",
        where_performance: "Ku Përformancat Plotësohen me Stilin",
        subtotal: "Nënshuma: $",
        tax: "Tatim (10%): $",
        total: "Gjithsej: $",
        shipping_info: "Informacioni i Dërgimit",
        full_name: "Emri i Plotë",
        address: "Adresa",
        city: "Qyteti",
        zip_code: "Kodi Postar",
        payment_info: "Informacioni i Pagesës",
        card_number: "Numri i Kartës",
        expiry: "MM/YY",
        cvv: "CVV",
        order_confirmed: "Porosi e Konfirmuar",
        thank_you: "Faleminderit për blerjen tuaj!",
        order_id: "ID e Porosis:",
        email_confirmation: "Ju do të merrni një email konfirmimi se shpejti.",
        continue_shopping: "Vazhdoni të Blini",
        add_to_cart: "Shto në Shportë",
        your_cart_empty: "Shporta juaj është bosh",
    }
};

// Switch Language
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update active button (safe: don't rely on event)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        const txt = btn.textContent.trim().toLowerCase();
        if ((lang === 'en' && txt === 'eng') || (lang === 'sq' && txt === 'sq')) {
            btn.classList.add('active');
        }
    });
    
    // Update page content
    updatePageLanguage();
}

// Update all text on page
function updatePageLanguage() {
    const t = translations[currentLanguage];
    
    // Navigation
    document.querySelectorAll('.nav-link')[0].textContent = t.home;
    document.querySelectorAll('.nav-link')[1].textContent = t.shop;
    document.querySelectorAll('.nav-link')[2].textContent = t.about;
    document.querySelectorAll('.nav-link')[3].textContent = t.contact;
    
    // Hero
    document.querySelector('.hero-content h1').textContent = 'APEX ATHLETIC';
    document.querySelector('.hero-content p').textContent = t.where_performance;
    document.querySelector('.hero .btn').textContent = t.shop_now;
    
    // Products Section
    document.querySelector('.products-section h2').textContent = t.our_collection;
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns && filterBtns.length >= 4) {
        filterBtns[0].textContent = t.all;
        filterBtns[1].textContent = t.shoes;
        filterBtns[2].textContent = t.apparel;
        filterBtns[3].textContent = t.accessories;
    }
    
    // About
    document.querySelector('.about h2').textContent = t.about_title;
    document.querySelector('.about > p').textContent = t.about_text;
    document.querySelectorAll('.feature')[0].querySelector('h3').textContent = t.quality;
    document.querySelectorAll('.feature')[0].querySelector('p').textContent = t.quality_desc;
    document.querySelectorAll('.feature')[1].querySelector('h3').textContent = t.innovation;
    document.querySelectorAll('.feature')[1].querySelector('p').textContent = t.innovation_desc;
    document.querySelectorAll('.feature')[2].querySelector('h3').textContent = t.sustainability;
    document.querySelectorAll('.feature')[2].querySelector('p').textContent = t.sustainability_desc;
    
    // Contact
    document.querySelector('.contact h2').textContent = t.contact_title;
    document.querySelectorAll('.contact-form input')[0].placeholder = t.name_placeholder;
    document.querySelectorAll('.contact-form input')[1].placeholder = t.email_placeholder;
    document.querySelector('.contact-form textarea').placeholder = t.message_placeholder;
    document.querySelector('.contact-form .btn').textContent = t.send_message;
    
    // Footer
    document.querySelector('.footer p').textContent = t.copyright;
    
    // Reload products with translated names
    loadProducts();
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language') || 'en';
    if (savedLang === 'sq') {
        document.querySelectorAll('.lang-btn')[1].classList.add('active');
        document.querySelectorAll('.lang-btn')[0].classList.remove('active');
    }
    try {
        updatePageLanguage();
    } catch (e) {
        console.error('updatePageLanguage error:', e);
        // Ensure products still load if language update fails
        try { loadProducts(); } catch (e2) { console.error(e2); }
    }
    updateCartCount();
});

// Backup load on window load
window.addEventListener('load', function() {
    const grid = document.getElementById('products-grid');
    if (grid && grid.children.length === 0) {
        loadProducts();
    }
});

// Load and Display Products
function loadProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter);
    
    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const rating = '⭐'.repeat(Math.floor(product.rating));

    card.innerHTML = `
        <div class="product-image" style="background-image: url('${product.image}'); background-size: cover; background-position: center;"></div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-rating">${rating} (${product.reviews})</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-actions">
                <select id="qty-${product.id}">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
                <button class="card-add-btn">Add to Cart</button>
            </div>
        </div>
    `;

    // Open product modal when clicking the card, except when clicking the actions area
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.product-actions')) {
            showProductModal(product);
        }
    });

    // Wire up add to cart button inside the card
    const addBtn = card.querySelector('.card-add-btn');
    addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const qtySelect = card.querySelector(`#qty-${product.id}`);
        const qty = parseInt(qtySelect.value);
        addToCart(product.id, qty);
    });

    return card;
}

// Filter Products
function filterProducts(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find and mark the clicked button as active
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.textContent.toLowerCase() === category || 
            (category === 'all' && btn.textContent.toLowerCase() === 'all') ||
            (category === 'shoes' && btn.textContent.toLowerCase() === 'shoes') ||
            (category === 'apparel' && btn.textContent.toLowerCase() === 'apparel') ||
            (category === 'accessories' && btn.textContent.toLowerCase() === 'accessories')) {
            btn.classList.add('active');
        }
    });
    
    loadProducts();
}

// Add to Cart
function addToCart(productId, quantityParam) {
    const product = products.find(p => p.id === productId);
    const quantity = typeof quantityParam === 'number' ? quantityParam : parseInt(document.getElementById(`qty-${productId}`).value);

    if (cart[productId]) {
        cart[productId].quantity += quantity;
    } else {
        cart[productId] = {
            product: product,
            quantity: quantity
        };
    }

    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    let count = 0;
    for (let id in cart) {
        count += cart[id].quantity;
    }
    document.getElementById('cart-count').textContent = count;
}

// Toggle Cart Modal
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
        displayCartItems();
        updateCartSummary();
    }
}

// Display Cart Items
function displayCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    
    if (Object.keys(cart).length === 0) {
        cartItemsDiv.innerHTML = '<p style="text-align: center; color: #999;">Your cart is empty</p>';
        return;
    }
    
    for (let id in cart) {
        const item = cart[id];
        const itemTotal = (item.product.price * item.quantity).toFixed(2);
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.product.name}</div>
                <div class="cart-item-price">$${item.product.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateQuantity(${id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${id}, 1)">+</button>
            </div>
            <div>$${itemTotal}</div>
            <button class="cart-item-remove" onclick="removeFromCart(${id})">Remove</button>
        `;
        
        cartItemsDiv.appendChild(itemDiv);
    }
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart[productId];
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartCount();
        displayCartItems();
        updateCartSummary();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    delete cart[productId];
    saveCart();
    updateCartCount();
    displayCartItems();
    updateCartSummary();
}

// Clear Cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = {};
        saveCart();
        updateCartCount();
        displayCartItems();
        updateCartSummary();
    }
}

// Update Cart Summary
function updateCartSummary() {
    let subtotal = 0;
    
    for (let id in cart) {
        const item = cart[id];
        subtotal += item.product.price * item.quantity;
    }
    
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

// Checkout
function checkout() {
    if (Object.keys(cart).length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    document.getElementById('cart-modal').style.display = 'none';
    document.getElementById('checkout-modal').style.display = 'block';
}

// Close Checkout
function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// Complete Checkout
function completeCheckout(event) {
    event.preventDefault();

    const form = event.target;
    const fullName = form.fullName ? form.fullName.value : '';
    const email = form.email ? form.email.value : '';

    const paymentMethod = form.paymentMethod ? form.paymentMethod.value : 'card';

    // If card payment selected, perform simple client-side validation
    if (paymentMethod === 'card') {
        const cardNumber = form.cardNumber ? form.cardNumber.value.replace(/\s+/g, '') : '';
        const expiry = form.expiry ? form.expiry.value.trim() : '';
        const cvv = form.cvv ? form.cvv.value.trim() : '';

        if (!cardNumber || cardNumber.length < 12 || cardNumber.length > 19 || !/^[0-9]+$/.test(cardNumber)) {
            alert('Please enter a valid card number');
            return;
        }
        if (!/^[0-9]{2}\/[0-9]{2}$/.test(expiry)) {
            alert('Expiry must be in MM/YY format');
            return;
        }
        if (!/^[0-9]{3,4}$/.test(cvv)) {
            alert('Please enter a valid CVV');
            return;
        }
    }

    if (Object.keys(cart).length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Build summary HTML for purchased items
    let itemsHtml = '<ul style="padding-left:1rem">';
    let total = 0;
    for (let productId in cart) {
        const item = cart[productId];
        const itemTotal = item.product.price * item.quantity;
        total += itemTotal;
        itemsHtml += `<li>${item.product.name} x${item.quantity} — $${itemTotal.toFixed(2)}</li>`;
    }
    itemsHtml += '</ul>';

    // Populate confirmation modal with name, email and items
    document.getElementById('confirm-name').textContent = fullName;
    document.getElementById('confirm-email').textContent = email;
    document.getElementById('confirm-payment').textContent = paymentMethod === 'card' ? (form.cardNumber ? ('Card ending ' + form.cardNumber.value.replace(/\s+/g,'').slice(-4)) : 'Card') : 'Cash (pay on delivery)';
    document.getElementById('confirm-items').innerHTML = itemsHtml;
    document.getElementById('confirm-total').textContent = total.toFixed(2);

    // Try to submit sanitized data to Formspree so you receive an email
    (async () => {
        try {
            // Build sanitized FormData
            const fd = new FormData();
            fd.append('fullName', fullName);
            fd.append('email', email);
            fd.append('address', form.address ? form.address.value : '');
            fd.append('city', form.city ? form.city.value : '');
            fd.append('zipCode', form.zipCode ? form.zipCode.value : '');
            fd.append('paymentMethod', paymentMethod);
            // include masked card last4 if card selected
            if (paymentMethod === 'card' && form.cardNumber && form.cardNumber.value) {
                const digits = form.cardNumber.value.replace(/\s+/g, '');
                fd.append('cardLast4', digits.slice(-4));
            }
            fd.append('cartItems', itemsHtml.replace(/<[^>]+>/g, '\n'));
            fd.append('total', total.toFixed(2));

            const actionUrl = form.action || '/';
            const resp = await fetch(actionUrl, { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } });
            if (!resp.ok) {
                console.warn('Formspree submission returned non-OK status', resp.status);
            }
        } catch (err) {
            console.error('Error sending checkout to Formspree:', err);
        } finally {
            // Show confirmation and clear checkout modal regardless of email result
            document.getElementById('checkout-modal').style.display = 'none';
            document.getElementById('confirmation-modal').style.display = 'block';

            // Clear cart locally
            cart = {};
            saveCart();
            updateCartCount();
        }
    })();
}
    updateCartCount();


// Close Confirmation
function closeConfirmation() {
    document.getElementById('confirmation-modal').style.display = 'none';
    document.getElementById('checkout-modal').style.display = 'none';
}

// Handle Contact Submit
function handleContactSubmit(event) {
    // Form will auto-submit to Formspree
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #00d4ff;
        color: black;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        font-weight: bold;
        z-index: 300;
        animation: slideIn 0.3s;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Close modal when clicking outside
window.onclick = function(event) {
    const cartModal = document.getElementById('cart-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    const confirmationModal = document.getElementById('confirmation-modal');
    const productModal = document.getElementById('product-modal');
    
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (event.target === checkoutModal) {
        checkoutModal.style.display = 'none';
    }
    if (event.target === confirmationModal) {
        confirmationModal.style.display = 'none';
    }
    if (productModal && event.target === productModal) {
        productModal.style.display = 'none';
    }
}

// Add animation styles
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Payment fields toggle and form hookup
function togglePaymentFields() {
    const method = document.querySelector('input[name="paymentMethod"]:checked')?.value;
    const cardFields = document.getElementById('card-fields');
    if (!cardFields) return;
    if (method === 'card') {
        cardFields.style.display = 'block';
        cardFields.querySelectorAll('input').forEach(i => i.required = true);
    } else {
        cardFields.style.display = 'none';
        cardFields.querySelectorAll('input').forEach(i => { i.required = false; i.value = ''; });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // wire payment method radios
    const radios = document.querySelectorAll('input[name="paymentMethod"]');
    radios.forEach(r => r.addEventListener('change', togglePaymentFields));
    // initialize display
    togglePaymentFields();

    // attach checkout form submit handler
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) checkoutForm.addEventListener('submit', completeCheckout);
});

// Hamburger Menu Functions
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Product Modal Functions
function showProductModal(product) {
    const modal = document.getElementById('product-modal');
    if (!modal) return;

    document.getElementById('product-image-large').style.backgroundImage = `url('${product.image}')`;
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('product-desc').textContent = product.description || '';

    const sizeOptions = document.getElementById('size-options');
    sizeOptions.innerHTML = '';

    let sizes = [];
    if (product.category === 'shoes') sizes = ['6','7','8','9','10','11','12'];
    else if (product.category === 'apparel') sizes = ['XS','S','M','L','XL'];
    else if (product.category === 'accessories') sizes = ['One Size'];

    sizes.forEach((s, i) => {
        const btn = document.createElement('button');
        btn.className = 'size-btn';
        btn.textContent = s;
        btn.addEventListener('click', () => {
            sizeOptions.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
        if (i === 0) btn.classList.add('active');
        sizeOptions.appendChild(btn);
    });

    // set modal add-to-cart behavior
    const modalAdd = document.getElementById('modal-add-to-cart');
    modalAdd.onclick = function() {
        const qty = parseInt(document.getElementById('modal-qty').value);
        addToCart(product.id, qty);
        modal.style.display = 'none';
    };

    modal.style.display = 'block';
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.style.display = 'none';
}
