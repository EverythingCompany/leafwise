// Leafwise interactive watering calculator
const PLANT_DATA = {
  "pothos": {
    "base_summer": "8",
    "base_winter": "16",
    "name": "Pothos"
  },
  "snake-plant": {
    "base_summer": "17",
    "base_winter": "35",
    "name": "Snake Plant"
  },
  "monstera-deliciosa": {
    "base_summer": "8",
    "base_winter": "17",
    "name": "Monstera Deliciosa"
  },
  "peace-lily": {
    "base_summer": "6",
    "base_winter": "12",
    "name": "Peace Lily"
  },
  "spider-plant": {
    "base_summer": "7",
    "base_winter": "14",
    "name": "Spider Plant"
  },
  "zz-plant": {
    "base_summer": "16",
    "base_winter": "30",
    "name": "ZZ Plant"
  },
  "fiddle-leaf-fig": {
    "base_summer": "8",
    "base_winter": "17",
    "name": "Fiddle Leaf Fig"
  },
  "aloe-vera": {
    "base_summer": "16",
    "base_winter": "30",
    "name": "Aloe Vera"
  },
  "philodendron-heartleaf": {
    "base_summer": "8",
    "base_winter": "16",
    "name": "Philodendron (Heartleaf)"
  },
  "string-of-pearls": {
    "base_summer": "14",
    "base_winter": "27",
    "name": "String of Pearls"
  },
  "orchid-phalaenopsis": {
    "base_summer": "8",
    "base_winter": "12",
    "name": "Orchid (Phalaenopsis)"
  },
  "rubber-plant": {
    "base_summer": "10",
    "base_winter": "21",
    "name": "Rubber Plant"
  },
  "boston-fern": {
    "base_summer": "4",
    "base_winter": "7",
    "name": "Boston Fern"
  },
  "calathea": {
    "base_summer": "6",
    "base_winter": "10",
    "name": "Calathea"
  },
  "jade-plant": {
    "base_summer": "14",
    "base_winter": "30",
    "name": "Jade Plant"
  },
  "chinese-money-plant": {
    "base_summer": "8",
    "base_winter": "16",
    "name": "Chinese Money Plant"
  },
  "english-ivy": {
    "base_summer": "7",
    "base_winter": "14",
    "name": "English Ivy"
  },
  "dracaena-marginata": {
    "base_summer": "12",
    "base_winter": "24",
    "name": "Dracaena Marginata"
  },
  "chinese-evergreen": {
    "base_summer": "8",
    "base_winter": "16",
    "name": "Chinese Evergreen"
  },
  "parlor-palm": {
    "base_summer": "8",
    "base_winter": "16",
    "name": "Parlor Palm"
  },
  "croton": {
    "base_summer": "6",
    "base_winter": "12",
    "name": "Croton"
  },
  "african-violet": {
    "base_summer": "6",
    "base_winter": "10",
    "name": "African Violet"
  },
  "christmas-cactus": {
    "base_summer": "8",
    "base_winter": "13",
    "name": "Christmas Cactus"
  },
  "money-tree": {
    "base_summer": "8",
    "base_winter": "17",
    "name": "Money Tree"
  },
  "bird-of-paradise": {
    "base_summer": "6",
    "base_winter": "12",
    "name": "Bird of Paradise"
  },
  "ponytail-palm": {
    "base_summer": "17",
    "base_winter": "34",
    "name": "Ponytail Palm"
  },
  "areca-palm": {
    "base_summer": "6",
    "base_winter": "11",
    "name": "Areca Palm"
  },
  "prayer-plant": {
    "base_summer": "6",
    "base_winter": "10",
    "name": "Prayer Plant"
  },
  "monstera-adansonii": {
    "base_summer": "7",
    "base_winter": "15",
    "name": "Monstera Adansonii"
  },
  "hoya": {
    "base_summer": "12",
    "base_winter": "24",
    "name": "Hoya"
  },
  "bromeliad-guzmania": {
    "base_summer": "8",
    "base_winter": "14",
    "name": "Bromeliad"
  },
  "string-of-hearts": {
    "base_summer": "12",
    "base_winter": "24",
    "name": "String of Hearts"
  },
  "burros-tail": {
    "base_summer": "14",
    "base_winter": "28",
    "name": "Burro's Tail"
  },
  "haworthia": {
    "base_summer": "16",
    "base_winter": "31",
    "name": "Haworthia"
  },
  "echeveria": {
    "base_summer": "14",
    "base_winter": "28",
    "name": "Echeveria"
  },
  "weeping-fig": {
    "base_summer": "8",
    "base_winter": "16",
    "name": "Weeping Fig"
  },
  "norfolk-island-pine": {
    "base_summer": "7",
    "base_winter": "12",
    "name": "Norfolk Island Pine"
  },
  "peperomia": {
    "base_summer": "10",
    "base_winter": "18",
    "name": "Peperomia"
  },
  "anthurium": {
    "base_summer": "7",
    "base_winter": "12",
    "name": "Anthurium"
  },
  "alocasia": {
    "base_summer": "6",
    "base_winter": "12",
    "name": "Alocasia (African Mask Plant)"
  },
  "kentia-palm": {
    "base_summer": "8",
    "base_winter": "16",
    "name": "Kentia Palm"
  },
  "cast-iron-plant": {
    "base_summer": "12",
    "base_winter": "21",
    "name": "Cast Iron Plant"
  },
  "air-plant": {
    "base_summer": "3",
    "base_winter": "7",
    "name": "Air Plant"
  },
  "begonia": {
    "base_summer": "7",
    "base_winter": "12",
    "name": "Begonia"
  },
  "coleus": {
    "base_summer": "5",
    "base_winter": "9",
    "name": "Coleus"
  },
  "schefflera": {
    "base_summer": "9",
    "base_winter": "18",
    "name": "Schefflera (Umbrella Plant)"
  },
  "dieffenbachia": {
    "base_summer": "8",
    "base_winter": "16",
    "name": "Dieffenbachia (Dumb Cane)"
  },
  "fittonia": {
    "base_summer": "4",
    "base_winter": "7",
    "name": "Fittonia (Nerve Plant)"
  },
  "bamboo-palm": {
    "base_summer": "8",
    "base_winter": "16",
    "name": "Bamboo Palm"
  },
  "lucky-bamboo": {
    "base_summer": "8",
    "base_winter": "16",
    "name": "Lucky Bamboo"
  },
  "asparagus-fern": {
    "base_summer": "5",
    "base_winter": "10",
    "name": "Asparagus Fern"
  },
  "maidenhair-fern": {
    "base_summer": "2.5",
    "base_winter": "5",
    "name": "Maidenhair Fern"
  },
  "staghorn-fern": {
    "base_summer": "8",
    "base_winter": "16",
    "name": "Staghorn Fern"
  },
  "bird-nest-fern": {
    "base_summer": "6",
    "base_winter": "12",
    "name": "Bird's Nest Fern"
  },
  "rabbit-foot-fern": {
    "base_summer": "5",
    "base_winter": "9",
    "name": "Rabbit's Foot Fern"
  },
  "philodendron-xanadu": {
    "base_summer": "7",
    "base_winter": "13",
    "name": "Philodendron Xanadu"
  },
  "tradescantia-zebrina": {
    "base_summer": "6",
    "base_winter": "11",
    "name": "Tradescantia Zebrina (Wandering Dude)"
  },
  "purple-heart-plant": {
    "base_summer": "6",
    "base_winter": "12",
    "name": "Purple Heart Plant"
  },
  "arrowhead-plant": {
    "base_summer": "7",
    "base_winter": "12",
    "name": "Arrowhead Plant"
  },
  "ficus-audrey": {
    "base_summer": "7",
    "base_winter": "14",
    "name": "Ficus Audrey"
  },
  "corn-plant": {
    "base_summer": "9",
    "base_winter": "18",
    "name": "Corn Plant"
  },
  "song-of-india": {
    "base_summer": "8",
    "base_winter": "16",
    "name": "Song of India"
  },
  "satin-pothos": {
    "base_summer": "8",
    "base_winter": "15",
    "name": "Satin Pothos"
  },
  "caladium": {
    "base_summer": "5",
    "base_winter": "30",
    "name": "Caladium"
  },
  "polka-dot-plant": {
    "base_summer": "4.5",
    "base_winter": "8",
    "name": "Polka Dot Plant"
  },
  "string-of-turtles": {
    "base_summer": "10",
    "base_winter": "20",
    "name": "String of Turtles"
  },
  "string-of-dolphins": {
    "base_summer": "10",
    "base_winter": "20",
    "name": "String of Dolphins"
  },
  "panda-plant": {
    "base_summer": "12",
    "base_winter": "24",
    "name": "Panda Plant"
  },
  "flaming-katy": {
    "base_summer": "10",
    "base_winter": "18",
    "name": "Flaming Katy"
  },
  "aeonium": {
    "base_summer": "10",
    "base_winter": "14",
    "name": "Aeonium"
  },
  "crown-of-thorns": {
    "base_summer": "10",
    "base_winter": "18",
    "name": "Crown of Thorns"
  },
  "yucca-cane": {
    "base_summer": "12",
    "base_winter": "24",
    "name": "Yucca Cane"
  },
  "sago-palm": {
    "base_summer": "9",
    "base_winter": "18",
    "name": "Sago Palm"
  },
  "majesty-palm": {
    "base_summer": "5",
    "base_winter": "9",
    "name": "Majesty Palm"
  },
  "lady-palm": {
    "base_summer": "8",
    "base_winter": "16",
    "name": "Lady Palm"
  },
  "fishtail-palm": {
    "base_summer": "6",
    "base_winter": "11",
    "name": "Fishtail Palm"
  },
  "cat-palm": {
    "base_summer": "5",
    "base_winter": "9",
    "name": "Cat Palm"
  },
  "stromanthe-triostar": {
    "base_summer": "5",
    "base_winter": "9",
    "name": "Stromanthe Triostar"
  },
  "ctenanthe": {
    "base_summer": "6",
    "base_winter": "11",
    "name": "Ctenanthe (Never-Never Plant)"
  },
  "jasmine-plant": {
    "base_summer": "5",
    "base_winter": "10",
    "name": "Jasmine (Pink Jasmine)"
  },
  "hibiscus": {
    "base_summer": "4",
    "base_winter": "8",
    "name": "Hibiscus"
  },
  "geranium": {
    "base_summer": "6",
    "base_winter": "12",
    "name": "Geranium"
  },
  "cyclamen": {
    "base_summer": "21",
    "base_winter": "5",
    "name": "Cyclamen"
  },
  "amaryllis": {
    "base_summer": "7",
    "base_winter": "45",
    "name": "Amaryllis"
  },
  "venus-flytrap": {
    "base_summer": "2",
    "base_winter": "6",
    "name": "Venus Flytrap"
  },
  "pitcher-plant": {
    "base_summer": "2.5",
    "base_winter": "5",
    "name": "Pitcher Plant"
  },
  "ficus-bonsai": {
    "base_summer": "5",
    "base_winter": "9",
    "name": "Ficus Bonsai"
  },
  "meyer-lemon-tree": {
    "base_summer": "4",
    "base_winter": "8",
    "name": "Meyer Lemon Tree"
  },
  "avocado-plant": {
    "base_summer": "5",
    "base_winter": "9",
    "name": "Avocado Plant"
  },
  "elephant-ear-colocasia": {
    "base_summer": "4",
    "base_winter": "30",
    "name": "Elephant Ear"
  },
  "travelers-palm": {
    "base_summer": "6",
    "base_winter": "11",
    "name": "Traveler's Palm"
  },
  "ti-plant": {
    "base_summer": "6",
    "base_winter": "12",
    "name": "Ti Plant"
  },
  "shamrock-plant": {
    "base_summer": "6",
    "base_winter": "21",
    "name": "Shamrock Plant"
  },
  "african-milk-tree": {
    "base_summer": "12",
    "base_winter": "24",
    "name": "African Milk Tree"
  },
  "button-fern": {
    "base_summer": "6",
    "base_winter": "10",
    "name": "Button Fern"
  },
  "swedish-ivy": {
    "base_summer": "6",
    "base_winter": "11",
    "name": "Swedish Ivy"
  },
  "babys-tears": {
    "base_summer": "2.5",
    "base_winter": "6",
    "name": "Baby's Tears"
  },
  "bunny-ears-cactus": {
    "base_summer": "14",
    "base_winter": "30",
    "name": "Bunny Ears Cactus"
  },
  "barrel-cactus": {
    "base_summer": "16",
    "base_winter": "35",
    "name": "Golden Barrel Cactus"
  },
  "easter-cactus": {
    "base_summer": "7",
    "base_winter": "14",
    "name": "Easter Cactus"
  },
  "friendship-plant": {
    "base_summer": "6",
    "base_winter": "10",
    "name": "Friendship Plant"
  },
  "zebra-plant": {
    "base_summer": "5",
    "base_winter": "9",
    "name": "Zebra Plant"
  },
  "cape-primrose": {
    "base_summer": "6",
    "base_winter": "11",
    "name": "Cape Primrose"
  }
};

