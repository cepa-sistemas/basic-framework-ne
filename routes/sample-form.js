var express = require('express');
var dotenv = require('dotenv');
var router = express.Router();

/* GET search page. */
router.post('/:p_code', function(req, res, next) {
  dotenv.config();
  var flag = true;
  var toastMessage = '';
  var toastClass = '';

  res.render('sample-form', { s_title: 'Vistula Holdings', flag: flag, 
  toastMessage: toastMessage, toastClass: toastClass, s_image_logo:process.env.IMAGE_LOGO });
});

/* GET search page. */
router.get('/:p_action', function(req, res, next) {
  dotenv.config();
  var flag = true;
  var toastMessage = '';
  var toastClass = '';

  res.render('sample-form', { s_title: 'Vistula Holdings', flag: flag, 
  toastMessage: toastMessage, toastClass: toastClass, s_image_logo:process.env.IMAGE_LOGO });
});

module.exports = router;
