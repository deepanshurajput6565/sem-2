// src/components/HeroSlider.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Big Summer Tech Sale',
    subtitle: 'Up to 40% off headphones, watches & cameras',
    cta: 'Shop Electronics',
    bg: 'from-indigo-700 to-blue-900',
    image:
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Refresh Your Wardrobe',
    subtitle: 'New season styles starting at $24.99',
    cta: 'Shop Fashion',
    bg: 'from-rose-600 to-orange-700',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Home Decor Refresh',
    subtitle: 'Cozy up your space for less',
    cta: 'Shop Home Decor',
    bg: 'from-emerald-700 to-teal-900',
    image:
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80',
  },
];

/**
 * Auto-playing hero carousel with manual prev/next controls and
 * clickable dot indicators. Pauses autoplay briefly after manual
 * interaction so the user's choice doesn't get immediately overridden.
 */
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay every 5s; resets whenever `current` changes (including manual clicks)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] overflow-hidden rounded-2xl shadow-card">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.bg} opacity-90`} />
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
          />
          <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 sm:px-12 md:px-16 text-white max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-2 sm:mb-3 drop-shadow-md">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6">
              {slide.subtitle}
            </p>
            <button className="bg-amber-light hover:bg-amber-dark text-navy hover:text-white font-semibold px-5 py-2.5 rounded-lg text-sm sm:text-base transition-colors duration-200">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? 'w-6 bg-amber-light' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
