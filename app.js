// Application data with Indian B-schools and names
const appData = {
  sports: [
    {"name": "Basketball", "boys": 4, "girls": 3, "infrastructure": 1, "type": "team", "mixed": true},
    {"name": "Football", "boys": 4, "girls": 3, "infrastructure": 1, "type": "team", "mixed": true},
    {"name": "Volleyball", "boys": 4, "girls": 3, "infrastructure": 1, "type": "team", "mixed": true},
    {"name": "Tennis", "boys": 1, "girls": 1, "infrastructure": 1, "type": "individual", "mixed": false},
    {"name": "Squash", "boys": 1, "girls": 1, "infrastructure": 1, "type": "individual", "mixed": false},
    {"name": "Pool", "boys": 1, "girls": 0, "infrastructure": 1, "type": "individual", "mixed": false},
    {"name": "Table Tennis", "boys": 1, "girls": 1, "infrastructure": 3, "type": "individual", "mixed": false},
    {"name": "Badminton", "boys": 1, "girls": 1, "infrastructure": 3, "type": "individual", "mixed": false},
    {"name": "Racing", "boys": 4, "girls": 4, "infrastructure": 1, "type": "team", "mixed": true},
    {"name": "Chess", "boys": 1, "girls": 0, "infrastructure": 4, "type": "individual", "mixed": false},
    {"name": "Carrom", "boys": 0, "girls": 1, "infrastructure": 4, "type": "individual", "mixed": false},
    {"name": "Powerlifting", "boys": 1, "girls": 1, "infrastructure": 2, "type": "individual", "mixed": false}
  ],
  colleges: [
    {"name": "IIM Sambalpur", "nickname": "Eagles", "fullName": "IIM Sambalpur Eagles"},
    {"name": "IIM Bodhgaya", "nickname": "Yellow Stars", "fullName": "IIM Bodhgaya Yellow Stars"},
    {"name": "XIMB Bhubaneswar", "nickname": "Corvettes", "fullName": "XIMB Corvettes"},
    {"name": "IIM Raipur", "nickname": "Tigers", "fullName": "IIM Raipur Tigers"},
    {"name": "KIIT", "nickname": "Warriors", "fullName": "KIIT Warriors"}
  ],
  matches: [
    {
      id: 1,
      sport: "Basketball",
      team1: "IIM Sambalpur Eagles",
      team2: "IIM Bodhgaya Yellow Stars",
      score1: 78,
      score2: 65,
      status: "Completed",
      day: 1,
      time: "2:00 PM",
      winner: "IIM Sambalpur Eagles"
    },
    {
      id: 2,
      sport: "Football",
      team1: "XIMB Corvettes",
      team2: "IIM Raipur Tigers",
      score1: 2,
      score2: 1,
      status: "Live",
      day: 1,
      time: "3:00 PM"
    },
    {
      id: 3,
      sport: "Tennis",
      team1: "Arjun Sharma (FMS Warriors)",
      team2: "Priya Patel (IIM Sambalpur Eagles)",
      score1: "6-4, 6-3",
      score2: "",
      status: "Upcoming",
      day: 2,
      time: "8:00 AM",
      winner: "Arjun Sharma (FMS Warriors)"
    },
    {
      id: 4,
      sport: "Volleyball",
      team1: "IIM Bodhgaya Yellow Stars",
      team2: "KIIT Warriors",
      score1: 3,
      score2: 1,
      status: "Completed",
      day: 1,
      time: "4:00 PM",
      winner: "IIM Bodhgaya Yellow Stars"
    },
    {
      id: 5,
      sport: "Table Tennis",
      team1: "Pooja Iyer (IIM Sambalpur Eagles)",
      team2: "Kavya Menon (KIIT Warriors)",
      score1: "3-1",
      score2: "",
      status: "Completed",
      day: 1,
      time: "2:30 PM",
      winner: "Pooja Iyer (IIM Sambalpur Eagles)"
    },
    {
      id: 6,
      sport: "Badminton",
      team1: "Sneha Reddy (IIM Raipur Tigers)",
      team2: "Ananya Sharma (IIM Bodhgaya Yellow Stars)",
      score1: "21-15, 21-18",
      score2: "",
      status: "Completed",
      day: 1,
      time: "3:30 PM",
      winner: "Sneha Reddy (IIM Raipur Tigers)"
    },
    {
      id: 7,
      sport: "Chess",
      team1: "Vikash Kumar (KIIT Warriors)",
      team2: "Rajesh Nair (XIMB Corvettes)",
      score1: "1-0",
      score2: "",
      status: "Completed",
      day: 1,
      time: "5:00 PM",
      winner: "Vikash Kumar (FMS Delhi Warriors)"
    }
  ],
  playerStats: [
    {
      name: "Rohan Gupta",
      college: "IIM Sambalpur Eagles",
      sport: "Basketball",
      points: 24.5,
      rebounds: 8.2,
      assists: 5.1
    },
    {
      name: "Ananya Sharma",
      college: "IIM Bodhgaya Yellow Stars",
      sport: "Tennis",
      wins: 3,
      losses: 0,
      sets: "6-1"
    },
    {
      name: "Karan Singh",
      college: "XIMB Corvettes",
      sport: "Football",
      goals: 4,
      assists: 2,
      minutes: 180
    },
    {
      name: "Sneha Reddy",
      college: "IIM Raipur Tigers",
      sport: "Badminton",
      wins: 5,
      losses: 1,
      sets: "21-19 avg"
    },
    {
      name: "Vikash Kumar",
      college: "KIIT Warriors",
      sport: "Chess",
      wins: 4,
      losses: 0,
      rating: "1850"
    },
    {
      name: "Pooja Iyer",
      college: "IIM Sambalpur Eagles",
      sport: "Table Tennis",
      wins: 6,
      losses: 2,
      sets: "11-8 avg"
    },
    {
      name: "Rajesh Nair",
      college: "XIMB Corvettes",
      sport: "Squash",
      wins: 4,
      losses: 1,
      games: "3-1 avg"
    },
    {
      name: "Kavya Menon",
      college: "KIIT Warriors",
      sport: "Carrom",
      wins: 7,
      losses: 0,
      points: "25-12 avg"
    },
    {
      name: "Arun Patel",
      college: "IIM Raipur Tigers",
      sport: "Swimming",
      time: "1:45.32",
      strokes: "Freestyle",
      distance: "100m"
    },
    {
      name: "Priya Singh",
      college: "IIM Bodhgaya Yellow Stars",
      sport: "Powerlifting",
      weight: "75kg",
      lift: "Deadlift",
      record: "180kg"
    }
  ],
  news: [
    {
      id: 1,
      title: "Udghosh 2025 Opens with Grand Ceremony",
      content: "The inter-college sports fest Udgodh 2025 kicked off with a spectacular opening ceremony featuring cultural performances from all participating B-schools.",
      date: "2025-08-15",
      category: "Event"
    },
    {
      id: 2,
      title: "Basketball Thriller: Eagles Defeat Yellow Stars 78-65",
      content: "In a nail-biting match, IIM Sambalpur Eagles secured victory against IIM Bodhgaya Yellow Stars with Rohan Gupta leading the scoring with 28 points.",
      date: "2025-08-15",
      category: "Match Result"
    },
    {
      id: 3,
      title: "Cultural Night Tomorrow Evening",
      content: "Don't miss the cultural performances by all B-schools tomorrow evening at 7:00 PM in the main auditorium.",
      date: "2025-08-15",
      category: "Announcement"
    },
    {
      id: 4,
      title: "Ananya Sharma Dominates Tennis Courts",
      content: "IIM Bodhgaya's Ananya Sharma remains undefeated in tennis, showcasing exceptional skills in all matches so far.",
      date: "2025-08-15",
      category: "Player Highlight"
    },
    {
      id: 5,
      title: "Volleyball Action Heats Up",
      content: "IIM Bodhgaya Yellow Stars dominated KIIT Warriors 3-1 in an exciting volleyball match that kept spectators on the edge of their seats.",
      date: "2025-08-15",
      category: "Match Result"
    },
    {
      id: 6,
      title: "Chess Master Vikash Kumar Continues Winning Streak",
      content: "KIIT's Vikash Kumar showcased exceptional chess skills with a perfect record of 4 wins and 0 losses in the tournament so far.",
      date: "2025-08-15",
      category: "Player Spotlight"
    }
  ],
  leaderboard: [
    {
      college: "IIM Sambalpur Eagles",
      gold: 2,
      silver: 1,
      bronze: 1,
      total: 4,
      points: 13
    },
    {
      college: "IIM Bodhgaya Yellow Stars",
      gold: 1,
      silver: 2,
      bronze: 0,
      total: 3,
      points: 9
    },
    {
      college: "XIMB Corvettes",
      gold: 1,
      silver: 0,
      bronze: 2,
      total: 3,
      points: 7
    },
    {
      college: "IIM Raipur Tigers",
      gold: 0,
      silver: 1,
      bronze: 1,
      total: 2,
      points: 3
    },
    {
      college: "KIIT Warriors",
      gold: 0,
      silver: 0,
      bronze: 1,
      total: 1,
      points: 1
    }
  ]
};

