// src/api/client.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
  // Products
  getProducts: () => axios.get(`${API_BASE_URL}/products`).then(res => res.data),
  getProduct: (id) => axios.get(`${API_BASE_URL}/products/${id}`).then(res => res.data),
  createProduct: (data) => axios.post(`${API_BASE_URL}/products`, data).then(res => res.data),
  updateProduct: (id, data) => axios.put(`${API_BASE_URL}/products/${id}`, data).then(res => res.data),
  deleteProduct: (id) => axios.delete(`${API_BASE_URL}/products/${id}`).then(res => res.data),
  
  // Orders
  getOrders: () => axios.get(`${API_BASE_URL}/orders`).then(res => res.data),
  createOrder: (data) => axios.post(`${API_BASE_URL}/orders`, data).then(res => res.data),
};