var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log('666');
	res.render('user_info');
});
module.exports = router;
