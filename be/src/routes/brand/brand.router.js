'use strict'
const express = require("express");
const brandController = require("../../controllers/Brand.controller");
const router = express.Router();
router.get('/list', brandController.list);
router.get('/:id', brandController.findById);
router.post('/store', brandController.insert);
router.put('/update/:id', brandController.update);
router.delete('/delete/:id', brandController.delete);
module.exports = router;