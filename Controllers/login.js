const service = require('../Services/Login')
const sha256 = require('crypto-js/sha256');
module.exports.Login = async (req, res, next) => {
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
        const msg = `Hi ${res1.Name}`
        res.send(msg);
    }
    catch (e) {
        console.log(e);
        console.log('error in Login controller')
        res.send('error');
    }
}