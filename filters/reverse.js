module.exports = (text) => {
  console.log(`before 'reverse': ${text}`);
  let reversed = '';
  reversed = text
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
  console.log(`filter 'reverse': ${reversed}`);
  return reversed;
};