// State management
let currentPage = 'home';
let filteredMatches = [...appData.matches];
let filteredPlayers = [...appData.playerStats];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeSchedule();
  initializeFilters();
  initializePlayerSearch();
  renderResults();
  renderPlayerStats();
  renderNews();
  updateLiveScores();
  addInteractiveEffects();
  initializeAccessibility();
});

// Navigation functionality
function initializeNavigation() {
  const navItems = document.querySelectorAll('.nav__item');
  
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const targetPage = this.getAttribute('data-page');
      switchPage(targetPage);
    });
  });
}

function switchPage(pageId) {
  // Update nav items
  const navItems = document.querySelectorAll('.nav__item');
  navItems.forEach(item => {
    item.classList.remove('nav__item--active');
    if (item.getAttribute('data-page') === pageId) {
      item.classList.add('nav__item--active');
    }
  });

  // Hide all pages first
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('page--active');
  });
  
  // Show target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('page--active');
  }

  currentPage = pageId;
  
  // Trigger any page-specific initialization
  setTimeout(() => {
    if (pageId === 'results') {
      renderResults();
    } else if (pageId === 'player-stats') {
      renderPlayerStats();
    } else if (pageId === 'news') {
      renderNews();
    } else if (pageId === 'live-scores') {
      updateLiveScoreDisplay();
    }
  }, 50);
}

