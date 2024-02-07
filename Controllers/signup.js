const service = require('../Services/Signup')
const { obj } = require('../constants/constant');
module.exports.SignUp = async (req, res) => {
    try {
        console.log('inside signup controller');
        const { Email, Name, Password } = req.body;
        const SignUpData = { Email, Name, Password };
        if (Password.length < 6) {
            console.log('err');
            return res.send({
                success: false,
                message: 'Invalid Password'
            })
        }
        for (let i = 2; i < 4; i++) {
            if (obj[i].test(Name)) {
                return res.send({
                    success: false,
                    message: 'Invalid Name',
                })
            }
        }
        for (let i = 0; i < 3; i++) {
            if (!obj[i].test(Password)) {
                return res.send({
                    success: false,
                    message: 'Invalid Password',
                })
            }
        }
        const res1 = await service.SignUpservice(SignUpData)
        console.log('sending data to Frontend');
        if (res1 === 'error') {
            return res.send({
                success: false,
                message: 'User Not Found',
                res1: {},

            });
        }
        else if (res1 === 'Exists') {
            return res.send({
                success: false,
                message: 'User Already Exists',
                res1: {},

            });
        }
        else {
            return res.send({
                success: true,
                message: 'Signup Succesfull',
                res1: {},

            });
        }
    }
    catch (e) {
        console.log(e);
        console.log('error in signup controller')
        res.send({
            success: false,
            message: 'Wrong Password',
            res1: {},
        });
    }
}