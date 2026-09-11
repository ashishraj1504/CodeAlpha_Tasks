'use strict';

const GALLERY_DATA = [
  // Nature Category
  {
    id: 1,
    title: "Alpine Mountain Peaks",
    category: "nature",
    thumb: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    description: "Jagged snow-dusted alpine ridges piercing through high-altitude cloud cover in the Dolomites."
  },
  {
    id: 2,
    title: "Emerald Pine Forest",
    category: "nature",
    thumb: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85",
    description: "Morning sunbeams piercing through the dense canopy of an ancient coniferous woodland."
  },
  {
    id: 3,
    title: "Serene Forest Cascade",
    category: "nature",
    thumb: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1600&q=85",
    description: "A secluded mountain stream tumbling softly over mossy volcanic slate boulders."
  },
  {
    id: 4,
    title: "Golden Desert Dunes",
    category: "nature",
    thumb: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85",
    description: "Wind-sculpted sand ripples glowing warmly in the quiet transition between sunset and dusk."
  },
  {
    id: 5,
    title: "Misty Coastal Shoreline",
    category: "nature",
    thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    description: "Pristine turquoise waters lapping gently along an untouched tropical shoreline."
  },

  // Travel Category
  {
    id: 6,
    title: "Venice Canal Gondolas",
    category: "travel",
    thumb: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1600&q=85",
    description: "Traditional gondolas moored along the historic stone banks of Venice's grand waterways."
  },
  {
    id: 7,
    title: "Cappadocia Sunrise Flight",
    category: "travel",
    thumb: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1600&q=85",
    description: "Hundreds of hot air balloons ascending synchronously over Anatolia's volcanic fairy chimneys."
  },
  {
    id: 8,
    title: "Tokyo Neon Twilight",
    category: "travel",
    thumb: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=85",
    description: "The electric, neon-lit skyline of Shinjuku coming to vibrant life after sunset."
  },
  {
    id: 9,
    title: "Parisian Street & Eiffel",
    category: "travel",
    thumb: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=85",
    description: "Charming Haussmannian boulevard creating a classic frame for the distant Eiffel Tower."
  },
  {
    id: 10,
    title: "Santorini Cliffside Vista",
    category: "travel",
    thumb: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85",
    description: "Whitewashed cubist architecture and sapphire church domes overlooking the Aegean caldera."
  },

  // Architecture Category
  {
    id: 11,
    title: "Geometric Skyscraper Glass",
    category: "architecture",
    thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    description: "Reflective triangular curtain-wall facade reaching steeply into the crystal blue sky."
  },
  {
    id: 12,
    title: "Minimalist Concrete Spiral",
    category: "architecture",
    thumb: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    description: "Raw architectural concrete curves carving clean chiaroscuro shadows in an art pavilion."
  },
  {
    id: 13,
    title: "Contemporary Villa Lines",
    category: "architecture",
    thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    description: "Sleek cantilevered modern residence blending glass, warm teak, and stone."
  },
  {
    id: 14,
    title: "Curved Pavilion Vaults",
    category: "architecture",
    thumb: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=85",
    description: "Harmonious balance of organic forms and industrial engineering in civic space."
  },
  {
    id: 15,
    title: "Classical Stone Arches",
    category: "architecture",
    thumb: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1600&q=85",
    description: "Century-old masonry vaults capturing soft daylight in a quiet European cathedral cloister."
  },

  // Animals Category
  {
    id: 16,
    title: "Curious Red Fox",
    category: "animals",
    thumb: "https://images.unsplash.com/photo-1474511320723-9a56873ee018?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1474511320723-9a56873ee018?auto=format&fit=crop&w=1600&q=85",
    description: "A wild European red fox with vivid fur pausing in a flowering meadow."
  },
  {
    id: 17,
    title: "Majestic Savannah Lion",
    category: "animals",
    thumb: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1600&q=85",
    description: "A powerful male African lion scanning the golden grasses of the Serengeti."
  },
  {
    id: 18,
    title: "Playful Sea Otter",
    category: "animals",
    thumb: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=1600&q=85",
    description: "A charismatic sea otter floating peacefully amongst emerald coastal kelp beds."
  },
  {
    id: 19,
    title: "Royal Bengal Tiger",
    category: "animals",
    thumb: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=85",
    description: "Intense golden eyes and bold stripes emerging from the misty jungle foliage."
  },
  {
    id: 20,
    title: "Arctic Snowy Owl",
    category: "animals",
    thumb: "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?auto=format&fit=crop&w=1600&q=85",
    description: "Silent predatory flight of a snow-white owl gliding over frost-covered fields."
  },

  // Food Category
  {
    id: 21,
    title: "Wood-Fired Neapolitan Pizza",
    category: "food",
    thumb: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=85",
    description: "Charred leopard-spotted crust topped with San Marzano pomodoro, fresh fior di latte, and basil."
  },
  {
    id: 22,
    title: "Vibrant Summer Greens",
    category: "food",
    thumb: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=85",
    description: "A colorful garden salad composed of heirloom tomatoes, crisp radish, avocado, and herb dressing."
  },
  {
    id: 23,
    title: "Golden Berry Pancakes",
    category: "food",
    thumb: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1600&q=85",
    description: "Towering stack of fluffy golden buttermilk pancakes dressed with wild berries and maple syrup."
  },
  {
    id: 24,
    title: "Artisan Espresso & Pastry",
    category: "food",
    thumb: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=85",
    description: "Steaming velvety flat white with ornate latte art alongside a fresh, flaky French croissant."
  }
];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "nature", label: "Nature" },
  { id: "travel", label: "Travel" },
  { id: "architecture", label: "Architecture" },
  { id: "animals", label: "Animals" },
  { id: "food", label: "Food" }
];


