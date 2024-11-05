const ProductService = require('../services/productService');

const ProductController = {
    getAllProducts: async (req, res) => {
        try {
            const products = await ProductService.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getProductById: async (req, res) => {
        try {
            const product = await ProductService.getProductById(req.params.id);
            res.json(product);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    },

    createProduct: async (req, res) => {
        try {
            const { name, price } = req.body;
            const newProduct = await ProductService.createProduct(name, price);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, price } = req.body;
            const updatedProduct = await ProductService.updateProduct(id, name, price);
            res.json(updatedProduct);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            await ProductService.deleteProduct(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
};

module.exports = ProductController;
