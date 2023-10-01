//express.js
const express = require('express');
const app = express();

const PORT = 3005;

app.get('/', (req, res) => {
    res.send("Hello World\n");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})