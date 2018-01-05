const path = require('path');
const fs = require('fs');
const getCallerPaths = require('./src/getCallerPaths');

module.exports = (exclude = []) => {
  const { base, index } = getCallerPaths();

  return fs
    .readdirSync(base)
    .map(file => file.replace('.js', ''))
    .filter(file => file !== index && exclude.indexOf(file) === -1)
    .reduce((result, file) => {
      result[file] = require(path.join(base, file));
      return result;
    }, {});
};
