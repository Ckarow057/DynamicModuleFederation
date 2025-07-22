const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to the database
const dbPath = path.join(__dirname, '..', 'database', 'ModFed.db');
const db = new sqlite3.Database(dbPath);

// Create the remote_apps table if it doesn't exist
db.serialize(() => {
    // Create table
    db.run(`
        CREATE TABLE IF NOT EXISTS remote_apps (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url VARCHAR(500) NOT NULL,
            name VARCHAR(100) NOT NULL,
            module VARCHAR(200) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Clear existing data
    db.run('DELETE FROM remote_apps');

    // Insert sample remote app data
    const remoteApps = [
        {
            url: 'http://localhost:9000/assets/remoteEntry.js',
            name: 'remote-app-1',
            module: './remote1Root'
        }, {
            url: 'http://localhost:9001/assets/remoteEntry.js',
            name: 'remote-app-2',
            module: './remote2Root'
        }, {
            url: 'http://localhost:9002/assets/remoteEntry.js',
            name: 'remote-app-3',
            module: './remote3Root'
        }, {
            url: 'http://localhost:9003/assets/remoteEntry.js',
            name: 'remote-app-4',
            module: './remote4Root'
        },
        {
            url: 'http://localhost:9004/assets/remoteEntry.js',
            name: 'remote-app-5',
            module: './remote5Root'
        }
    ];

    const stmt = db.prepare('INSERT INTO remote_apps (url, name, module) VALUES (?, ?, ?)');

    remoteApps.forEach(app => {
        stmt.run(app.url, app.name, app.module);
    });

    stmt.finalize();

    console.log('Database populated with remote apps:', remoteApps);
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error('Error closing database:', err);
    } else {
        console.log('Database connection closed.');
    }
});