const test = require('ava')
const cipher = require('../../lib/core/cipher')
const decipher = require('../../lib/core/decipher')

const algorithm = 'aes256'
const salt = ''

test('foo -> e192a4534db754fe92be5e7260427fb6', (t) => {
  const result = cipher(algorithm, salt, 'foo')
  t.is(result, 'e192a4534db754fe92be5e7260427fb6')
})

test('e192a4534db754fe92be5e7260427fb6 -> foo', (t) => {
  const result = decipher(algorithm, salt, 'e192a4534db754fe92be5e7260427fb6')
  t.is(result, 'foo')
})
