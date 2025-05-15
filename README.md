# Travel Bags E-commerce Website

A modern, high-performance e-commerce website built with Next.js for selling premium travel bags and accessories.

## Features

- 🛍️ Product catalog with filtering and sorting
- 🛒 Shopping cart functionality
- 🔍 Detailed product pages
- 📱 Responsive design
- ⚡ Fast page loads with Next.js
- 🎨 Modern UI with Tailwind CSS
- 🔒 Type-safe with TypeScript

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/travel-bags-store.git
cd travel-bags-store
```

2. Install dependencies:
```bash
npm install
```

3. Add product images:
- Place product images in the `public/images` directory
- Follow the image guidelines in `public/images/README.md`

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
travel-bags-store/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── cart/           # Shopping cart page
│   │   ├── products/       # Product listing and details
│   │   └── layout.tsx      # Root layout
│   ├── components/         # Reusable components
│   └── context/           # React context providers
├── public/                # Static assets
│   └── images/           # Product images
└── package.json          # Project dependencies
```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Lucide React](https://lucide.dev/) - Beautiful icons

## SEO Optimization

The website is optimized for search engines with:
- Semantic HTML structure
- Meta tags and descriptions
- Optimized images
- Fast loading times
- Mobile responsiveness

## Performance Optimization

- Image optimization with Next.js Image component
- Client-side state management
- Responsive images
- Code splitting
- CSS optimization with Tailwind

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details 