const express = require('express')
const Router = express.Router()
const LoginController = require('../Controllers/login');

Router.post('/', LoginController.Login)
Router.get('/', (req, res) => {
    console.log('on Login page')
})
module.exports = Router;
