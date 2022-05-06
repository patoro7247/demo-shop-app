const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../frontend/build', 'index.html')));


const PORT = process.env.PORT || 3001;

var products = require('./Products.js')


app.get('/products', (req, res) => {
    res.json(products.productList);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))