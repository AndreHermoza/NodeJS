const express = require('express');
const app = express();
const path = require('path');
const PORT = 2009;
const ip = '54.221.65.213';



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  // Asegúrate de que esta línea esté correcta
});

app.listen(PORT, () => {
    console.log(`Server running at http://${ip}:${PORT}`);
});