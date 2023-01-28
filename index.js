const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./database')
const productRoute = require('./product/router');

const app = express();

app.use(cors())
app.use(bodyParser.json()) 


app.get('/', (req, res) => {
    res.json({
        "message": "Hallo, world!"
    })
})

app.use('/api', productRoute);

db.on('open', () => {
    app.listen(3001);
})


module.exports = app