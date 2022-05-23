const fs = require('fs')
const path = require('path')
const readSt = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8')
readSt.on('data', data => console.log(data))