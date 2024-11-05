const express = require('express');
const db = require('./db'); // Import the database connection

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON

// CREATE: Add a new product
app.post('/api/products', async (req, res) => {
    const { name, price } = req.body;
    try {
        const [result] = await db.execute(
            'INSERT INTO products (name, price) VALUES (?, ?)',
            [name, price]
        );
        res.status(201).json({ id: result.insertId, name, price });
    } catch (error) {
        res.status(500).json({ error: 'Error adding product' });
    }
});

// READ: Get all products
app.get('/api/products', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM products');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving products' });
    }
});

// READ: Get a single product by ID
app.get('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.execute('SELECT * FROM products WHERE id = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Product not found' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving product' });
    }
});

// UPDATE: Update a product by ID
app.put('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
        const [result] = await db.execute(
            'UPDATE products SET name = ?, price = ? WHERE id = ?',
            [name, price, id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Product not found' });
        res.json({ id, name, price });
    } catch (error) {
        res.status(500).json({ error: 'Error updating product' });
    }
});

// DELETE: Delete a product by ID
app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.execute('DELETE FROM products WHERE id = ?', [id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Product not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting product' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
