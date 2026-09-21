// Leafwise interactive watering calculator
const PLANT_DATA = {
  "pothos": {
    "base_summer": 8,
    "base_winter": 16,
    "name": "Pothos"
  },
  "snake-plant": {
    "base_summer": 17,
    "base_winter": 35,
    "name": "Snake Plant"
  },
  "monstera-deliciosa": {
    "base_summer": 8,
    "base_winter": 17,
    "name": "Monstera Deliciosa"
  },
  "peace-lily": {
    "base_summer": 6,
    "base_winter": 12,
    "name": "Peace Lily"
  },
  "spider-plant": {
    "base_summer": 7,
    "base_winter": 14,
    "name": "Spider Plant"
  },
  "zz-plant": {
    "base_summer": 16,
    "base_winter": 30,
    "name": "ZZ Plant"
  },
  "fiddle-leaf-fig": {
    "base_summer": 8,
    "base_winter": 17,
    "name": "Fiddle Leaf Fig"
  },
  "aloe-vera": {
    "base_summer": 16,
    "base_winter": 30,
    "name": "Aloe Vera"
  },
  "philodendron-heartleaf": {
    "base_summer": 8,
    "base_winter": 16,
    "name": "Philodendron (Heartleaf)"
  },
  "string-of-pearls": {
    "base_summer": 14,
    "base_winter": 27,
    "name": "String of Pearls"
  },
  "orchid-phalaenopsis": {
    "base_summer": 8,
    "base_winter": 12,
    "name": "Orchid (Phalaenopsis)"
  },
  "rubber-plant": {
    "base_summer": 10,
    "base_winter": 21,
    "name": "Rubber Plant"
  },
  "boston-fern": {
    "base_summer": 4,
    "base_winter": 7,
    "name": "Boston Fern"
  },
  "calathea": {
    "base_summer": 6,
    "base_winter": 10,
    "name": "Calathea"
  },
  "jade-plant": {
    "base_summer": 14,
    "base_winter": 30,
    "name": "Jade Plant"
  },
  "chinese-money-plant": {
    "base_summer": 8,
    "base_winter": 16,
    "name": "Chinese Money Plant"
  },
  "english-ivy": {
    "base_summer": 7,
    "base_winter": 14,
    "name": "English Ivy"
  },
  "dracaena-marginata": {
    "base_summer": 12,
    "base_winter": 24,
    "name": "Dracaena Marginata"
  },
  "chinese-evergreen": {
    "base_summer": 8,
    "base_winter": 16,
    "name": "Chinese Evergreen"
  },
  "parlor-palm": {
    "base_summer": 8,
    "base_winter": 16,
    "name": "Parlor Palm"
  },
  "croton": {
    "base_summer": 6,
    "base_winter": 12,
    "name": "Croton"
  },
  "african-violet": {
    "base_summer": 6,
    "base_winter": 10,
    "name": "African Violet"
  },
  "christmas-cactus": {
    "base_summer": 8,
    "base_winter": 13,
    "name": "Christmas Cactus"
  },
  "money-tree": {
    "base_summer": 8,
    "base_winter": 17,
    "name": "Money Tree"
  },
  "bird-of-paradise": {
    "base_summer": 6,
    "base_winter": 12,
    "name": "Bird of Paradise"
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