const LIGHT_MULTIPLIER = { low: 1.25, medium: 1.0, bright: 0.85 };
const POT_MULTIPLIER = { small: 0.85, medium: 1.0, large: 1.2 };

function initCalculator() {
  const btn = document.getElementById('calc-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const plantSlug = document.getElementById('plant-select').value;
    const light = document.getElementById('light-select').value;
    const pot = document.getElementById('pot-select').value;
    const season = document.getElementById('season-select').value;

    const plant = PLANT_DATA[plantSlug];
    if (!plant) return;

    const base = season === 'summer' ? plant.base_summer : plant.base_winter;
    const days = Math.round(base * LIGHT_MULTIPLIER[light] * POT_MULTIPLIER[pot]);

    const resultEl = document.getElementById('calc-result');
    resultEl.style.display = 'block';
    resultEl.innerHTML = `
      <h3>💧 Water your ${plant.name} approximately every <strong>${days} days</strong></h3>
      <p>This estimate is based on your selections. Always double-check by feeling the top few centimeters of soil before watering - if it's still damp, wait a bit longer.</p>
      <p><a href="plants/${plantSlug}.html">See the full ${plant.name} care guide →</a></p>
    `;
  });
}

document.addEventListener('DOMContentLoaded', initCalculator);

// Cookie consent banner (GDPR) - wired to Google's Consent Mode
(function() {
  function setConsent(granted) {
    if (typeof gtag !== 'function') return;
    var state = granted ? 'granted' : 'denied';
    gtag('consent', 'update', {
      'ad_storage': state,
      'ad_user_data': state,
      'ad_personalization': state,
      'analytics_storage': state
    });
  }
  function initCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;
    var choice;
    try { choice = localStorage.getItem('lw_cookie_consent'); } catch (e) { choice = null; }
    if (!choice) {
      banner.hidden = false;
    } else if (choice === 'accepted') {
      setConsent(true);
    }
    var acceptBtn = document.getElementById('cookie-accept');
    var declineBtn = document.getElementById('cookie-decline');
    if (acceptBtn) acceptBtn.addEventListener('click', function() {
      try { localStorage.setItem('lw_cookie_consent', 'accepted'); } catch (e) {}
      setConsent(true);
      banner.hidden = true;
    });
    if (declineBtn) declineBtn.addEventListener('click', function() {
      try { localStorage.setItem('lw_cookie_consent', 'declined'); } catch (e) {}
      setConsent(false);
      banner.hidden = true;
    });
  }
  document.addEventListener('DOMContentLoaded', initCookieBanner);
})();

// Homepage plant grid: category + pet-safe filtering
(function() {
  function initPlantFilters() {
    var grid = document.getElementById('plant-grid');
    if (!grid) return;
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.plant-card'));
    var buttons = Array.prototype.slice.call(document.querySelectorAll('#category-filters .filter-btn'));
    var petToggle = document.getElementById('pet-safe-toggle');
    var countEl = document.getElementById('filter-count');
    var noResults = document.getElementById('no-results');
    var activeCategory = 'all';

    function applyFilters() {
      var visible = 0;
      cards.forEach(function(card) {
        var matchesCategory = activeCategory === 'all' || card.getAttribute('data-category') === activeCategory;
        var matchesPet = !petToggle.checked || card.getAttribute('data-pet-safe') === 'true';
        var show = matchesCategory && matchesPet;
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      countEl.textContent = 'Showing ' + visible + ' of ' + cards.length + ' plant guides';
      noResults.hidden = visible !== 0;
    }

    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        buttons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-filter-category');
        applyFilters();
      });
    });
    if (petToggle) petToggle.addEventListener('change', applyFilters);
    applyFilters();
  }
  document.addEventListener('DOMContentLoaded', initPlantFilters);
})();
