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
