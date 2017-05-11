var mysql=require('mysql');
var connection= mysql.createConnection({
	host:"bdm261699285.my3w.com",
	user:"bdm261699285",
	password:"lxj90019001",
	insecureAuth: true,  
	database:"bdm261699285_db"

});
connection.connect();
connection.query('SELECT book_name FROM books limit 1,5', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  return results;
});
connection.end();