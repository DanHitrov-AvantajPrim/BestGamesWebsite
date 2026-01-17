// Game Data - Collection of popular Steam games
const gamesData = [
    {
        id: 1,
        title: "Elden Ring",
        category: "action",
        platforms: ["pc"],
        genres: ["action", "rpg", "adventure"],
        rating: 9.2,
        price: "$59.99",
        description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.",
        releaseDate: "2022-02-25",
        featured: true,
        tags: ["Open World", "Dark Fantasy", "RPG"]
    },
    {
        id: 2,
        title: "Baldur's Gate 3",
        category: "rpg",
        platforms: ["pc", "mac"],
        genres: ["rpg", "strategy"],
        rating: 9.5,
        price: "$59.99",
        description: "Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal.",
        releaseDate: "2023-08-03",
        featured: true,
        tags: ["RPG", "Turn-Based", "D&D"]
    },
    {
        id: 3,
        title: "Cyberpunk 2077",
        category: "action",
        platforms: ["pc"],
        genres: ["action", "rpg", "adventure"],
        rating: 8.5,
        price: "$49.99",
        description: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power.",
        releaseDate: "2020-12-10",
        featured: true,
        tags: ["Sci-Fi", "Open World", "FPS"]
    },
    {
        id: 4,
        title: "Stardew Valley",
        category: "simulation",
        platforms: ["pc", "mac", "linux"],
        genres: ["simulation", "indie"],
        rating: 9.0,
        price: "$14.99",
        description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools.",
        releaseDate: "2016-02-26",
        featured: true,
        tags: ["Farming", "Relaxing", "Multiplayer"]
    },
    {
        id: 5,
        title: "Counter-Strike 2",
        category: "action",
        platforms: ["pc", "linux"],
        genres: ["action", "fps"],
        rating: 8.8,
        price: "Free",
        description: "The next evolution of Counter-Strike with enhanced graphics and gameplay.",
        releaseDate: "2023-09-27",
        featured: true,
        tags: ["FPS", "Competitive", "Multiplayer"]
    },
    {
        id: 6,
        title: "Hades",
        category: "action",
        platforms: ["pc", "mac"],
        genres: ["action", "indie", "roguelike"],
        rating: 9.3,
        price: "$24.99",
        description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler.",
        releaseDate: "2020-09-17",
        featured: false,
        tags: ["Roguelike", "Indie", "Action"]
    },
    {
        id: 7,
        title: "Civilization VI",
        category: "strategy",
        platforms: ["pc", "mac", "linux"],
        genres: ["strategy", "turn-based"],
        rating: 8.7,
        price: "$59.99",
        description: "Build an empire to stand the test of time in this turn-based strategy game.",
        releaseDate: "2016-10-21",
        featured: false,
        tags: ["Strategy", "Turn-Based", "Historical"]
    },
    {
        id: 8,
        title: "The Witcher 3: Wild Hunt",
        category: "rpg",
        platforms: ["pc", "mac"],
        genres: ["rpg", "action", "adventure"],
        rating: 9.6,
        price: "$39.99",
        description: "As war rages on, you must take on your greatest contract yet: to track down the Child of Prophecy.",
        releaseDate: "2015-05-19",
        featured: true,
        tags: ["RPG", "Open World", "Story Rich"]
    },
    {
        id: 9,
        title: "Red Dead Redemption 2",
        category: "adventure",
        platforms: ["pc"],
        genres: ["adventure", "action"],
        rating: 9.1,
        price: "$59.99",
        description: "America, 1899. The end of the Wild West era has begun. After a robbery goes wrong, Arthur Morgan must survive.",
        releaseDate: "2019-11-05",
        featured: true,
        tags: ["Western", "Open World", "Story Rich"]
    },
    {
        id: 10,
        title: "Hollow Knight",
        category: "indie",
        platforms: ["pc", "mac", "linux"],
        genres: ["indie", "metroidvania", "action"],
        rating: 9.4,
        price: "$14.99",
        description: "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom.",
        releaseDate: "2017-02-24",
        featured: false,
        tags: ["Metroidvania", "Indie", "Platformer"]
    },
    {
        id: 11,
        title: "Portal 2",
        category: "adventure",
        platforms: ["pc", "mac", "linux"],
        genres: ["puzzle", "adventure"],
        rating: 9.7,
        price: "$9.99",
        description: "The sequel to the award-winning Portal featuring mind-bending puzzles and hilarious dialogue.",
        releaseDate: "2011-04-19",
        featured: false,
        tags: ["Puzzle", "Co-op", "Sci-Fi"]
    },
    {
        id: 12,
        title: "Terraria",
        category: "adventure",
        platforms: ["pc", "mac", "linux"],
        genres: ["sandbox", "adventure"],
        rating: 9.0,
        price: "$9.99",
        description: "Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game.",
        releaseDate: "2011-05-16",
        featured: false,
        tags: ["Sandbox", "Crafting", "Multiplayer"]
    },
    {
        id: 13,
        title: "Half-Life: Alyx",
        category: "action",
        platforms: ["pc", "vr"],
        genres: ["vr", "fps", "action"],
        rating: 9.5,
        price: "$59.99",
        description: "Half-Life: Alyx is Valve's VR return to the Half-Life series.",
        releaseDate: "2020-03-23",
        featured: false,
        tags: ["VR", "FPS", "Story Rich"]
    },
    {
        id: 14,
        title: "Beat Saber",
        category: "action",
        platforms: ["pc", "vr"],
        genres: ["vr", "rhythm"],
        rating: 9.2,
        price: "$29.99",
        description: "A VR rhythm game where you slash the beats of adrenaline-pumping music.",
        releaseDate: "2019-05-21",
        featured: false,
        tags: ["VR", "Music", "Rhythm"]
    },
    {
        id: 15,
        title: "Cities: Skylines",
        category: "simulation",
        platforms: ["pc", "mac", "linux"],
        genres: ["simulation", "strategy"],
        rating: 8.6,
        price: "$29.99",
        description: "Cities: Skylines is a modern take on the classic city simulation.",
        releaseDate: "2015-03-10",
        featured: false,
        tags: ["City Builder", "Simulation", "Strategy"]
    },
    {
        id: 16,
        title: "Dark Souls III",
        category: "action",
        platforms: ["pc"],
        genres: ["action", "rpg"],
        rating: 8.9,
        price: "$39.99",
        description: "As fires fade and the world falls into ruin, embark on a journey to destroy the Lords of Cinder.",
        releaseDate: "2016-04-12",
        featured: false,
        tags: ["Souls-like", "Dark Fantasy", "Difficult"]
    },
    {
        id: 17,
        title: "Factorio",
        category: "strategy",
        platforms: ["pc", "mac", "linux"],
        genres: ["strategy", "simulation"],
        rating: 9.1,
        price: "$30.00",
        description: "Build and maintain factories. Defend against creatures. Automate everything!",
        releaseDate: "2020-08-14",
        featured: false,
        tags: ["Automation", "Strategy", "Building"]
    },
    {
        id: 18,
        title: "DOOM Eternal",
        category: "action",
        platforms: ["pc"],
        genres: ["action", "fps"],
        rating: 8.7,
        price: "$39.99",
        description: "Hell's armies have invaded Earth. Become the Slayer in an epic single-player campaign.",
        releaseDate: "2020-03-20",
        featured: false,
        tags: ["FPS", "Gore", "Fast-Paced"]
    },
    {
        id: 19,
        title: "Among Us",
        category: "indie",
        platforms: ["pc"],
        genres: ["indie", "multiplayer"],
        rating: 7.8,
        price: "$4.99",
        description: "Play with 4-15 players online as you attempt to prep your spaceship for departure.",
        releaseDate: "2018-11-16",
        featured: false,
        tags: ["Multiplayer", "Social Deduction", "Party"]
    },
    {
        id: 20,
        title: "Celeste",
        category: "indie",
        platforms: ["pc", "mac", "linux"],
        genres: ["indie", "platformer"],
        rating: 9.2,
        price: "$19.99",
        description: "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain.",
        releaseDate: "2018-01-25",
        featured: false,
        tags: ["Platformer", "Indie", "Difficult"]
    },
    {
        id: 21,
        title: "Valheim",
        category: "adventure",
        platforms: ["pc", "linux"],
        genres: ["survival", "adventure"],
        rating: 8.8,
        price: "$19.99",
        description: "A brutal exploration and survival game for 1-10 players set in a procedurally-generated purgatory.",
        releaseDate: "2021-02-02",
        featured: false,
        tags: ["Survival", "Viking", "Co-op"]
    },
    {
        id: 22,
        title: "Total War: WARHAMMER III",
        category: "strategy",
        platforms: ["pc", "mac", "linux"],
        genres: ["strategy", "rpg"],
        rating: 8.5,
        price: "$59.99",
        description: "The cataclysmic conclusion to the Total War: WARHAMMER trilogy is here.",
        releaseDate: "2022-02-17",
        featured: false,
        tags: ["Strategy", "Fantasy", "War"]
    },
    {
        id: 23,
        title: "Undertale",
        category: "indie",
        platforms: ["pc", "mac", "linux"],
        genres: ["indie", "rpg"],
        rating: 9.0,
        price: "$9.99",
        description: "A small child falls into the Underground where monsters have been banished.",
        releaseDate: "2015-09-15",
        featured: false,
        tags: ["Indie", "RPG", "Story Rich"]
    },
    {
        id: 24,
        title: "Euro Truck Simulator 2",
        category: "simulation",
        platforms: ["pc", "mac", "linux"],
        genres: ["simulation", "driving"],
        rating: 8.3,
        price: "$19.99",
        description: "Travel across Europe as king of the road, a trucker who delivers cargo across impressive distances!",
        releaseDate: "2012-10-19",
        featured: false,
        tags: ["Simulation", "Driving", "Relaxing"]
    },
    {
        id: 25,
        title: "Dead Cells",
        category: "action",
        platforms: ["pc", "mac", "linux"],
        genres: ["action", "roguelike", "indie"],
        rating: 8.9,
        price: "$24.99",
        description: "Dead Cells is a rogue-lite, metroidvania inspired action-platformer.",
        releaseDate: "2018-08-07",
        featured: false,
        tags: ["Roguelike", "Metroidvania", "Action"]
    },
    {
        id: 26,
        title: "Disco Elysium",
        category: "rpg",
        platforms: ["pc", "mac"],
        genres: ["rpg", "adventure"],
        rating: 9.4,
        price: "$39.99",
        description: "A groundbreaking role-playing game with unprecedented freedom of choice.",
        releaseDate: "2019-10-15",
        featured: false,
        tags: ["RPG", "Story Rich", "Detective"]
    },
    {
        id: 27,
        title: "Rust",
        category: "adventure",
        platforms: ["pc", "mac"],
        genres: ["survival", "multiplayer"],
        rating: 7.9,
        price: "$39.99",
        description: "The only aim in Rust is to survive. To do this you will need to overcome struggles.",
        releaseDate: "2018-02-08",
        featured: false,
        tags: ["Survival", "Multiplayer", "Crafting"]
    },
    {
        id: 28,
        title: "Resident Evil Village",
        category: "action",
        platforms: ["pc"],
        genres: ["horror", "action"],
        rating: 8.6,
        price: "$59.99",
        description: "Experience survival horror like never before in Resident Evil Village.",
        releaseDate: "2021-05-07",
        featured: false,
        tags: ["Horror", "Survival", "Action"]
    },
    {
        id: 29,
        title: "Microsoft Flight Simulator",
        category: "simulation",
        platforms: ["pc"],
        genres: ["simulation", "flight"],
        rating: 8.8,
        price: "$59.99",
        description: "From light planes to wide-body jets, fly highly detailed aircraft in the next generation.",
        releaseDate: "2020-08-18",
        featured: false,
        tags: ["Flight", "Simulation", "Realistic"]
    },
    {
        id: 30,
        title: "Sekiro: Shadows Die Twice",
        category: "action",
        platforms: ["pc"],
        genres: ["action", "adventure"],
        rating: 9.0,
        price: "$59.99",
        description: "Carve your own path to vengeance in this action-adventure. Take revenge on those who wronged you.",
        releaseDate: "2019-03-22",
        featured: false,
        tags: ["Souls-like", "Ninja", "Difficult"]
    }
];

