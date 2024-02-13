const express = require('express')
const Router = express.Router()
const getPdfDataController = require('../Controllers/getPdfData')
Router.get('/', getPdfDataController)
module.exports = Router