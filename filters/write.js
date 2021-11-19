fs = require('fs');

module.exports = (path, text) => {
  fs.writeFileSync(path, text);
  console.log(`filter 'write': ${text}`);
  return text;
};
