const express = require('express');
const app = express();

// Define a fake route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
