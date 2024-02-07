const express = require('express')
const Router = express.Router()
const SignUpController = require('../Controllers/signup')

Router.post('/', SignUpController.SignUp);
Router.get('/', (req, res) => {
    console.log('on singup page')
    res.send('on singup page')
})
module.exports = Router;