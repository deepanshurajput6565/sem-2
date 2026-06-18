// src/components/ProductGrid.jsx
import React from 'react';
import ProductCard from './ProductCard.jsx';
import { SearchX } from 'lucide-react';

/**
 * Responsive CSS Grid of ProductCards.
 * Breakpoints: 2 cols on mobile, 3 on tablet, 4 on desktop, 5 on xl screens.
 * Shows a friendly empty state when the search/category filters return nothing.
 */
export default function ProductGrid({ products, onAddToCart, searchQuery }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <SearchX size={48} className="text-gray-300 mb-4" />
        <h3 className="text-lg font-semibold text-gray-700">
          No results for &ldquo;{searchQuery}&rdquo;
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Try a different keyword or browse all categories.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
