// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Dropdown toggle for mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Search functionality
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            localStorage.setItem('searchQuery', query);
            window.location.href = 'browse.html';
        }
    }

    // Load games on homepage
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        loadFeaturedGames();
        loadLatestGames();
    }

    // Active navigation link
    setActiveNavLink();
});

// Create game card HTML
function createGameCard(game) {
    // Try to use real image, fallback to gradient
    const imagePath = `images/games/game-${game.id}.jpg`;
    const fallbackImagePath = `images/games/game-${game.id}.png`;
    
    return `
        <div class="game-card">
            <div class="game-card-image" style="background: linear-gradient(135deg, ${getRandomGradient()});">
                <img 
                    src="${imagePath}" 
                    alt="${game.title}"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                    style="width: 100%; height: 100%; object-fit: cover; display: block;"
                />
                <div class="game-card-fallback" style="display: none; align-items: center; justify-content: center; height: 100%; font-size: 48px; position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
                    ${getGameIcon(game.category)}
                </div>
            </div>
            <div class="game-card-content">
                <h3 class="game-card-title">${game.title}</h3>
                <div class="game-card-meta">
                    ${game.tags.map(tag => `<span class="game-tag">${tag}</span>`).join('')}
                </div>
                <p class="game-card-description">${game.description}</p>
                <div class="game-card-footer">
                    <div class="game-rating">⭐ ${game.rating}</div>
                    <div class="game-price">${game.price}</div>
                </div>
            </div>
        </div>
    `;
}

// Get icon based on category
function getGameIcon(category) {
    const icons = {
        'action': '⚔️',
        'rpg': '🗡️',
        'strategy': '♟️',
        'adventure': '🗺️',
        'simulation': '🚁',
        'indie': '💎'
    };
    return icons[category] || '🎮';
}

// Get random gradient
function getRandomGradient() {
    const gradients = [
        '#667eea 0%, #764ba2 100%',
        '#f093fb 0%, #f5576c 100%',
        '#4facfe 0%, #00f2fe 100%',
        '#43e97b 0%, #38f9d7 100%',
        '#fa709a 0%, #fee140 100%',
        '#30cfd0 0%, #330867 100%'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
}

// Load featured games
function loadFeaturedGames() {
    const container = document.getElementById('featured-games');
    if (container) {
        const featured = getFeaturedGames().slice(0, 6);
        container.innerHTML = featured.map(game => createGameCard(game)).join('');
    }
}

// Load latest games
function loadLatestGames() {
    const container = document.getElementById('latest-games');
    if (container) {
        const latest = getLatestGames().slice(0, 4);
        container.innerHTML = latest.map(game => createGameCard(game)).join('');
    }
}

// Load games by category
function loadGamesByCategory(category) {
    const container = document.getElementById('games-container');
    if (container) {
        const games = getGamesByCategory(category);
        if (games.length > 0) {
            container.innerHTML = games.map(game => createGameCard(game)).join('');
        } else {
            container.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">😢</div>
                    <h3>No games found</h3>
                    <p>Try browsing a different category</p>
                </div>
            `;
        }
    }
}

// Load games by platform
function loadGamesByPlatform(platform) {
    const container = document.getElementById('games-container');
    if (container) {
        const games = getGamesByPlatform(platform);
        if (games.length > 0) {
            container.innerHTML = games.map(game => createGameCard(game)).join('');
        } else {
            container.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">😢</div>
                    <h3>No games found</h3>
                    <p>Try browsing a different platform</p>
                </div>
            `;
        }
    }
}

// Load top rated games
function loadTopRatedGames() {
    const container = document.getElementById('games-container');
    if (container) {
        const games = getTopRatedGames();
        container.innerHTML = games.map(game => createGameCard(game)).join('');
    }
}

// Load all games with filters
function loadAllGames(filters = {}) {
    const container = document.getElementById('games-container');
    if (container) {
        const searchQuery = localStorage.getItem('searchQuery');
        let games;
        
        if (searchQuery) {
            games = searchGames(searchQuery);
            localStorage.removeItem('searchQuery');
        } else {
            games = filterGames(filters);
        }
        
        if (games.length > 0) {
            container.innerHTML = games.map(game => createGameCard(game)).join('');
        } else {
            container.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">😢</div>
                    <h3>No games found</h3>
                    <p>Try adjusting your filters or search query</p>
                </div>
            `;
        }
    }
}

// Setup filter controls
function setupFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const platformFilter = document.getElementById('platform-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    if (categoryFilter || platformFilter || sortFilter) {
        const applyFilters = () => {
            const filters = {
                category: categoryFilter ? categoryFilter.value : 'all',
                platform: platformFilter ? platformFilter.value : 'all',
                sort: sortFilter ? sortFilter.value : 'rating'
            };
            loadAllGames(filters);
        };
        
        if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
        if (platformFilter) platformFilter.addEventListener('change', applyFilters);
        if (sortFilter) sortFilter.addEventListener('change', applyFilters);
    }
}

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation - called after content is loaded
function setupAnimations() {
    const animatedElements = document.querySelectorAll('.game-card, .category-card, .platform-card');
    if (animatedElements.length > 0) {
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    }
}

// Setup animations on page load and after dynamic content loads
document.addEventListener('DOMContentLoaded', () => {
    setupAnimations();
    // Re-run after a short delay to catch dynamically loaded content
    setTimeout(setupAnimations, 100);
});
