const express = require('express')
const Router = express.Router()
const getdatacontroller = require('../Controllers/getdata')
Router.get('/', getdatacontroller);
module.exports = Router;