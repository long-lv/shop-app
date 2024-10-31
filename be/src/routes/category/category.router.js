'use strict'
const express = require("express");
const categoryController = require("../../controllers/Category.controller");
const { asyncHandle } = require("../../middeware");
const router = express.Router();
router.get('/list', asyncHandle(categoryController.list));
router.get('/:id', categoryController.findById);
router.post('/store', asyncHandle(categoryController.insert));
router.put('/update/:id', categoryController.update);
router.delete('/delete/:id', categoryController.delete);
module.exports = router;