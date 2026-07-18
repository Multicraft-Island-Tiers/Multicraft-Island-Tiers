// Multicraft Island Tiers - Player Rankings with Kits
const players = [
  {
    rank: 1,
    name: 'Husky_Multicraft',
    avatar: 'H',
    badges: ['Dragonhide Master'],
    kits: {
      'Dragonhide KB': 'HT3',
      'Dragonhide': 'LT2',
      'Emerald': 'LT2',
      'Emerald KB': 'LT3',
      'Diamond': 'HT3'
    },
    points: 310
  },
  {
    rank: 2,
    name: 'Prologozrock',
    avatar: 'P',
    badges: ['Elite Player'],
    kits: {
      'Dragonhide KB': 'LT4',
      'Dragonhide': 'LT4',
      'Emerald': 'LT3',
      'Emerald KB': 'HT5',
      'Diamond': 'HT4'
    },
    points: 305
  },
  {
    rank: 3,
    name: 'Parrot',
    avatar: 'Pa',
    badges: ['Emerald Master'],
    kits: {
      'Dragonhide KB': 'HT4',
      'Dragonhide': 'HT4',
      'Emerald': 'HT5',
      'Emerald KB': 'HT5',
      'Diamond': 'LT4'
    },
    points: 325
  },
  {
    rank: 4,
    name: 'Herobrine',
    avatar: 'He',
    badges: ['Combat Master'],
    kits: {
      'Dragonhide KB': 'LT3',
      'Dragonhide': 'HT4',
      'Emerald': 'LT3',
      'Emerald KB': 'Diamond',
      'Diamond': 'Diamond'
    },
    points: 285
  },
  {
    rank: 5,
    name: 'vort3xYT',
    avatar: 'V',
    badges: ['Skilled Player'],
    kits: {
      'Dragonhide KB': 'HT2',
      'Dragonhide': 'LT2',
      'Emerald': 'LT2',
      'Emerald KB': 'LT2',
      'Diamond': 'HT2'
    },
    points: 220
  },
  {
    rank: 6,
    name: 'Void',
    avatar: 'Vo',
    badges: ['Rising Master'],
    kits: {
      'Dragonhide': 'LT4',
      'Dragonhide KB': 'LT4',
      'Emerald': 'LT4',
      'Diamond': 'HT4',
      'Emerald KB': 'HT4'
    },
    points: 295
  },
  {
    rank: 7,
    name: '_-persus-_',
    avatar: 'Pe',
    badges: ['Emerging Player'],
    kits: {
      'Emerald': 'HT4',
      'Dragonhide KB': 'LT4'
    },
    points: 140
  },
  {
    rank: 8,
    name: 'Taxbird',
    avatar: 'Ta',
    badges: ['Legendary Tier'],
    kits: {
      'Dragonhide': 'LT5',
      'Dragonhide KB': 'LT5',
      'Emerald': 'LT5',
      'Emerald KB': 'LT5',
      'Diamond': 'LT5'
    },
    points: 350
  },
  {
    rank: 9,
    name: 'Booky',
    avatar: 'Bo',
    badges: ['Legendary Tier'],
    kits: {
      'Dragonhide': 'LT5',
      'Dragonhide KB': 'LT5',
      'Emerald': 'LT5',
      'Emerald KB': 'LT5',
      'Diamond': 'LT5'
    },
    points: 350
  },
  {
    rank: 10,
    name: 'Benjamin',
    avatar: 'Be',
    badges: ['Legendary Tier'],
    kits: {
      'Dragonhide': 'LT5',
      'Dragonhide KB': 'LT5',
      'Emerald': 'LT5',
      'Emerald KB': 'LT5',
      'Diamond': 'LT5'
    },
    points: 350
  },
  {
    rank: 11,
    name: 'aaa666',
    avatar: 'A',
    badges: ['Legendary Tier'],
    kits: {
      'Dragonhide': 'LT5',
      'Dragonhide KB': 'LT5',
      'Emerald': 'LT5',
      'Emerald KB': 'LT5',
      'Diamond': 'LT5'
    },
    points: 350
  },
  {
    rank: 12,
    name: 'Gray',
    avatar: 'Gr',
    badges: ['Elite Diamond'],
    kits: {
      'Dragonhide': 'LT5',
      'Dragonhide KB': 'LT5',
      'Diamond': 'LT5'
    },
    points: 270
  },
  {
    rank: 13,
    name: 'new_guy',
    avatar: 'NG',
    badges: ['Rising Star'],
    kits: {
      'Dragonhide': 'LT5',
      'Dragonhide KB': 'LT5',
      'Diamond': 'LT5'
    },
    points: 270
  },
  {
    rank: 14,
    name: 'Kylaz9',
    avatar: 'Ky',
    badges: ['Elite Master'],
    kits: {
      'Dragonhide': 'HT5',
      'Emerald KB': 'HT5',
      'Emerald': 'LT5',
      'Dragonhide KB': 'LT5',
      'Diamond': 'LT5'
    },
    points: 340
  },
  {
    rank: 15,
    name: 'Server_pvp',
    avatar: 'Sp',
    badges: ['PvP Specialist'],
    kits: {
      'Emerald': 'HT5',
      'Emerald KB': 'LT4',
      'Dragonhide KB': 'LT4',
      'Dragonhide': 'HT4',
      'Diamond': 'HT4'
    },
    points: 310
  }
];

// Color mapping for tier badges
const tierColors = {
  'HT1': '#ff4d4d', 'LT1': '#ff8533',
  'HT2': '#ffb31a', 'LT2': '#ffd633',
  'HT3': '#a3e635', 'LT3': '#4ade80',
  'HT4': '#2dd4bf', 'LT4': '#38bdf8',
  'HT5': '#60a5fa', 'LT5': '#818cf8'
};

function createBadge(text) {
  const b = document.createElement('div');
  b.className = 'badge';
  b.textContent = text;
  return b;
}

function createKitBadge(kitName, tier) {
  const badge = document.createElement('div');
  badge.className = 'kit-badge';
  badge.textContent = tier;
  badge.style.backgroundColor = tierColors[tier] || '#6366f1';
  badge.title = kitName;
  return badge;
}

function renderPlayers(list) {
  const container = document.getElementById('playersList');
  container.innerHTML = '';
  
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'player-card';
    
    // Rank
    const rank = document.createElement('div');
    rank.className = 'rank';
    rank.textContent = p.rank;
    
    // Avatar
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = p.avatar;
    
    // Player Meta (Name, Badges)
    const meta = document.createElement('div');
    meta.className = 'player-meta';
    
    const name = document.createElement('div');
    name.className = 'player-name';
    name.textContent = p.name;
    
    const badges = document.createElement('div');
    badges.className = 'player-badges';
    p.badges.forEach(b => badges.appendChild(createBadge(b)));
    
    meta.appendChild(name);
    meta.appendChild(badges);
    
    // Kits Display
    const kitsContainer = document.createElement('div');
    kitsContainer.className = 'kits-container';
    Object.entries(p.kits).forEach(([kitName, tier]) => {
      kitsContainer.appendChild(createKitBadge(kitName, tier));
    });
    
    // Points
    const points = document.createElement('div');
    points.className = 'points';
    points.textContent = p.points + ' PTS';
    
    card.appendChild(rank);
    card.appendChild(avatar);
    card.appendChild(meta);
    card.appendChild(kitsContainer);
    card.appendChild(points);
    
    container.appendChild(card);
  });
}

// Initial render
renderPlayers(players);
