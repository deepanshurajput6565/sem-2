// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, ChevronDown, MapPin, Menu, X } from 'lucide-react';

/**
 * Top navigation bar.
 * - Logo
 * - Category dropdown + search input (combined into one "search bar" unit,
 *   the classic Amazon pattern, but restyled flat/modern)
 * - Cart icon with a live item-count badge
 *
 * Controlled inputs: `searchQuery` and `selectedCategory` are owned by App
 * and passed down, so the ProductGrid filtering logic lives in one place.
 */
export default function Navbar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  cartCount,
  onCartClick,
}) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the category dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCategoryOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-md">
      {/* Top row: logo, search, cart */}
      <div className="max-w-7xl mx-auto flex items-center gap-3 px-4 py-3">
        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-1.5 hover:bg-navy-hover rounded-md transition-colors"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 shrink-0 select-none">
          <span className="text-2xl font-extrabold tracking-tight">
            nexa<span className="text-amber-light">.</span>
          </span>
        </a>

        {/* Delivery location — purely decorative, mirrors Amazon's pattern, hidden on small screens */}
        <div className="hidden lg:flex items-center gap-1 text-xs ml-2 cursor-pointer hover:text-amber-light transition-colors">
          <MapPin size={18} />
          <div className="leading-tight">
            <p className="text-gray-300">Deliver to</p>
            <p className="font-semibold">New Delhi 110041</p>
          </div>
        </div>

        {/* Search bar with category dropdown — flex-1 to fill available space */}
        <div className="flex-1 flex max-w-3xl mx-auto h-10 rounded-lg overflow-hidden shadow-sm">
          {/* Category dropdown */}
          <div className="relative hidden sm:block" ref={dropdownRef}>
            <button
              onClick={() => setCategoryOpen((v) => !v)}
              className="h-full bg-gray-100 hover:bg-gray-200 text-navy text-sm px-3 flex items-center gap-1 border-r border-gray-300 transition-colors"
            >
              <span className="max-w-[110px] truncate">{selectedCategory}</span>
              <ChevronDown size={14} />
            </button>
            {categoryOpen && (
              <ul className="absolute top-full left-0 mt-1 w-48 bg-white text-gray-800 rounded-md shadow-lg overflow-hidden z-50 animate-fade-in">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCategoryOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-amber-light/30 transition-colors ${
                        cat === selectedCategory ? 'font-semibold text-amber-dark' : ''
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search input */}
          <div className="relative flex-1 bg-white">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, brands, and categories..."
              className="w-full h-full px-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* Search button (decorative — filtering already happens live as you type) */}
          <button className="bg-amber-light hover:bg-amber-dark px-4 flex items-center justify-center transition-colors">
            <Search size={18} className="text-navy" />
          </button>
        </div>

        {/* Cart icon with badge */}
        <button
          onClick={onCartClick}
          className="relative flex items-center gap-1.5 p-2 hover:bg-navy-hover rounded-md transition-colors shrink-0"
          aria-label="Open cart"
        >
          <div className="relative">
            <ShoppingCart size={26} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-light text-navy text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-fade-in">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </div>
          <span className="hidden sm:inline text-sm font-semibold">Cart</span>
        </button>
      </div>

      {/* Bottom strip: quick category links (desktop only) */}
      <div className="hidden md:flex bg-navy-light px-4 py-1.5 gap-5 max-w-7xl mx-auto w-full text-xs">
        {categories.slice(1).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`hover:text-amber-light transition-colors ${
              cat === selectedCategory ? 'text-amber-light font-semibold' : 'text-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-light px-4 py-3 flex flex-col gap-2 animate-slide-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setMobileMenuOpen(false);
              }}
              className={`text-left text-sm py-1.5 ${
                cat === selectedCategory ? 'text-amber-light font-semibold' : 'text-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
