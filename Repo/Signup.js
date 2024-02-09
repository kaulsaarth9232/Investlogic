const database = require('../DB/db');

module.exports.SignUpDB = async (SignUpdata) => {
    return new Promise((res, rej) => {
        console.log('Inside signup Db')
        const { Name, Email, Password, salt } = SignUpdata;

        database.query('SELECT * FROM user WHERE  Email=?', [Email], (err, rows, fields) => {
            if (err) {
                console.log('error in query');
                rej('error');
            }
            else if (rows.length > 0) {
                res('Exists')
            }
            else {
                database.query(`INSERT INTO user(NAME ,Email,Password,salt) values ('${Name}','${Email}','${Password}','${salt}')`, (err, results) => {
                    if (err) {
                        console.log(err);
                        rej('error')
                    }
                    else {
                        console.log('data added')
                        res(results);
                    }
                })
            }
        })
    })
}