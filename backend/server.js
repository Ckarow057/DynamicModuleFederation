const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'X-JSON'],
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

// Parse JSON bodies
app.use(express.json());

// Connect to SQLite database (creates file if it doesn't exist)
const db = new sqlite3.Database('../database/ModFed.db', (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to SQLite database');
    }
});

app.get('/', (req, res) => {
    res.send('Hello from your Node.js backend!');
});

// Example route to fetch data from a table called 'modules'
app.get('/all', (req, res) => {
    db.all('SELECT url, name, module FROM remote_apps ', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ rows });
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});