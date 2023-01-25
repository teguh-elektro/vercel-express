const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.json()) 

app.get('/', (req, res) => {
    res.json({
        "message": "Hallo, world!"
    })
})

app.get('/products', (req, res) => {
    res.json({
        "products": [
            {
                "name": "candy",
                "price": 1,
                "quantity": 100
            }
        ]
    })
})

app.post('/product', (req, res) => {
    const body = req.body
    console.log(body);
    res.json(body)
})

app.listen(3000);

module.exports = app