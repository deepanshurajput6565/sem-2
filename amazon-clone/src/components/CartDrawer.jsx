// src/components/CartDrawer.jsx
import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

/**
 * Slide-in cart panel (drawer pattern rather than a full page navigation,
 * so users never lose their place while shopping).
 *
 * Receives the cart array and three mutator callbacks from App:
 *   - onIncrement(id)
 *   - onDecrement(id)
 *   - onRemove(id)
 *
 * Subtotal is derived on every render from the cart prop — no separate
 * piece of state to keep in sync, which avoids a whole class of bugs.
 */
export default function CartDrawer({ isOpen, onClose, cart, onIncrement, onDecrement, onRemove }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-navy flex items-center gap-2">
            <ShoppingBag size={20} /> Your Cart ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items list */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 gap-2">
              <ShoppingBag size={48} className="text-gray-200" />
              <p className="font-medium text-gray-500">Your cart is empty</p>
              <p className="text-sm">Add items to see them here.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg bg-gray-50 shrink-0"
                  />
                  <div className="flex-1 flex flex-col">
                    <p className="text-sm font-medium text-gray-800 line-clamp-2">{item.title}</p>
                    <p className="text-sm font-bold text-gray-900 mt-1">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity stepper */}
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => onDecrement(item.id)}
                          className="px-2 py-1 hover:bg-gray-100 transition-colors"
                          aria-label={`Decrease quantity of ${item.title}`}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-semibold min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onIncrement(item.id)}
                          className="px-2 py-1 hover:bg-gray-100 transition-colors"
                          aria-label={`Increase quantity of ${item.title}`}
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Remove button */}
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1.5"
                        aria-label={`Remove ${item.title} from cart`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer: subtotal + checkout */}
        {cart.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 bg-gray-50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-xl font-bold text-navy">${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-amber-light hover:bg-amber-dark text-navy hover:text-white font-bold py-3 rounded-lg transition-colors duration-200">
              Proceed to Checkout
            </button>
            <p className="text-xs text-gray-400 text-center mt-2">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
