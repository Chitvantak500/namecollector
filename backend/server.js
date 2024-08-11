const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'namecollector',
    password: 'Chitvan',
    port: 5432,
});

app.post('/add-name', async (req, res) => {
    const { name } = req.body;

    try {
        const result = await pool.query('INSERT INTO names (name) VALUES ($1) RETURNING *', [name]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Failed to insert name' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

