// src/components/ProductCard.jsx
import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import StarRating from './StarRating.jsx';

/**
 * A single product tile used inside ProductGrid.
 * Pure presentational component — receives the product object and an
 * `onAddToCart` callback from its parent (lifted state pattern).
 */
export default function ProductCard({ product, onAddToCart }) {
  // Local "just added" flash state purely for micro-interaction feedback.
  // This does NOT hold cart truth — that lives in the App-level cart state.
  const [justAdded, setJustAdded] = useState(false);

  const discountPercent = product.originalPrice
    ? Math.round(100 - (product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    onAddToCart(product);
    setJustAdded(true);
    // Reset the "added" confirmation state after a short delay
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div className="group bg-white rounded-xl shadow-card hover:shadow-cardHover transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-1">
      {/* Image area */}
      <div className="relative bg-gray-50 aspect-square overflow-hidden">
        {product.badge && (
          <span
            className={`absolute top-3 left-3 z-10 text-[11px] font-bold uppercase tracking-wide px-2 py-1 rounded-full ${
              product.badge === 'Deal'
                ? 'bg-red-500 text-white'
                : product.badge === 'New'
                ? 'bg-emerald-500 text-white'
                : 'bg-navy text-white'
            }`}
          >
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content area */}
      <div className="flex flex-col flex-1 p-4">
        <p className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold mb-1">
          {product.category}
        </p>

        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 min-h-[40px]">
          {product.title}
        </h3>

        <div className="mb-2">
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        <div className="flex items-baseline gap-2 mb-4 mt-auto">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-xs font-semibold text-emerald-600">
                -{discountPercent}%
              </span>
            </>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
            justAdded
              ? 'bg-emerald-500 text-white'
              : 'bg-amber-light hover:bg-amber-dark text-navy hover:text-white'
          }`}
        >
          {justAdded ? (
            <>
              <Check size={16} /> Added
            </>
          ) : (
            <>
              <ShoppingCart size={16} /> Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
