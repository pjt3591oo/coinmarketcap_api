var express = require('express');
var router = express.Router();

let coin = require('./coin')

router.use('/coin', coin)

module.exports = router;
