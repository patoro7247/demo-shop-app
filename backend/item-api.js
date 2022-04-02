const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let items = [
    {
        name: "Red",
        imgSource: "/idk",
        price: 5,
    },
    {
        name: "Blue",
        imgSource: "/idk",
        price: 6,
    },
    {
        name: "Black",
        imgSource: "/idk",
        price: 7,
    },
    {
        name: "Yellow",
        imgSource: "/idk",
        price: 8,
    },
    {
        name: "Orange",
        imgSource: "/idk",
        price: 9,
    },
];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
app.get('/', (req, res) => {
    req.body = 
})
*/

app.get('/items', (req, res) => {
    //Should get items list and return json 
    res.json(items);

})


app.post('/item', (req, res) => {
    const item = req.body;

    console.log(item);
    items.push(item);

    res.send('Book added to the database');
});

app.listen(port, () => console.log(`Hello app listening on port ${port}`))