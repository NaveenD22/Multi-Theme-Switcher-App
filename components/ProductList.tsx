'use client';

import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { gsap } from 'gsap';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { theme } = useContext(ThemeContext);
  const productListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (productListRef.current) {
      const children = Array.from(productListRef.current.children); // Convert HTMLCollection to array
      if (children.length > 0) {
        gsap.fromTo(
          children,
          { opacity: 0, y: 20, willChange: 'opacity, transform' },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            onComplete: () => {
              if (productListRef.current) productListRef.current.style.willChange = 'auto';
            },
          }
        );
        return () => {
          gsap.killTweensOf(children); // Cleanup GSAP animations
        };
      }
    }
  }, [products, theme]);

  return (
    <div
      ref={productListRef}
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ${theme === 'theme2' ? 'flex flex-col' : ''}`}
      role="region"
      aria-label="Product Listings"
    >
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg bg-card p-4 md:p-6"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full" role="alert">
          No products available at the moment.
        </p>
      )}
    </div>
  );
};

export default ProductList;