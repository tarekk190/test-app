'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Filter } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/lib/products';
import toast from 'react-hot-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
}

const sortOptions = [
  { id: 'price-asc', name: 'Price: Low to High' },
  { id: 'price-desc', name: 'Price: High to Low' },
  { id: 'name-asc', name: 'Name: A to Z' },
  { id: 'name-desc', name: 'Name: Z to A' },
];

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState('price-asc');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { dispatch } = useCart();

  const addToCart = (product: Product) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: 1,
      },
    });
    toast.success(`Added ${product.name} to cart`, {
      icon: '🛍️',
    });
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto py-8 sm:py-16">
      <div className="px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Our Products</h1>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="sm:hidden flex items-center gap-2 px-4 py-2 border rounded-lg"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-64 p-2 border rounded-lg bg-white"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Filters */}
        <div className={`sm:hidden mb-6 ${isFilterOpen ? 'block' : 'hidden'}`}>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Filter By</h3>
            {/* Add your filter options here */}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative aspect-square">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors text-sm"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span className="hidden sm:inline">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 