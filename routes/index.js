var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

  var json = require("../page.json");

  res.render('index', { page: json });
});

module.exports = router;
