'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Package, Home, Menu, X } from 'lucide-react';

export default function Header() {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              TravelBags
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <Home className="h-5 w-5 mr-1.5" />
                <span className="font-medium">Home</span>
              </Link>
              
              <Link 
                href="/products" 
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <span className="font-medium">Products</span>
              </Link>
              
              <Link 
                href="/orders" 
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <Package className="h-5 w-5 mr-1.5" />
                <span className="font-medium">Orders</span>
              </Link>
            </div>

            <div className="h-6 w-px bg-gray-200"></div>

            <Link 
              href="/cart" 
              className="relative flex items-center text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          } border-t border-gray-200 py-4`}
        >
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5 mr-2" />
              <span>Home</span>
            </Link>
            <Link
              href="/products"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Products</span>
            </Link>
            <Link
              href="/orders"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <Package className="h-5 w-5 mr-2" />
              <span>Orders</span>
            </Link>
            <Link
              href="/cart"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              <span>Cart ({itemCount})</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 