const express = require('express')
const Router = express.Router()
const logout = require('../Controllers/getdata')
Router.get('/', logout)
module.exports = Router;