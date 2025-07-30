'use client';

import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { gsap } from 'gsap';
import Image from 'next/image'; // Import Next.js Image

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
      const children = Array.from(productListRef.current.children);
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
          gsap.killTweensOf(children);
        };
      }
    }
  }, [products, theme]);

  return (
    <div
      ref={productListRef}
      className={`${
        theme === 'theme2'
          ? 'flex flex-col gap-4 sm:gap-6'
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'
      } mt-[var(--spacing)]`}
      role="region"
      aria-label="Product Listings"
    >
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="border rounded-[var(--border-radius)] bg-card p-[var(--spacing)] sm:p-[calc(var(--spacing)*1.25)] product-card"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300} 
              height={400} 
              className="w-full h-32 sm:h-40 lg:h-48 object-contain mb-[var(--spacing)]"
              priority={true} // For LCP optimization
              loading="eager" // Override lazy loading for LCP
            />
            <h3 className="text-base sm:text-lg font-semibold">{product.title}</h3>
            <p className="text-sm sm:text-base">${product.price}</p>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full text-sm sm:text-base" role="alert">
          No products available at the moment.
        </p>
      )}
    </div>
  );
};

export default ProductList;