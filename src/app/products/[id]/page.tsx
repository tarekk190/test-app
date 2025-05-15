'use client';

import React, { useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ShoppingBag, Minus, Plus, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/lib/products';
import ProductImageSlider from '@/components/ProductImageSlider';
import toast from 'react-hot-toast';

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { dispatch } = useCart();
  
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const addToCart = useCallback(async () => {
    if (isAdding) return;
    
    setIsAdding(true);
    try {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          quantity,
        },
      });

      // Reset quantity after successful add
      setQuantity(1);
    } catch (error) {
      toast.error('Failed to add item to cart');
    } finally {
      setIsAdding(false);
    }
  }, [dispatch, isAdding, product, quantity]);

  const decreaseQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }, [quantity]);

  const increaseQuantity = useCallback(() => {
    setQuantity(prev => prev + 1);
  }, []);

  return (
    <div className="container mx-auto py-8 sm:py-16 relative">
      {/* Close Button */}
      <button
        onClick={() => router.push('/')}
        className="absolute right-4 top-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors shadow-md"
        aria-label="Return to home page"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="w-full">
            <ProductImageSlider images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6">
              ${product.price}
            </p>
            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded-full">
                <button
                  onClick={decreaseQuantity}
                  className="p-2 hover:bg-gray-100 rounded-l-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={quantity <= 1 || isAdding}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="p-2 hover:bg-gray-100 rounded-r-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isAdding}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={addToCart}
              disabled={isAdding}
              className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingBag className="h-5 w-5" />
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </button>

            {/* Features */}
            {product.features && (
              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && (
              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="font-medium capitalize">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 