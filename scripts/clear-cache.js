const fs = require('fs');
fs.rm('./node_modules/.cache', {recursive: true}, (err) => {
    if (err){
        console.log(err.message);
    }
    else {
        console.log('Кэш удалён');
    }
})
