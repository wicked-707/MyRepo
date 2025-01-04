// src/components/ProductCard.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <span className="text-green-600 font-bold">${product.price}</span>
    </div>
  );
};

export default ProductCard;