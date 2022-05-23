const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true}, (err, files) => {
    files.forEach(file => {
        if (file.isFile()){
            fs.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
                const name = file.name.slice(0, file.name.indexOf('.'))
                const size = stats.size
                const ext = path.extname(path.join(__dirname, file.name)).slice(1)
                console.log(`${name} - ${ext} - ${size}byte`);
            })
        }
    }); 
})

