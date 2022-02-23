var express = require('express');
var dotenv = require('dotenv');
var router = express.Router();
var services = require('../../json-files/services.json');

dotenv.config();
console.log('Using parameters? ', process.env.WITH_PARAMETER);

if (process.env.WITH_PARAMETER==true){
  // With parameters in the URL
  router.get('/:p_action/:p_param1/:p_param2', function(req, res, next) {
    var d_date = new Date();
    console.log('Date: ', d_date);
    console.log('index ', d_date, ' Environment: ', process.env.ENVIRONMENT);
    console.log('index ', d_date, 'Param 1: ', req.params.p_param1, ' Param 2: ', req.params.p_param2);
  
    // Applying filter to the data according to parameter 1
    const serviceFilter = d => d.s_param1 === req.params.p_param1 && d.b_status === 1;
    const serviceData = services.filter(serviceFilter);
    const s_title = 'Vistula Holdings';
  
    // Update the column s_view_href with the url parameters  
    for (var i = 0; i < serviceData.length; i++) {
      serviceData[i].s_linkURL = serviceData[i].s_view_href + req.params.p_param1 + "/" + req.params.p_param2;
    }
  
    if (req.params.p_action === 'start'){
      var flag = false;
    } else {
      var flag = true;
      var toastMessage = '';
      var toastClass = '';

  
      switch(req.params.p_action) {
        case 'update':
          var toastMessage = 'SUCCESS, Data saved properly!';
          var toastClass = 'toast bg-success text-white fade show';
          break;
        case 'error':
          var toastMessage = 'ERROR, Data was not save! Please try once more.';
          var toastClass = 'toast bg-danger text-white fade show';
          break;
        case 'warning':
          var toastMessage = 'WARNING, No data was retrieve! Please try once more.';
          var toastClass = 'toast bg-warning text-white fade show';
          break;
        default:
          // code block
      }
      
    }
    res.render('index', { s_title: s_title, s_mainMenu: true, flag: flag, toastMessage: toastMessage, 
      environment: process.env.ENVIRONMENT, toastClass: toastClass, s_param1: req.params.p_param1, 
      s_param2: req.params.p_param2, s_image_logo:process.env.IMAGE_LOGO, serviceData: serviceData });
  });

} else {

  /* GET home page only with "start" parameter. */
  router.get('/:p_action/', function(req, res, next) {
    var d_date = new Date();
    console.log('Date: ', d_date);
    console.log('index ', d_date, ' Environment: ', process.env.ENVIRONMENT);

    // Applying filter to the data according to status
    const serviceFilter = d => d.b_status === 1;
    const serviceData = services.filter(serviceFilter);
    const s_title = 'Vistula Holdings';

    // Update the column s_view_href with data code  
    for (var i = 0; i < serviceData.length; i++) {
      serviceData[i].s_linkURL = serviceData[i].s_view_href + serviceData[i].s_code;
    }


    if (req.params.p_action === 'start'){
      var b_flag = false;
    } else {
      var b_flag = true;
      var toastMessage = '';
      var toastClass = '';

      switch(req.params.p_action) {
        case 'update':
          var toastMessage = 'SUCCESS, Data saved properly!';
          var toastClass = 'toast bg-success text-white fade show';
          break;
        case 'error':
          var toastMessage = 'ERROR, Data was not save! Please try once more.';
          var toastClass = 'toast bg-danger text-white fade show';
          break;
        case 'warning':
          var toastMessage = 'WARNING, No data was retrieve! Please try once more.';
          var toastClass = 'toast bg-warning text-white fade show';
          break;
        default:
          // code block
      }
      
    }
    res.render('index', { s_title: s_title, b_mainMenu: false, b_flag: b_flag, toastMessage: toastMessage, 
      environment: process.env.ENVIRONMENT, toastClass: toastClass, s_image_logo:process.env.IMAGE_LOGO,
      serviceData: serviceData });
  });

}

module.exports = router;
