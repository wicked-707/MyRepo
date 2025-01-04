// src/components/ProductList.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import { api } from '../api/client';

const ProductList = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => api.getProducts()
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;