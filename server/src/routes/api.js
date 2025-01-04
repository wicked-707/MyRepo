import axios from 'axios';

// Create axios instance with default config
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const api = {
    // Products
    getProducts: async () => {
        const response = await axiosInstance.get('/products');
        return response.data;
    },
    
    getProduct: async (id) => {
        const response = await axiosInstance.get(`/products/${id}`);
        return response.data;
    },
    
    createProduct: async (data) => {
        const response = await axiosInstance.post('/products', data);
        return response.data;
    },
    
    updateProduct: async (id, data) => {
        const response = await axiosInstance.put(`/products/${id}`, data);
        return response.data;
    },
    
    deleteProduct: async (id) => {
        const response = await axiosInstance.delete(`/products/${id}`);
        return response.data;
    },

    // Users
    getUsers: async () => {
        const response = await axiosInstance.get('/users');
        return response.data;
    },
    
    createUser: async (data) => {
        const response = await axiosInstance.post('/users', data);
        return response.data;
    }
};

// Error interceptor
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error);
        if (error.response?.status === 401) {
            // Handle unauthorized error
            console.log('Unauthorized - Redirect to login');
        }
        return Promise.reject(error);
    }
);

export default api;