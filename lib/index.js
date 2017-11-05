function main([_, __, mode, key]) {
  if (!key) {
    console.log('key is empty.')
    return 1
  }

  if (!mode) {
    console.log('[ERROR] mode accepts only set or get.')
    return 1
  }

  const fs = require('fs')
  const path = require('path')
  const algorithm = 'aes256'
  const cipher = require('./core/cipher')
  const decipher = require('./core/decipher')
  let salt = ''

  try {
    salt = fs.readFileSync(path.join(process.env.HOME, './.ssh/id_rsa'), 'utf-8')
  } catch (e) {
    console.log(`Can't read ~/.ssh/id_rsa.`)
    return 1
  }

  switch (mode) {
    case 'set': {
      console.log(cipher(algorithm, salt, key))
      return
    }

    case 'get': {
      console.log(decipher(algorithm, salt, key))
      return
    }
  }
}

module.exports = main
