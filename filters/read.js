fs = require('fs');

module.exports = (path) => {
  let data = fs.readFileSync(path, 'utf8');
  console.log(`filter 'read': ${data}`);
  return data;
};
