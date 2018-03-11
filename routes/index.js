var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'epicLMS - Login' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'epicLMS - Signup' });
});

router.post('/signup', function(req, res){
  console.log(req.body);
  res.send("recieved your request!");
});

module.exports = router;
