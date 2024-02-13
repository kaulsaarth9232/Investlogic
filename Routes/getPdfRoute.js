const express = require('express')
const Router = express.Router()
const getPdfController = require('../Controllers/getPdf')
Router.get('/', getPdfController);
module.exports = Router;