// Schedule functionality
function initializeSchedule() {
  const dayToggles = document.querySelectorAll('.day-card__toggle');
  
  dayToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const dayId = this.getAttribute('data-day');
      const content = document.getElementById(`${dayId}-content`);
      
      if (content) {
        if (content.classList.contains('hidden')) {
          content.classList.remove('hidden');
          this.textContent = 'Collapse';
        } else {
          content.classList.add('hidden');
          this.textContent = 'Expand';
        }
      }
    });
  });
}

// Filter functionality
function initializeFilters() {
  const sportFilter = document.getElementById('sport-filter');
  const dayFilter = document.getElementById('day-filter');
  
  if (sportFilter) {
    sportFilter.addEventListener('change', applyResultFilters);
  }
  if (dayFilter) {
    dayFilter.addEventListener('change', applyResultFilters);
  }
}

function applyResultFilters() {
  const sportFilter = document.getElementById('sport-filter');
  const dayFilter = document.getElementById('day-filter');
  
  const sportValue = sportFilter ? sportFilter.value : '';
  const dayValue = dayFilter ? dayFilter.value : '';
  
  filteredMatches = appData.matches.filter(match => {
    const sportMatch = !sportValue || match.sport === sportValue;
    const dayMatch = !dayValue || match.day.toString() === dayValue;
    return sportMatch && dayMatch && match.status === 'Completed';
  });
  
  renderResults();
}

// Player search functionality
function initializePlayerSearch() {
  const playerSearch = document.getElementById('player-search');
  const collegeFilter = document.getElementById('college-filter');
  
  if (playerSearch) {
    playerSearch.addEventListener('input', applyPlayerFilters);
  }
  if (collegeFilter) {
    collegeFilter.addEventListener('change', applyPlayerFilters);
  }
}

