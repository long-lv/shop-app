const express = require("express");
const productController = require("../../controllers/Product.controller");
const router = express.Router();
router.get('/list', productController.list);
router.get('/:id', productController.findById);
router.post('/store', productController.insert);
router.put('/update/:id', productController.update);
router.delete('/delete/:id', productController.delete);
module.exports = router;