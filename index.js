class MotorcycleGalleryApp {
  constructor() {
    this.allMotorcycles = [];
    this.init();
  }

  async init() {
    try {
      const response = await fetch('https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json');
      this.allMotorcycles = await response.json();
      this.renderMotorcycles();
      this.attachEventListeners();
    } catch (error) {
      console.error('Initialization failed:', error);
    }
  }

  renderMotorcycleCard(motorcycle) {
    return `
      <article class="motorcycle-card">
        <div class="motorcycle-card-image-container">
          <img src="${motorcycle.image_url}" alt="${motorcycle.name}" loading="lazy" />
          <span class="motorcycle-card-year-badge">${motorcycle.year}</span>
        </div>
        <div class="motorcycle-card-content">
          <h3 class="motorcycle-card-title">${motorcycle.name}</h3>
          <p class="motorcycle-card-manufacturer">${motorcycle.manufacturer}</p>
          <span class="motorcycle-card-category">${motorcycle.category}</span>
          <p class="motorcycle-card-description">${motorcycle.description}</p>
          <div class="motorcycle-card-meta">
            <span class="motorcycle-card-price">$${motorcycle.price.toLocaleString()}</span>
            <span class="motorcycle-card-engine">${motorcycle.horsepower || 'N/A'} HP</span>
          </div>
        </div>
      </article>
    `;
  }

  renderMotorcycles() {
    const grid = document.getElementById('motorcycle-grid');
    const resultsNumber = document.getElementById('results-number');
    
    if (grid) {
      grid.innerHTML = this.allMotorcycles.map(m => this.renderMotorcycleCard(m)).join('');
    }
    if (resultsNumber) {
      resultsNumber.textContent = this.allMotorcycles.length.toString();
    }
  }

  attachEventListeners() {
    const filterInput = document.getElementById('filter-input');
    if (filterInput) {
      filterInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = this.allMotorcycles.filter(m => 
          m.name.toLowerCase().includes(query) || 
          m.manufacturer.toLowerCase().includes(query) ||
          m.category.toLowerCase().includes(query)
        );
        
        const grid = document.getElementById('motorcycle-grid');
        const resultsNumber = document.getElementById('results-number');
        
        if (grid) {
          grid.innerHTML = filtered.map(m => this.renderMotorcycleCard(m)).join('');
        }
        if (resultsNumber) {
          resultsNumber.textContent = filtered.length.toString();
        }
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MotorcycleGalleryApp();
});
