const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to the database
const dbPath = path.join(__dirname, '..', 'database', 'federation.db');
const db = new sqlite3.Database(dbPath);

// Create the modules table if it doesn't exist
db.serialize(() => {
    // Create table
    db.run(`
        CREATE TABLE IF NOT EXISTS modules (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            modules TEXT NOT NULL,
            url TEXT,
            enabled BOOLEAN DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Clear existing data
    db.run('DELETE FROM modules');

    // Insert sample module data
    const modules = [
        'remoteHeader',
        'remoteButton',
        'remoteButton2'
    ];

    const stmt = db.prepare('INSERT INTO modules (modules, url, enabled) VALUES (?, ?, ?)');

    modules.forEach(moduleName => {
        stmt.run(moduleName, `http://localhost:5001/assets/remoteEntry.js`, 1);
    });

    stmt.finalize();

    console.log('Database populated with modules:', modules);
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error('Error closing database:', err);
    } else {
        console.log('Database connection closed.');
    }
});