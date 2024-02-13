const crypto = require('crypto')
const fun = (salt, Password) => {
    var hash = crypto.createHash('sha256');
    const data = hash.update(Password + salt, 'hex').digest('hex');
    return data;
}
module.exports = { fun };