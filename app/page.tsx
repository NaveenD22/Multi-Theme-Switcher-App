
import { Suspense } from 'react';
import ProductList from '@/components/ProductList';
import { Product } from '@/components/ProductList';

const Home: React.FC = async () => {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'force-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const products: Product[] = await res.json();

  return (
    <main className="container mx-auto px-4 py-6 sm:px-6 md:px-8 data-[theme=theme2]:flex data-[theme=theme2]:flex-col gap-6">
      <h1 className="text-3xl font-bold md:text-4xl">Welcome to Our Store</h1>
      <p className="mb-6 max-w-2xl">
        Discover our amazing products with a theme that suits your style.
      </p>
      <button className="btn-primary mb-6">Shop Now</button>
      <Suspense fallback={<div className="text-center">Loading products...</div>}>
        <ProductList products={products} />
      </Suspense>
    </main>
  );
};

export default Home;