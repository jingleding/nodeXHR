var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/ajaxGet', function (req, res, next) {
  var data = {
    success: true,
    data: '成功哦！'
  }
  res.json(data);
});
router.post('/ajaxPost', function (req, res, next) {
  console.log("11111111");
  console.dir(req.body);
  res.header('Content-type', 'application/x-www-form-urlencoded')
  var data = {
    success: true,
    data: 'post成功哦！'
  }
  res.send(data);
});
module.exports = router;
