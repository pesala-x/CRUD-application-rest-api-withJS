// frontend/src/components/ProductForm.js
import React, { useState } from 'react';
import { createProduct } from '../services/productService';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProduct({ name, price });
            setName('');
            setPrice('');
            alert("Product added successfully!");
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
