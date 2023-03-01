var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let iconSet = ["⭐","🤖","🍉"];
  let icon = iconSet[Math.floor(Math.random() * 3)]
  res.render('index', { title: 'DWPCII-2023A', icon });
});

router.get('/author', (req, res)=>{
  // Creating a View-Model
  let author = {
    "name": "Ivan",
    "lastname": "Rivalcoba",
    "twitter": "@rivalcoba",
    "job": "ITGAM"
  };
  // Sending the view-model to be rendered by a View
  res.render('author', author);

});

module.exports = router;
