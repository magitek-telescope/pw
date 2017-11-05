module.exports = function (algorithm, salt, key) {
  const crypto = require('crypto')
  const cipher = crypto.createCipher(algorithm, salt)
  cipher.update(key, 'utf8', 'hex')
  return cipher.final('hex')
}
