const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DBPASSWORD,
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const sql = "INSERT INTO Customer (id, Name, Address, Town) VALUES (1, 'Kieran', 'Highway 37', 'Closter')";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});






