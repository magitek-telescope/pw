module.exports = function (algorithm, salt, key) {
  const crypto = require('crypto')
  const decipher = crypto.createDecipher(algorithm, salt)
  decipher.update(key, 'hex', 'utf8')
  return decipher.final('utf8')
}
