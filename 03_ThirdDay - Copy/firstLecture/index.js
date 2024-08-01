const express = require('express')
const app = express()

const port = 3000;

app.listen(port, () => {
    console.log(`Listen port  , ${port}`);
});

app.get('/', (req, res) => {
    res.send('GET request printed');
});


app.get('/about', (req, res) => {
    res.send('GET request to about');
});
