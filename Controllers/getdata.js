const jwt = require('jsonwebtoken');
const secret = "this is a secret"
const logout = (req, res) => {
    const temp = req.cookies.data;
    console.log('hello')
    console.log(temp)
    jwt.verify(req.cookies.data, secret, (err, authorizedData) => {
        if (err) {
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            res.send('logout')
        } else {
            //If token is successfully verified, we can send the autorized data 
            res.json({
                message: 'Successful log in',
            });
            console.log('SUCCESS: Connected to protected route');
        }
    })
}
module.exports = logout