const crypto = require('crypto')
const fs = require('fs')
const path = require('path')
const [_, __, mode, key] = process.argv
const algorithm = 'aes256'

const salt = fs.readFileSync(path.join(process.env.HOME, './.ssh/id_rsa'), 'utf-8')

switch (mode) {
  case 'set': {
    const cipher = crypto.createCipher(algorithm, salt)
    cipher.update(key, 'utf8', 'hex')
    console.log(cipher.final('hex'))
    break;
  }

  case 'get':
    const decipher = crypto.createDecipher(algorithm, salt)
    decipher.update(key, 'hex', 'utf8')
    console.log(decipher.final('utf8'))
    break;
}
