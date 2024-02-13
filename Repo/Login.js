const database = require('../DB/db');

module.exports.LoginDB = async (loginData) => {
    return new Promise((res, rej) => {
        console.log('Inside Login Db')
        const { Email, Password } = loginData;
        database.query(`SELECT * FROM user WHERE Email=? `, [Email, Password], (err, rows, fields) => {
            if (err) {
                console.log(err);
                rej(err)
            }
            else {
                console.log('data added')
                if (rows.length) {
                    res(rows[0])
                }
                else {
                    rej(err);
                }

            }
        })
    })
}