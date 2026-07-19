type Category = 'Sport' | 'Cruiser' | 'Touring' | 'Dirt' | 'Adventure' | 'Naked' | 'Electric';

interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  created_at: Date;
  description: string;
  year: number;
  horsepower: number;
}

async function fetchMotorcycles(): Promise<Motorcycle[]> {
  const response = await fetch('https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.map((item: any) => ({
    ...item,
    created_at: new Date(item.created_at),
    horsepower: item.horsepower || 100 
  }));
}

function renderMotorcycleCard(motorcycle: Motorcycle): string {
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
          <span class="motorcycle-card-engine">${motorcycle.horsepower} HP</span>
        </div>
      </div>
    </article>
  `;
}

class MotorcycleGalleryApp {
  private allMotorcycles: Motorcycle[] = [];

  constructor() {
    this.init();
  }

  private async init() {
    try {
      this.allMotorcycles = await fetchMotorcycles();
      this.renderMotorcycles();
      this.attachEventListeners();
    } catch (error) {
      console.error('Failed to initialize motorcycle gallery:', error);
    }
  }

  public renderMotorcycles(): void {
    const grid = document.getElementById('motorcycle-grid') as HTMLElement;
    const resultsNumber = document.getElementById('results-number') as HTMLElement;
    
    if (grid) {
      grid.innerHTML = this.allMotorcycles.map(m => renderMotorcycleCard(m)).join('');
    }
    if (resultsNumber) {
      resultsNumber.textContent = this.allMotorcycles.length.toString();
    }
  }

  private attachEventListeners(): void {
    const filterInput = document.getElementById('filter-input') as HTMLInputElement;
    if (filterInput) {
      filterInput.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        const query = target.value.toLowerCase();
        const filtered = this.allMotorcycles.filter(m => 
          m.name.toLowerCase().includes(query) || 
          m.manufacturer.toLowerCase().includes(query) ||
          m.category.toLowerCase().includes(query)
        );
        
        const grid = document.getElementById('motorcycle-grid') as HTMLElement;
        const resultsNumber = document.getElementById('results-number') as HTMLElement;
        
        if (grid) {
          grid.innerHTML = filtered.map(m => renderMotorcycleCard(m)).join('');
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
