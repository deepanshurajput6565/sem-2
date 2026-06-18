// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="text-white font-semibold mb-3">Get to Know Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-amber-light cursor-pointer transition-colors">About Nexa</li>
            <li className="hover:text-amber-light cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-amber-light cursor-pointer transition-colors">Press Releases</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Connect with Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-amber-light cursor-pointer transition-colors">Facebook</li>
            <li className="hover:text-amber-light cursor-pointer transition-colors">Instagram</li>
            <li className="hover:text-amber-light cursor-pointer transition-colors">X (Twitter)</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Let Us Help You</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-amber-light cursor-pointer transition-colors">Your Account</li>
            <li className="hover:text-amber-light cursor-pointer transition-colors">Returns & Orders</li>
            <li className="hover:text-amber-light cursor-pointer transition-colors">Help Center</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Nexa</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-amber-light cursor-pointer transition-colors">Sell on Nexa</li>
            <li className="hover:text-amber-light cursor-pointer transition-colors">Affiliate Program</li>
            <li className="hover:text-amber-light cursor-pointer transition-colors">Advertise</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © 2026 Nexa, Inc. — Built as a demo project. Not affiliated with Amazon.
      </div>
    </footer>
  );
}
