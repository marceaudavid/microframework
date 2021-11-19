module.exports = (text) => {
  console.log(`before 'capitalize': ${text}`);
  let capitalizedText = text.toUpperCase();
  console.log(`filter 'capitalize': ${capitalizedText}`);
  return capitalizedText;
};
