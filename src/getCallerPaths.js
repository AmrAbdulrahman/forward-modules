const parsePaths = require('./parsePaths');

module.exports = () => {
  try {
    throw new Error('Just to get caller file path');
  } catch (ex) {
    return parsePaths(ex.stack);
  }
};
