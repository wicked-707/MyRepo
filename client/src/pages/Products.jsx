// src/pages/Products.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { api } from '../api/client';

const Products = () => {
    const { 
        data: products, 
        isLoading, 
        error 
    } = useQuery({
        queryKey: ['products'],
        queryFn: api.getProducts,
        onError: (error) => {
            console.error('Error fetching products:', error);
        }
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl">Loading products...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-red-500">
                    Error: {error.message || 'Failed to load products'}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Products</h1>
                <Link 
                    to="/" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Back to Home
                </Link>
            </div>
            
            {products?.length === 0 ? (
                <div className="text-center text-gray-500">
                    No products found
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products?.map((product) => (
                        <div 
                            key={product.id} 
                            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h2 className="text-xl font-semibold mb-2">
                                {product.name}
                            </h2>
                            <p className="text-gray-600 mb-4">
                                {product.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-green-600 font-bold">
                                    ${product.price}
                                </span>
                                <button 
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                                    onClick={() => {/* Add to cart functionality */}}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;