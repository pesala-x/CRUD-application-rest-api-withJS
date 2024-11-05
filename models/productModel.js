const db = require('../config/db');

const ProductModel = {
    findAll: async () => {
        const [rows] = await db.execute('SELECT * FROM products');
        return rows;
    },

    findById: async (id) => {
        const [rows] = await db.execute('SELECT * FROM products WHERE id = ?', [id]);
        return rows[0];
    },

    create: async (name, price) => {
        const [result] = await db.execute(
            'INSERT INTO products (name, price) VALUES (?, ?)',
            [name, price]
        );
        return { id: result.insertId, name, price };
    },

    update: async (id, name, price) => {
        const [result] = await db.execute(
            'UPDATE products SET name = ?, price = ? WHERE id = ?',
            [name, price, id]
        );
        return result.affectedRows;
    },

    delete: async (id) => {
        const [result] = await db.execute('DELETE FROM products WHERE id = ?', [id]);
        return result.affectedRows;
    }
};

module.exports = ProductModel;
