fs = require('fs');

module.exports = (path) => {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            return err;
        }
        console.log(`filter 'read': ${data}`);
        return data;
    });
}