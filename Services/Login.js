const DB = require('../Repo/Login')
const crypto = require('crypto')
const { fun } = require('../utils/index')
const { Buffer } = require('buffer')
module.exports.Loginservice = async (loginData) => {
    console.log('Inside  Login service')
    const { Name, Email, Password } = loginData;
    console.log(loginData)
    const res = await DB.LoginDB(loginData)
    console.log('services');
    if (res != 'error') {
        // const key1 = res.key1;
        // console.log(res);
        // const newkey1 = Buffer.from(key1, 'hex');
        // console.log(newkey1);
        // const hash1 = res.hash1;
        // const newhash1 = Buffer.from(hash1, 'hex');
        // const dbpassword = res.Password;
        // const cipher = crypto.createCipheriv('aes-128-cbc', newkey1, newhash1);
        // let encryptedText = cipher.update(Password, 'utf-8', 'hex');
        // encryptedText += cipher.final('hex');
        const salt = res.salt;
        const dbPassword = res.Password;
        const encryptedPassword = fun(salt, Password)
        if (encryptedPassword === dbPassword) {
            return res;
        }
    }
    throw new Error('error in service');

}