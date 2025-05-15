"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import HomeSlider from "@/components/HomeSlider";
import { products } from "@/lib/products";

const image = [
  "/images/images.jpeg",
  "/images/image2.jpeg",
  "/images/image3.jpeg",
];

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      <Head>
        <title>Home | My Store</title>
        <meta
          name="description"
          content="Welcome to our store – premium products, free shipping, and lifetime warranty!"
        />
      </Head>

      <HomeSlider />

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={image[index] || "/images/default.jpg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <Link
                      href={`/products/${product.id}`}
                      className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Crafted with the finest materials for lasting durability
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Free Shipping</h3>
              <p className="text-gray-600">
                On all orders over $100 within the United States
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Lifetime Warranty</h3>
              <p className="text-gray-600">
                We stand behind our products with confidence
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
