const express = require('express');
const app = express();

const port = 3001;

app.get('/', (req, res) => {
    res.send('yoyo')
})

app.get('/studentResultID123', (req, res) => {
    res.send('kid1');
})

app.listen(port, () => console.log(`Listening on port ${port}!`))