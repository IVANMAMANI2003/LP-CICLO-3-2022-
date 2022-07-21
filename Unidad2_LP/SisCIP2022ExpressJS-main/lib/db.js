var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	port: 3307,
	user:'root',
	password:'',
	database:'pruebas'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;
