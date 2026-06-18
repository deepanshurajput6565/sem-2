// src/components/StarRating.jsx
import React from 'react';
import { Star, StarHalf } from 'lucide-react';

/**
 * Renders a 5-star rating row from a decimal rating value (e.g. 4.6).
 * Shows full stars, one half star where applicable, and the numeric
 * review count alongside it.
 */
export default function StarRating({ rating, reviewCount, size = 14 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center text-amber-dark">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} size={size} fill="currentColor" strokeWidth={0} />
        ))}
        {hasHalfStar && <StarHalf size={size} fill="currentColor" strokeWidth={0} />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} size={size} className="text-gray-300" fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-blue-700 hover:text-amber-dark hover:underline cursor-pointer">
          {reviewCount.toLocaleString()}
        </span>
      )}
    </div>
  );
}
