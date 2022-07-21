var mysql = require('mysql');
var connection = mysql.createConnection({
	multipleStatements: true,
	host:'localhost',
	port: 3307,
	user:'root',
	password:'',
	database:'proyecto2022'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;
