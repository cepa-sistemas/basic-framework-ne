var express = require('express');
var router = express.Router();
var dotenv = require('dotenv');

/* GET search page. */
router.post('/', function(req, res, next) {
  dotenv.config();
  var flag = true;
  var toastMessage = '';
  var toastClass = '';

  res.render('search-form', { s_title: 'Vistula Holdings', flag: flag, toastMessage: toastMessage, toastClass: toastClass, 
  p_whatIsSearching: req.body.searchText, s_image_logo:process.env.IMAGE_LOGO });
});

module.exports = router;
