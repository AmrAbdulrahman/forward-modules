module.exports = (stack) => {
  try {
    const callerRowIndex = 3;
    const callerLine = stack.split('\n')[callerRowIndex];

    // get the (path:row:col) out of the stack line
    let callerPath = callerLine.match(/\([\/\-\.\:\w\s\\\*]*\)/ig)[0];

    // remove surrounding braces
    callerPath = callerPath.replace(/[\(\)]*/ig, '');

    // remove :row:col suffix
    callerPath = callerPath.replace(/:[\d]+:[\d]+/ig, '');

    // split on last slash into 'base' and 'fileName'
    const lastSlashIndex = callerPath.lastIndexOf('/');

    return {
      base: callerPath.substr(0, lastSlashIndex),
      index: callerPath.substr(lastSlashIndex + 1).replace('.js', ''),
    };
  } catch (ex) {
    throw new Error(`Can't parse basePath`);
  }
}
