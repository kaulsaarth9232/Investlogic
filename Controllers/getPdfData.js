const path = require('path')
const getPdfDataController = (req, res) => {
    console.log('inside pdf ')
    res.attachment(path.resolve())
}
module.exports = getPdfDataController