const SignUp = require('../Repo/Signup')
const sha256 = require('crypto-js/sha256');
const { fun } = require('../utils/index')
var CryptoJS = require("crypto-js");
const crypto = require('crypto')
module.exports.SignUpservice = async (SignUpData) => {
    console.log('Inside  signup service')
    const { Name, Email, Password } = SignUpData;
    const message = Password;
    // const key = crypto.scryptSync(message, 'salt', 16);
    // const iv = crypto.randomBytes(16);
    // const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    // let encryptedText = cipher.update(message, 'utf-8', 'hex');
    // encryptedText += cipher.final('hex');
    // SignUpData.Password = encryptedText;
    // SignUpData.hash1 = iv.toString('hex');
    // SignUpData.key1 = key.toString('hex');
    // console.log(encryptedText);
    const salt = crypto.randomBytes(32).toString('hex');
    const data = fun(salt, Password);
    SignUpData.Password = data;
    SignUpData.salt = salt;
    const res = await SignUp.SignUpDB(SignUpData)
    console.log('sending data to controllers')

    return res;
}