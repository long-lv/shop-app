const express = require('express');
const router = express.Router();
router.use('/products',require('./products/product.router'))
router.use('/categories',require('./category/category.router'))
router.use('/brands',require('./brand/brand.router'))
module.exports = router;