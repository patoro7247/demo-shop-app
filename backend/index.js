const express = require('express');
const app = express();

const port = 3001;

var products = require('./Products.js')

app.get('/', (req, res) => {
    res.send('yoyo')
})

app.get('/products', (req, res) => {
    res.json(products.productList);
})

app.listen(port, () => console.log(`Listening on port ${port}!`))