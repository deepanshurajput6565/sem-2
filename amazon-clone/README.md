# Nexa — Next-Gen E-Commerce UI (Amazon-Inspired)

A modern, fully responsive e-commerce storefront built with **React (Hooks, functional components)** and **Tailwind CSS**. Inspired by Amazon's core shopping experience, but redesigned with a flatter, cleaner "next-gen" visual language.

## Tech Stack
- React 18 (functional components + Hooks only — no class components)
- Tailwind CSS 3
- Vite (fast dev server + build)
- lucide-react (icon set)

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:
```bash
npm run build
npm run preview
```

## Component Architecture

```
src/
├── App.jsx                  # Owns global state: cart, search query, category filter
├── data/
│   └── products.js          # Mock product catalog (9 items across 4 categories)
└── components/
    ├── Navbar.jsx            # Logo, live search, category dropdown, cart badge
    ├── HeroSlider.jsx         # Auto-playing carousel with manual controls
    ├── ProductGrid.jsx        # Responsive grid + empty-state handling
    ├── ProductCard.jsx        # Individual product tile + "Add to Cart"
    ├── StarRating.jsx         # Reusable star-rating renderer
    ├── CartDrawer.jsx         # Slide-out cart panel, qty controls, subtotal
    └── Footer.jsx             # Site footer links
```

### State Management Pattern
All cart/search/filter state lives in `App.jsx` and is passed down via props ("lifted state"). This keeps the data flow easy to trace for a project of this size:

- `cart` (array of `{ ...product, quantity }`) — mutated via `handleAddToCart`, `handleIncrement`, `handleDecrement`, `handleRemove`
- `searchQuery` / `selectedCategory` — drive the `filteredProducts` memoized selector
- `cartCount` — derived with `useMemo`, drives the Navbar badge

If the app grows further (multi-page routing, persisted cart, user auth), the natural next step is to extract this into a `CartContext` + `useReducer`, or adopt Zustand/Redux — the current shape makes that migration straightforward since all mutations are already isolated into named handler functions.

## Design Notes
- **Navbar**: `#131921` deep slate, sticky on scroll, collapses to a hamburger menu on mobile
- **Cards**: white surfaces, soft `shadow-card` at rest, lifts to `shadow-cardHover` + scale on hover
- **CTAs**: amber/yellow (`#f0c14b` → `#f3a847` on hover) with a color-invert hover transition
- **Responsive grid**: 2 cols (mobile) → 3 (tablet) → 4 (desktop) → 5 (xl)
- Search filtering is real-time (no submit button required) and combines with the category filter
- Images sourced from Unsplash via direct URLs (no API key required)

## Known Simplifications (by design, for a demo scope)
- Checkout button is non-functional (no payment integration)
- Cart state resets on page reload (no localStorage/backend persistence)
- Category dropdown filters client-side mock data only
