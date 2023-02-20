var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let iconSet = ["⭐","🤖","🍉"];
  let icon = iconSet[Math.floor(Math.random() * 3)]
  res.render('index', { title: 'DWPCII-2023A', icon });
});

module.exports = router;
