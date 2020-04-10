const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.get('/', userController.getMain);
router.post('/', userController.postMain);

module.exports = router;