var fs = require('fs');
const getPdfController = (req, res) => {
    console.log('Inside getPdfController')
    //const data = fs.readFileSync('/Users/sandeep/Desktop/kaul.js', { encoding: 'utf8', flag: 'r' })
    fs.readdir('/Users/sandeep/Desktop/project-2', (err, files) => {
        res.send(files)
    })
}
module.exports = getPdfController