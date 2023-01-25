const express = require('express');
const app = express();

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

app.listen(3000);

module.exports = app