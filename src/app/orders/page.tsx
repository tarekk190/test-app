'use client';

import React, { useEffect, useState } from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered';
  total: number;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  trackingNumber?: string;
}

const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    date: '2024-02-15',
    status: 'delivered',
    total: 299.97,
    trackingNumber: 'TRK123456789',
    items: [
      {
        name: 'Adventure Backpack Pro',
        quantity: 2,
        price: 129.99,
      },
      {
        name: 'Hiking Daypack',
        quantity: 1,
        price: 79.99,
      },
    ],
  },
  {
    id: 'ORD-002',
    date: '2024-02-20',
    status: 'shipped',
    total: 89.99,
    trackingNumber: 'TRK987654321',
    items: [
      {
        name: 'Urban Travel Duffel',
        quantity: 1,
        price: 89.99,
      },
    ],
  },
];

const statusIcons = {
  processing: Package,
  shipped: Truck,
  delivered: CheckCircle,
};

const statusColors = {
  processing: 'text-yellow-600',
  shipped: 'text-blue-600',
  delivered: 'text-green-600',
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setOrders(mockOrders);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No orders found.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => {
            const StatusIcon = statusIcons[order.status];
            const statusColor = statusColors[order.status];

            return (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold">Order #{order.id}</h2>
                    <p className="text-gray-600">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className={`flex items-center ${statusColor}`}>
                    <StatusIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium capitalize">{order.status}</span>
                  </div>
                </div>

                <div className="border-t border-b border-gray-200 py-4 my-4">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center mb-2"
                    >
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-600 ml-2">x{item.quantity}</span>
                      </div>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    {order.trackingNumber && (
                      <p className="text-sm text-gray-600">
                        Tracking Number: {order.trackingNumber}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-xl font-bold">${order.total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
} 