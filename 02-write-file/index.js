const { stdin, stdout } = process
const fs = require('fs')
const path = require('path')
const writeSt = fs.createWriteStream(path.join(__dirname, 'text.txt'))

stdout.write('Введите текст: ')
stdin.on('data', data => {
    if(data.toString().trim() === 'exit') process.exit();
    process.on('SIGINT', () => process.exit())
    writeSt.write(data)
})
process.on('exit', () => stdout.write('Ввод завершен!'))
