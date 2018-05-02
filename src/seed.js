const { con } = require('./main');

const sql = "INSERT INTO Customer (id, Name, Address, Town) VALUES (1, 'Kieran', 'Highway 37', 'Closter')";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});