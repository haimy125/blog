const express = require('express');
const router = express.Router();

const newsController = require('../app/controller/NewsController');
newsController.index;

module.exports = router;