// Helper functions
function getGamesByCategory(category) {
    return gamesData.filter(game => game.category === category);
}

function getGamesByPlatform(platform) {
    return gamesData.filter(game => game.platforms.includes(platform));
}

function getFeaturedGames() {
    return gamesData.filter(game => game.featured);
}

function getTopRatedGames() {
    return gamesData.sort((a, b) => b.rating - a.rating).slice(0, 12);
}

function getLatestGames() {
    return gamesData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)).slice(0, 8);
}

function searchGames(query) {
    const lowerQuery = query.toLowerCase();
    return gamesData.filter(game => 
        game.title.toLowerCase().includes(lowerQuery) ||
        game.description.toLowerCase().includes(lowerQuery) ||
        game.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
}

function filterGames(filters) {
    let filtered = [...gamesData];
    
    if (filters.category && filters.category !== 'all') {
        filtered = filtered.filter(game => game.category === filters.category);
    }
    
    if (filters.platform && filters.platform !== 'all') {
        filtered = filtered.filter(game => game.platforms.includes(filters.platform));
    }
    
    if (filters.sort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (filters.sort === 'price-low') {
        filtered.sort((a, b) => {
            const priceA = a.price === 'Free' ? 0 : parseFloat(a.price.replace('$', ''));
            const priceB = b.price === 'Free' ? 0 : parseFloat(b.price.replace('$', ''));
            return priceA - priceB;
        });
    } else if (filters.sort === 'price-high') {
        filtered.sort((a, b) => {
            const priceA = a.price === 'Free' ? 0 : parseFloat(a.price.replace('$', ''));
            const priceB = b.price === 'Free' ? 0 : parseFloat(b.price.replace('$', ''));
            return priceB - priceA;
        });
    } else if (filters.sort === 'newest') {
        filtered.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    }
    
    return filtered;
}
