// frontend/src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { getAllProducts, deleteProduct } from '../services/productService';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const data = await getAllProducts();
            setProducts(data);
        } catch (error) {
            console.error("Error loading products:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            loadProducts(); // Refresh list after deletion
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
