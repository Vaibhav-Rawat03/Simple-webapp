const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to greet the user
app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    const greeting = `Hello, ${name}!`;
    res.json({ greeting });
});

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