function applyPlayerFilters() {
  const playerSearch = document.getElementById('player-search');
  const collegeFilter = document.getElementById('college-filter');
  
  const searchValue = playerSearch ? playerSearch.value.toLowerCase() : '';
  const collegeValue = collegeFilter ? collegeFilter.value : '';
  
  filteredPlayers = appData.playerStats.filter(player => {
    const nameMatch = !searchValue || player.name.toLowerCase().includes(searchValue);
    const collegeMatch = !collegeValue || player.college === collegeValue;
    return nameMatch && collegeMatch;
  });
  
  renderPlayerStats();
}

// Render functions
function renderResults() {
  const resultsContainer = document.querySelector('.results-container');
  if (!resultsContainer) return;

  const completedMatches = filteredMatches.filter(match => match.status === 'Completed');
  
  if (completedMatches.length === 0) {
    resultsContainer.innerHTML = '<p>No results found for the selected filters.</p>';
    return;
  }

  resultsContainer.innerHTML = completedMatches.map(match => `
    <div class="result-card">
      <div class="result-card__sport">${match.sport}</div>
      <div class="result-card__match">
        <div class="result-team ${match.winner === match.team1 ? 'result-team--winner' : ''}">
          <div class="result-team__name">${match.team1}</div>
          <div class="result-team__score">${match.score1}</div>
        </div>
        <div class="result-card__vs">defeated</div>
        <div class="result-team ${match.winner === match.team2 ? 'result-team--winner' : ''}">
          <div class="result-team__name">${match.team2}</div>
          <div class="result-team__score">${match.score2}</div>
        </div>
      </div>
      <div class="result-card__details">
        <span>Day ${match.day} • ${match.time}</span>
        <span class="result-card__summary">Winner: ${match.winner}</span>
      </div>
    </div>
  `).join('');
}

function renderPlayerStats() {
  const playerCards = document.querySelector('.player-cards');
  if (!playerCards) return;

  if (filteredPlayers.length === 0) {
    playerCards.innerHTML = '<p>No players found matching your search criteria.</p>';
    return;
  }

  playerCards.innerHTML = filteredPlayers.map(player => {
    let statsHtml = '';
    
    if (player.sport === 'Basketball') {
      statsHtml = `
        <div class="stat">
          <div class="stat__label">Points</div>
          <div class="stat__value">${player.points}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Rebounds</div>
          <div class="stat__value">${player.rebounds}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Assists</div>
          <div class="stat__value">${player.assists}</div>
        </div>
      `;
    } else if (player.sport === 'Tennis' || player.sport === 'Badminton') {
      statsHtml = `
        <div class="stat">
          <div class="stat__label">Wins</div>
          <div class="stat__value">${player.wins}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Losses</div>
          <div class="stat__value">${player.losses}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Sets</div>
          <div class="stat__value">${player.sets}</div>
        </div>
      `;
    } else if (player.sport === 'Football') {
      statsHtml = `
        <div class="stat">
          <div class="stat__label">Goals</div>
          <div class="stat__value">${player.goals}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Assists</div>
          <div class="stat__value">${player.assists}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Minutes</div>
          <div class="stat__value">${player.minutes}</div>
        </div>
      `;
    } else if (player.sport === 'Chess') {
      statsHtml = `
        <div class="stat">
          <div class="stat__label">Wins</div>
          <div class="stat__value">${player.wins}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Losses</div>
          <div class="stat__value">${player.losses}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Rating</div>
          <div class="stat__value">${player.rating}</div>
        </div>
      `;
    } else if (player.sport === 'Table Tennis' || player.sport === 'Carrom') {
      statsHtml = `
        <div class="stat">
          <div class="stat__label">Wins</div>
          <div class="stat__value">${player.wins}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Losses</div>
          <div class="stat__value">${player.losses}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Points</div>
          <div class="stat__value">${player.points || player.sets}</div>
        </div>
      `;
    } else if (player.sport === 'Swimming') {
      statsHtml = `
        <div class="stat">
          <div class="stat__label">Best Time</div>
          <div class="stat__value">${player.time}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Stroke</div>
          <div class="stat__value">${player.strokes}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Distance</div>
          <div class="stat__value">${player.distance}</div>
        </div>
      `;
    } else if (player.sport === 'Squash') {
      statsHtml = `
        <div class="stat">
          <div class="stat__label">Wins</div>
          <div class="stat__value">${player.wins}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Losses</div>
          <div class="stat__value">${player.losses}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Games</div>
          <div class="stat__value">${player.games}</div>
        </div>
      `;
    } else if (player.sport === 'Powerlifting') {
      statsHtml = `
        <div class="stat">
          <div class="stat__label">Weight</div>
          <div class="stat__value">${player.weight}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Lift</div>
          <div class="stat__value">${player.lift}</div>
        </div>
        <div class="stat">
          <div class="stat__label">Record</div>
          <div class="stat__value">${player.record}</div>
        </div>
      `;
    }

    return `
      <div class="player-card">
        <div class="player-card__header">
          <h3>${player.name}</h3>
          <div class="player-card__college">${player.college}</div>
        </div>
        <div class="player-card__sport">${player.sport}</div>
        <div class="player-card__stats">
          ${statsHtml}
        </div>
      </div>
    `;
  }).join('');
}