const state = {
  currentCategory: "all",
  searchQuery: "",
  filteredImages: [...GALLERY_DATA],
  currentLightboxIndex: 0,
  isLightboxOpen: false,
  isZoomed: false,
  lastFocusedElement: null
};


const dom = {
  filterContainer: document.getElementById("filter-container"),
  galleryGrid: document.getElementById("gallery-grid"),
  emptyState: document.getElementById("empty-state"),
  resetFilterBtn: document.getElementById("reset-filter-btn"),
  searchInput: document.getElementById("gallery-search"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  galleryCountInfo: document.getElementById("gallery-count-info"),
  totalPhotosBadge: document.getElementById("total-photos-badge"),
  
  lightboxModal: document.getElementById("lightbox-modal"),
  lightboxBackdrop: document.getElementById("lightbox-backdrop"),
  lightboxImg: document.getElementById("lightbox-img"),
  lightboxLoader: document.getElementById("lightbox-loader"),
  lightboxCategory: document.getElementById("lightbox-category"),
  lightboxCounter: document.getElementById("lightbox-counter"),
  lightboxTitle: document.getElementById("lightbox-title"),
  lightboxDesc: document.getElementById("lightbox-desc"),
  lightboxCloseBtn: document.getElementById("lightbox-close-btn"),
  lightboxPrevBtn: document.getElementById("lightbox-prev-btn"),
  lightboxNextBtn: document.getElementById("lightbox-next-btn"),
  lightboxZoomToggle: document.getElementById("lightbox-zoom-toggle"),
  lightboxMediaContainer: document.getElementById("lightbox-media-container")
};

function getCategoryCount(catId) {
  if (catId === "all") return GALLERY_DATA.length;
  return GALLERY_DATA.filter(item => item.category.toLowerCase() === catId.toLowerCase()).length;
}

function renderFilterButtons() {
  if (!dom.filterContainer) return;
  dom.filterContainer.innerHTML = "";

  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filter-btn ${state.currentCategory === cat.id ? "active" : ""}`;
    btn.dataset.category = cat.id;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", state.currentCategory === cat.id ? "true" : "false");
    btn.setAttribute("aria-label", `Filter by ${cat.label} (${getCategoryCount(cat.id)} items)`);

    const count = getCategoryCount(cat.id);

    btn.innerHTML = `
      <span class="filter-label">${cat.label}</span>
      <span class="filter-count">${count}</span>
    `;

    btn.addEventListener("click", () => handleCategoryChange(cat.id));
    dom.filterContainer.appendChild(btn);
  });
}

function renderGallery() {
  if (!dom.galleryGrid) return;

  state.filteredImages = GALLERY_DATA.filter(item => {
    const matchesCategory = state.currentCategory === "all" || item.category.toLowerCase() === state.currentCategory.toLowerCase();
    const query = state.searchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      item.title.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query) || 
      (item.description && item.description.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  updateGalleryStatus();

  dom.galleryGrid.innerHTML = "";

  if (state.filteredImages.length === 0) {
    dom.emptyState.classList.remove("hidden");
    return;
  } else {
    dom.emptyState.classList.add("hidden");
  }

  const fragment = document.createDocumentFragment();

  state.filteredImages.forEach((imageItem, index) => {
    const card = document.createElement("article");
    card.className = "gallery-card";
    card.dataset.id = imageItem.id;
    card.dataset.index = index;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open ${imageItem.title} in full lightbox view`);

    card.style.animationDelay = `${Math.min(index * 0.04, 0.4)}s`;

    card.innerHTML = `
      <div class="card-img-wrapper">
        <img 
          src="${imageItem.thumb}" 
          alt="${imageItem.title} - ${imageItem.category} photograph" 
          class="gallery-img" 
          loading="lazy"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=700&q=80';"
        />
        <div class="card-overlay">
          <div class="card-top">
            <span class="category-tag tag-${imageItem.category.toLowerCase()}">${imageItem.category}</span>
            <div class="card-expand-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </div>
          </div>
          <div class="card-content">
            <h2 class="card-title">${imageItem.title}</h2>
            <div class="card-meta">
              <span>View capture details</span>
            </div>
          </div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(index));

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });

    fragment.appendChild(card);
  });

  dom.galleryGrid.appendChild(fragment);
}

function updateGalleryStatus() {
  const count = state.filteredImages.length;
  const catObj = CATEGORIES.find(c => c.id === state.currentCategory);
  const catLabel = catObj ? catObj.label : "All";

  if (state.searchQuery) {
    dom.galleryCountInfo.textContent = `Found ${count} capture${count === 1 ? "" : "s"} for "${state.searchQuery}" in ${catLabel}`;
  } else if (state.currentCategory === "all") {
    dom.galleryCountInfo.textContent = `Showing all ${count} captures`;
  } else {
    dom.galleryCountInfo.textContent = `Showing ${count} capture${count === 1 ? "" : "s"} in ${catLabel}`;
  }
}


function handleCategoryChange(categoryId) {
  if (state.currentCategory === categoryId) return;

  state.currentCategory = categoryId;

  const buttons = dom.filterContainer.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    const isActive = btn.dataset.category === categoryId;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  renderGallery();
}

function handleSearchInput(e) {
  state.searchQuery = e.target.value;
  dom.clearSearchBtn.classList.toggle("hidden", !state.searchQuery);
  renderGallery();
}

function clearSearch() {
  dom.searchInput.value = "";
  state.searchQuery = "";
  dom.clearSearchBtn.classList.add("hidden");
  renderGallery();
  dom.searchInput.focus();
}


function resetAllFilters() {
  state.currentCategory = "all";
  state.searchQuery = "";
  if (dom.searchInput) dom.searchInput.value = "";
  if (dom.clearSearchBtn) dom.clearSearchBtn.classList.add("hidden");
  renderFilterButtons();
  renderGallery();
}

function openLightbox(index) {
  if (!state.filteredImages.length) return;

  state.lastFocusedElement = document.activeElement;
  state.currentLightboxIndex = index;
  state.isLightboxOpen = true;
  state.isZoomed = false;

  dom.lightboxModal.classList.add("active");
  dom.lightboxModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  updateLightboxContent();

  dom.lightboxCloseBtn.focus();
}

function closeLightbox() {
  if (!state.isLightboxOpen) return;

  dom.lightboxModal.classList.remove("active");
  dom.lightboxModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  state.isLightboxOpen = false;
  state.isZoomed = false;
  dom.lightboxImg.classList.remove("zoomed");

  dom.lightboxImg.src = "";

  if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
    state.lastFocusedElement.focus();
  }
}

function updateLightboxContent() {
  const currentImage = state.filteredImages[state.currentLightboxIndex];
  if (!currentImage) return;

  const total = state.filteredImages.length;
  const currentPos = state.currentLightboxIndex + 1;

  dom.lightboxCounter.textContent = `${currentPos} / ${total}`;
  dom.lightboxTitle.textContent = currentImage.title;
  dom.lightboxDesc.textContent = currentImage.description || "";
  dom.lightboxCategory.textContent = currentImage.category;
  dom.lightboxCategory.className = `lightbox-category-tag tag-${currentImage.category.toLowerCase()}`;

  state.isZoomed = false;
  dom.lightboxImg.classList.remove("zoomed");

  dom.lightboxLoader.classList.add("active");
  dom.lightboxImg.classList.remove("fade-in");
  dom.lightboxImg.classList.add("fade-out");

  const tempImg = new Image();
  tempImg.src = currentImage.image;
  tempImg.onload = () => {
    dom.lightboxImg.src = currentImage.image;
    dom.lightboxImg.alt = `${currentImage.title} - ${currentImage.category}`;
    dom.lightboxLoader.classList.remove("active");
    dom.lightboxImg.classList.remove("fade-out");
    dom.lightboxImg.classList.add("fade-in");
  };

  tempImg.onerror = () => {
    dom.lightboxImg.src = currentImage.thumb;
    dom.lightboxImg.alt = currentImage.title;
    dom.lightboxLoader.classList.remove("active");
    dom.lightboxImg.classList.remove("fade-out");
    dom.lightboxImg.classList.add("fade-in");
  };

  preloadAdjacentImages();
}
function nextImage() {
  if (!state.isLightboxOpen || state.filteredImages.length <= 1) return;
  state.currentLightboxIndex = (state.currentLightboxIndex + 1) % state.filteredImages.length;
  updateLightboxContent();
}


function prevImage() {
  if (!state.isLightboxOpen || state.filteredImages.length <= 1) return;
  state.currentLightboxIndex = (state.currentLightboxIndex - 1 + state.filteredImages.length) % state.filteredImages.length;
  updateLightboxContent();
}

function toggleZoom() {
  state.isZoomed = !state.isZoomed;
  dom.lightboxImg.classList.toggle("zoomed", state.isZoomed);
}

function preloadAdjacentImages() {
  if (state.filteredImages.length <= 1) return;

  const nextIdx = (state.currentLightboxIndex + 1) % state.filteredImages.length;
  const prevIdx = (state.currentLightboxIndex - 1 + state.filteredImages.length) % state.filteredImages.length;

  const nextImg = new Image();
  nextImg.src = state.filteredImages[nextIdx].image;

  const prevImg = new Image();
  prevImg.src = state.filteredImages[prevIdx].image;
}

function handleKeyDown(e) {
  if (!state.isLightboxOpen) return;

  switch (e.key) {
    case "Escape":
      e.preventDefault();
      closeLightbox();
      break;
    case "ArrowRight":
    case "Right":
      e.preventDefault();
      nextImage();
      break;
    case "ArrowLeft":
    case "Left":
      e.preventDefault();
      prevImage();
      break;
    case "Tab":
      trapLightboxFocus(e);
      break;
  }
}

function trapLightboxFocus(e) {
  const focusable = dom.lightboxModal.querySelectorAll('button:not([disabled]), [tabindex="0"]');
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

let touchStartX = 0;
let touchStartY = 0;

function setupTouchGestures() {
  if (!dom.lightboxModal) return;

  dom.lightboxModal.addEventListener("touchstart", (e) => {
    if (!state.isLightboxOpen) return;
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  dom.lightboxModal.addEventListener("touchend", (e) => {
    if (!state.isLightboxOpen) return;
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;

    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX < 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  }, { passive: true });
}

function initEventListeners() {

  if (dom.searchInput) dom.searchInput.addEventListener("input", handleSearchInput);
  if (dom.clearSearchBtn) dom.clearSearchBtn.addEventListener("click", clearSearch);
  if (dom.resetFilterBtn) dom.resetFilterBtn.addEventListener("click", resetAllFilters);

  if (dom.lightboxCloseBtn) dom.lightboxCloseBtn.addEventListener("click", closeLightbox);
  if (dom.lightboxPrevBtn) dom.lightboxPrevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    prevImage();
  });
  if (dom.lightboxNextBtn) dom.lightboxNextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nextImage();
  });

  if (dom.lightboxZoomToggle) dom.lightboxZoomToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleZoom();
  });
  if (dom.lightboxImg) dom.lightboxImg.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleZoom();
  });

  if (dom.lightboxBackdrop) {
    dom.lightboxBackdrop.addEventListener("click", closeLightbox);
  }
  window.addEventListener("keydown", handleKeyDown);
  setupTouchGestures();
}

function initApp() {
  renderFilterButtons();
  renderGallery();
  initEventListeners();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
