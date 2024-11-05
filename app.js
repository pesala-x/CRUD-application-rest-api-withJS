const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

app.use(express.json()); // Parse JSON bodies
app.use('/api', productRoutes); // Prefix routes with '/api'

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
