var express = require('express');
var router = express.Router();

var data = require('../models/data');
// GET home page

router.get('/content', function (req, res, next) {
  res.render('content.ejs');
});

//POST data
router.post('/content', function (req, res, next) {

  var newData = new data();
  newData.Goi = req.body.list1;
  newData.Ngay = req.body.timeCheck1;
  newData.Noidung = req.body.nd2;
  newData.save(function (err, post) {
    if (err) {
      res.send(err);
    }
    else {
      res.json({"success":true});
    }
  })
});

//GET data
router.get(`/get-content?`, function (req, res, next) {

  data.find({ "Goi": req.query.code, "Ngay": new Date(req.query.date).toLocaleString() }).select('-_id ').sort({ creationDate: -1 }).exec(function (err, post) {
    if (err) {
      res.send(err);
    }
    else {
      res.json(post);
    }
  })

})
module.exports = router;
