var mysql = require('mysql');
var db = require('../db.json')
const connection = () => {
    return mysql.createConnection(
        db
    );
}
var conn = connection();
module.exports = conn;
// const Postquery=()=>{
//     'INSERT INTO users (UserName,Email,Password'
// }