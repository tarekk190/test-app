import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Travel Bags Store | Premium Travel Bags and Accessories',
  description: 'Discover our premium collection of travel bags, backpacks, and accessories. High-quality, durable bags for all your travel needs.',
  keywords: 'travel bags, luggage, backpacks, suitcases, travel accessories',
  metadataBase: new URL('https://your-domain.vercel.app'),
  openGraph: {
    title: 'Travel Bags Store | Premium Travel Bags and Accessories',
    description: 'Discover our premium collection of travel bags, backpacks, and accessories. High-quality, durable bags for all your travel needs.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Bags Store | Premium Travel Bags and Accessories',
    description: 'Discover our premium collection of travel bags, backpacks, and accessories. High-quality, durable bags for all your travel needs.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 2000,
              style: {
                background: '#333',
                color: '#fff',
                padding: '16px',
                borderRadius: '8px',
              },
              success: {
                iconTheme: {
                  primary: '#22c55e',
                  secondary: '#fff',
                },
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  )
} 