function renderNews() {
  const newsContainer = document.querySelector('.news-container');
  if (!newsContainer) return;

  newsContainer.innerHTML = appData.news.map(article => `
    <article class="news-card">
      <div class="news-card__category">${article.category}</div>
      <h2>${article.title}</h2>
      <p>${article.content}</p>
      <div class="news-card__meta">
        <span>${formatDate(article.date)}</span>
      </div>
    </article>
  `).join('');
}

function updateLiveScores() {
  // Simulate live score updates for demo purposes
  const liveMatches = appData.matches.filter(match => match.status === 'Live');
  
  liveMatches.forEach(match => {
    // Simulate random score updates every 15 seconds
    setInterval(() => {
      if (match.status === 'Live' && Math.random() > 0.7) {
        if (Math.random() > 0.5) {
          match.score1++;
        } else {
          match.score2++;
        }
        updateLiveScoreDisplay();
      }
    }, 15000);
  });
}

function updateLiveScoreDisplay() {
  const liveScoreElements = document.querySelectorAll('.match-card--live .team__score');
  const liveMatch = appData.matches.find(match => match.status === 'Live');
  
  if (liveMatch && liveScoreElements.length >= 2) {
    liveScoreElements[0].textContent = liveMatch.score1;
    liveScoreElements[1].textContent = liveMatch.score2;
  }
}

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}

// Add some interactive animations
function addInteractiveEffects() {
  // Add hover effects to cards
  const cards = document.querySelectorAll('.card, .match-card, .result-card, .player-card, .news-card, .overview-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = 'var(--shadow-lg)';
      this.style.transition = 'all var(--duration-normal) var(--ease-standard)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'var(--shadow-sm)';
    });
  });
}

// Accessibility improvements
function initializeAccessibility() {
  // Add focus indicators
  const focusableElements = document.querySelectorAll('button, a, input, select, [tabindex]');
  
  focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
      this.setAttribute('data-focused', 'true');
    });
    
    element.addEventListener('blur', function() {
      this.removeAttribute('data-focused');
    });
  });
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    // Close any open modals or dropdowns
    const openDropdowns = document.querySelectorAll('.dropdown--open');
    openDropdowns.forEach(dropdown => {
      dropdown.classList.remove('dropdown--open');
    });
  }
});

// Simulate real-time updates
setInterval(() => {
  const liveMatch = appData.matches.find(match => match.status === 'Live');
  if (liveMatch && Math.random() > 0.8) {
    updateLiveScoreDisplay();
  }
}, 30000); // Update every 30 seconds

// Export for potential testing or external access
window.udgodh2025 = {
  switchPage,
  applyResultFilters,
  applyPlayerFilters,
  data: appData
};
