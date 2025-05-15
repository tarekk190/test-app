'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import toast from 'react-hot-toast';

export default function CartPage() {
  const { state, dispatch } = useCart();

  const updateQuantity = useCallback((id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    try {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id, quantity: newQuantity },
      });
      toast.success('Cart updated successfully', {
        icon: '✨',
      });
    } catch (error) {
      toast.error('Failed to update cart');
    }
  }, [dispatch]);

  const removeItem = useCallback((id: string, itemName: string) => {
    try {
      dispatch({
        type: 'REMOVE_ITEM',
        payload: id,
      });
      toast.success(`${itemName} removed from cart`, {
        icon: '🗑️',
      });
    } catch (error) {
      toast.error('Failed to remove item');
    }
  }, [dispatch]);

  const handleCheckout = useCallback(() => {
    // Implement checkout logic here
    toast.success('Proceeding to checkout...', {
      icon: '🛒',
    });
  }, []);

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some items to your cart to get started.</p>
          <a
            href="/products"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Browse Products
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 sm:py-16">
      <div className="px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md p-4 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">${item.price}</p>
                      
                      <div className="flex items-center justify-center sm:justify-start space-x-4">
                        <div className="flex items-center border rounded-full">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 sm:p-2 hover:bg-gray-100 rounded-l-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 sm:w-12 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 sm:p-2 hover:bg-gray-100 rounded-r-full transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center sm:items-end gap-2">
                      <p className="font-semibold text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id, item.name)}
                        className="text-red-600 hover:text-red-800 transition-colors p-2 rounded-full hover:bg-red-50"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between pt-4 border-t">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-xl">${state.total.toFixed(2)}</span>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 