const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        "message": "Hallo, world!"
    })
})

app.listen(3000);

module.exports = app