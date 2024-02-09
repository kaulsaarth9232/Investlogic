const service = require('../Services/Login')
const sha256 = require('crypto-js/sha256');
const jwt = require('jsonwebtoken');
const secret = "this is a secret"
module.exports.Login = async (req, res) => {
    try {
        console.log('inside Login controller');
        const { Email, Password } = req.body;
        const LoginData = { Email, Password };
        if (Password.length < 6) {
            console.log('err');
            res.send('error');
        }
        const res1 = await service.Loginservice(LoginData)
        console.log(res1);
        const Name = res1.Name;
        const Id = res1.userId;
        const user = {
            Id: Id,
            Name: Name,
            Email: Email
        }
        const data = jwt.sign(user, secret, { expiresIn: '10s' });
        res.cookie('data', data, {
            path: '/',
            httpOnly: true,
            secure: false,
            SameSite: 'none'
        });
        const msg = `Hi ${res1.Name}`
        res.send(msg);
    }
    catch (e) {
        console.log(e);
        console.log('error in Login controller')
        res.send('error');
    }
}