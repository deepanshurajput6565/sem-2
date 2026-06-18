// src/App.jsx
import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSlider from './components/HeroSlider.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Footer from './components/Footer.jsx';
import { products, CATEGORIES } from './data/products.js';

export default function App() {
  // ----- Cart state -----
  // Each cart item = { ...product, quantity }. Kept as a flat array
  // rather than normalized by id, since the catalog here is small;
  // for a larger catalog you'd switch to a Map/object keyed by id.
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ----- Search & filter state -----
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Add a product to the cart. If it already exists, bump its quantity
  // instead of creating a duplicate line item.
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleIncrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const handleDecrement = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        // Drop the line item entirely once quantity hits 0
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Total item count shown in the navbar badge (sum of quantities, not
  // just number of distinct line items).
  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  // ----- Filtering logic -----
  // Recomputed only when query, category, or the source catalog changes.
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All Categories' || product.category === selectedCategory;
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Lock body scroll while the cart drawer is open (nice-to-have UX detail)
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={CATEGORIES}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        {/* Hide the hero slider while actively searching, so results feel immediate */}
        {!searchQuery && (
          <div className="mb-8">
            <HeroSlider />
          </div>
        )}

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-800">
            {searchQuery
              ? `Results for "${searchQuery}"`
              : selectedCategory === 'All Categories'
              ? 'Today\u2019s Deals For You'
              : selectedCategory}
          </h2>
          <span className="text-sm text-gray-500">{filteredProducts.length} items</span>
        </div>

        <ProductGrid
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          searchQuery={searchQuery}
        />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
      />
    </div>
  );
}
