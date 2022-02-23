const { json } = require('body-parser');
var express = require('express');
var dotenv = require('dotenv');

var router = express.Router();

var b_query = false;
var b_view = false;
var d_dateFrom = '';
var d_dateTo = '';

/* GET report page. */
router.get('/:p_action', function(req, res, next) {
    dotenv.config();

    var d_date = new Date().toISOString().slice(0, 10);
    if (req.params.p_action == 'view'){
        b_view = true;
        b_query = false;
    }
    res.render('report-form', { s_title: 'Vistula Holdings', s_image_logo:process.env.IMAGE_LOGO, d_dateFrom: d_date, 
      b_view: b_view, b_query: b_query, d_date: d_date, environment: process.env.ENVIRONMENT, d_dateTo: d_date, });
  });

/* POST report page. */
router.post('/:p_action', function(req, res, next) {
  dotenv.config();
  if (req.params.p_action == 'query'){
      b_view = false;
      b_query = true;
  }
  res.render('report-form', { s_title: 'Vistula Holdings', s_image_logo:process.env.IMAGE_LOGO, b_view: b_view, b_query: b_query});
});

module.exports = router;
