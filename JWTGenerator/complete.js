'use strict'

const colors = require('colors')

console.log('Welcome to our JWT generator!'.underline.green)

console.log('\nStep 1: Set up our Header'.blue.underline)

let header = {
	alg: 'HS256',
	typ: 'JWT'
}

console.log('\nOur ' + 'alg'.yellow + ' (signing algorithm) claim is ' + header.alg.yellow)
console.log('Our ' + 'typ'.green + ' (token type) claim is ' + header.typ.green)

console.log('\nOur header is turned into a JSON string:')

header = JSON.stringify(header)

console.log(header.magenta)

console.log('\nThen, we Base64 encode it:')

header = new Buffer(header).toString('base64')

console.log(header.rainbow)

console.log('Our header is now ' + 'complete!'.underline + '\n\n')

console.log('Step 2: Set up our Payload'.blue.underline)

console.log('\nWe have two keys in our payload:\nthe ' + 'name'.yellow + ' claim is set to ' + args.name.yellow )
console.log('the sub'.green + ' claim is set to ' + '1234567890'.green)

let payload = {
	sub: 1234567890,
	name: 'nodebotanist'
}

console.log('\nOur payload is turned into a JSON string:')

payload = JSON.stringify(payload)

console.log(payload.magenta)

console.log('\nThen, we Base64 encode it, too:')

payload = new Buffer(payload).toString('base64')

console.log(payload.rainbow)

console.log('Our Payload is now ' + 'complete!'.underline + '\n\n')

console.log('Step 3: Create our Key'.blue.underline + '\n')
console.log('Step 3a: Put the Key together by concatenating the Header, a ., and the Payload:'.blue.underline);

let key = header + '.' + payload;

console.log(key.magenta + '\n');

console.log('Step 3b: Sign the key with our secret!'.blue.underline)

const crypto = require('crypto')
const hmac = crypto.createHmac('sha256', 'nyancat')

hmac.update(key)
key = hmac.digest('base64')

console.log(key.rainbow)
console.log('Our key is now ' + 'complete!'.underline + '\n\n');

console.log('Step 4: Putting it all Together\n')

console.log('Now, we juse take the Header, the Payload, and the Key, and concatenate them with . in between!')

let token = header.green + '.' + payload.magenta + '.' + key.cyan
console.log(token);

console.log('\n\nYOU DID IT! YOU MADE A JSON TOKEN!'.rainbow.bold.underline)