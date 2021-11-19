fs = require('fs')

module.exports = (path, text) => {
    fs.appendFile(path, text, (err, data) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.log(`filter 'write': ${data}`);
        return data;
    });
}

