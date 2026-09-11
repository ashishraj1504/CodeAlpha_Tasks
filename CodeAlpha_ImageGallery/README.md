# Lumina - Modern Responsive Image Gallery

## 📌 Project Overview

**Lumina** is an interactive, responsive image gallery web application built using vanilla web technologies. It is designed to showcase photography in a clean, visual-first interface with smooth transitions, category filtering, instant keyword search, and an accessible fullscreen lightbox viewer.

The project emphasizes modern UI design principles, featuring an obsidian dark theme, subtle ambient lighting, glassmorphism, fluid typography, and zero external runtime dependencies.

---

## 🎯 Key Features

### 1. Curated Image Showcase
- Displays a grid of high-resolution photographs organized across 5 distinct categories: **Nature**, **Travel**, **Architecture**, **Animals**, and **Food**.
- Staggered card entrance animations and responsive auto-fit grid layout that adapts seamlessly to desktop, tablet, and mobile screens.
- Hover overlay displaying image title, category tag, and expand indicator.

### 2. Real-Time Search & Category Filtering
- **Category Filter Tabs**: Filter images by category with dynamic badges that display the count of items in each category.
- **Instant Search**: Live text search matching titles, categories, and image descriptions as the user types.
- **Search Controls**: Includes a clear button (`✕`) for immediate query reset.
- **Empty State**: Displays an informative fallback message with a "Reset All Filters" button when no results match.

### 3. Interactive Lightbox Modal
- **Full-Resolution View**: Clicking any image opens an immersive fullscreen modal view with backdrop blur.
- **Navigation Controls**: Next and Previous buttons with circular wrapping (loops from the last image back to the first).
- **Image Preloading**: Preloads adjacent images in the background to ensure instant navigation transitions.
- **Interactive Zoom**: Allows users to zoom into images (1.5x magnification) via a dedicated zoom button or by clicking directly on the image.
- **Image Loader & Error Handling**: Displays a loading spinner while high-resolution images load, with automatic fallback to thumbnails if an image fails to load.
- **Detailed Caption Bar**: Shows the current photo index (e.g., `3 / 24`), title, category tag, and photo description.

### 4. Accessibility & Touch Gestures
- **Keyboard Navigation**: Full keyboard support to navigate the gallery and control the lightbox modal.
- **Focus Management**: Focus trapping ensures keyboard users remain within the modal while it is open, and focus is restored to the triggering element upon exit.
- **Touch Gestures**: Horizontal swipe gestures (swipe left for next, swipe right for previous) on touch-enabled devices.

---

## 🗂️ Project Structure

```text
CodeAlpha_ImageGallery/
├── index.html     # Page layout, semantic markup, and lightbox modal structure
├── style.css      # Design system, CSS variables, layout grid, and responsive styling
├── script.js      # Gallery dataset, search/filter logic, and lightbox interactions
└── README.md      # Project documentation
```

### Component Details

- **[index.html](file:///d:/Project/CodeAlpha_ImageGallery/index.html)**: Contains semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<dialog>`), search inputs, dynamic containers, and accessible ARIA attributes.
- **[style.css](file:///d:/Project/CodeAlpha_ImageGallery/style.css)**: Implements CSS Custom Properties for colors, spacing, and shadows; builds responsive layouts with CSS Grid and Flexbox; incorporates glassmorphism with `backdrop-filter`; and defines micro-animations.
- **[script.js](file:///d:/Project/CodeAlpha_ImageGallery/script.js)**: Holds the image data array, manages application state (`currentCategory`, `searchQuery`, `currentLightboxIndex`), handles DOM rendering, and manages keyboard and touch event listeners.

---

## 🎮 Controls & Shortcuts

| Input / Key | Context | Action |
| :--- | :--- | :--- |
| <kbd>→</kbd> / Right Arrow | Lightbox | Next image |
| <kbd>←</kbd> / Left Arrow | Lightbox | Previous image |
| <kbd>ESC</kbd> | Lightbox | Close lightbox |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Gallery Grid | Open selected photo in lightbox |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Lightbox | Navigate modal controls (focus trap) |
| **Click Image** / **Zoom Button** | Lightbox | Toggle image zoom (1.5x) |
| **Swipe Left** | Mobile / Touch | Show next image |
| **Swipe Right** | Mobile / Touch | Show previous image |

---

## 🚀 How to Run the Project

This project runs in any modern web browser without requiring installation, package managers, or build steps.

1. **Direct Launch**:
   - Double-click `index.html` to open it in your default browser.

2. **Using a Local Server (Optional)**:
   - If using VS Code, right-click `index.html` and choose **"Open with Live Server"**.
   - Or start a quick Python server in the project folder:
     ```bash
     python -m http.server 8000
     ```
   - Open `http://localhost:8000` in your web browser.
