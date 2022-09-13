const express = require('express');
const chirpsRouter = require('./routes');

let router = express.Router();

router.use('/chirps', chirpsRouter);

module.exports = router;