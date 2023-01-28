const router = require('express').Router();

const productController = require('./controller');

router.get('/products', productController.index);

module.exports = router;