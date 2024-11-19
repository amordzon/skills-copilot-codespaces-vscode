// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the public folder to serve static files
app.use(express.static('public'));

// Use the ejs template engine
app.set('view engine', 'ejs');

// Listen on port 3000
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});