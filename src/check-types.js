'use strict';

const kindOf = require('kind-of');

function checkParameterTypes(configFileID, moduleName) {
  if( kindOf(configFileID) !== 'string' )
    throw new TypeError('id parameter must be a string');

  if( kindOf(moduleName) !== 'string' )
    throw new TypeError('moduleName parameter must be a string');
}
function checkConfgiFileIDType(configFileID, configFilePath) {
  if( kindOf(configFileID) !== 'string' )
    throw new TypeError(`id field must be a string {\n  path: ${configFilePath}\n}`)
}
function checkConfgiFileExportsType(configFileExports, configFilePath) {
  if( kindOf(configFileExports) !== 'object' )
    throw new TypeError(`exports field must be an object {\n  path: ${configFilePath}\n}`)
}

module.exports = {
  checkParameterTypes,
  checkConfgiFileIDType,
  checkConfgiFileExportsType
};