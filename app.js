// ==================== PRODUCTS DATA ====================
const products = [
    { name: "NVIDIA RTX 5070 Ti", category: "GPU", price: "$18,999", img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop", badge: "Nuevo" },
    { name: "AMD Ryzen 9 9900X", category: "CPU", price: "$12,499", img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop", badge: "Popular" },
    { name: "Corsair Vengeance 32GB DDR5", category: "RAM", price: "$3,299", img: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop", badge: "" },
    { name: "Samsung 990 Pro 2TB NVMe", category: "SSD", price: "$4,199", img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop", badge: "Oferta" },
    { name: "ASUS ROG Strix B650-A", category: "Motherboard", price: "$5,899", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop", badge: "" },
    { name: "Corsair iCUE 5000X RGB", category: "Gabinete", price: "$3,799", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop", badge: "Gaming" }
];

// ==================== RENDER PRODUCTS ====================
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = products.map((p, i) => `
        <div class="product-card" style="animation-delay: ${i * 0.1}s">
            <div class="product-img-wrap">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <span class="product-category">${p.category}</span>
                <h3>${p.name}</h3>
                <p class="product-price">${p.price} MXN</p>
            </div>
        </div>
    `).join('');
}

// ==================== NAVBAR SCROLL ====================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu
    const toggle = document.getElementById('menu-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('active');
            toggle.classList.toggle('active');
        });
        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                links.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
    }
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ==================== CONTACT FORM ====================
function initForm() {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();

        // Simple validation
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !email || !mensaje) {
            alert('Por favor completa todos los campos requeridos.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor ingresa un correo electrónico válido.');
            return;
        }

        // Simulate submission
        const btn = document.getElementById('submit-btn');
        btn.textContent = 'Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            form.classList.add('hidden');
            success.classList.remove('hidden');
        }, 1200);
    });
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .branch-card, .product-card, .section-header').forEach(el => {
        el.classList.add('animate-target');
        observer.observe(el);
    });
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initNavbar();
    initSmoothScroll();
    initForm();
    initScrollAnimations();
});
