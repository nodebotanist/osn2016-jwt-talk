'use strict'

const colors= require('colors')
const crypto= require('crypto')

let header = {
	typ: 'jwt',
	alg: 'HS256'
}

header = JSON.stringify(header);

console.log('Here is my header: ' + header);

header = new Buffer(header).toString('base64');

console.log('Base64 encoded header: ' + header.red)

let payload = {
	iat: Date.now(),
	exp: Date.now() + 36000,
	admin: true,
	username: 'nodebotanist'
}

payload = JSON.stringify(payload)

console.log('Our payload is: ' + payload)

payload = new Buffer(payload).toString('base64')

console.log('Encoded payload is: ' + payload.red)

const hmac = crypto.createHmac('sha256', 'nyancat')

let key = header + '.' + payload

hmac.update(key)

key = hmac.digest('base64')

console.log('Base64 encoded, signed key: ' + key.rainbow)

let token = header + '.' + payload + '.' + key

console.log('Our JWT: ' + token.green)
















