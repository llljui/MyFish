var mysql      = require('mysql');
var connection = mysql.createConnection({
 	    host:"bdm261699285.my3w.com",
		user:"bdm261699285",
		password:"lxj90019001",
		database:"bdm261699285_db",
		port:"3306",
		insecureAuth: true
});
module.exports=connection;
/*connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});*/