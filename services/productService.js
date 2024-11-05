const ProductModel = require('../models/productModel');

const ProductService = {
    getAllProducts: async () => {
        return await ProductModel.findAll();
    },

    getProductById: async (id) => {
        const product = await ProductModel.findById(id);
        if (!product) throw new Error('Product not found');
        return product;
    },

    createProduct: async (name, price) => {
        return await ProductModel.create(name, price);
    },

    updateProduct: async (id, name, price) => {
        const affectedRows = await ProductModel.update(id, name, price);
        if (affectedRows === 0) throw new Error('Product not found or not updated');
        return { id, name, price };
    },

    deleteProduct: async (id) => {
        const affectedRows = await ProductModel.delete(id);
        if (affectedRows === 0) throw new Error('Product not found or not deleted');
    }
};

module.exports = ProductService;
