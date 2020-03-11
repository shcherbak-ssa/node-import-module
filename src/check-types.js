'use strict';

const kindOf = require('kind-of');

function checkExportsFileIDParameterType(exportsFileID) {
  if( kindOf(exportsFileID) !== 'string' )
    throwTypeError('exportsFileID parameter must be a string');
}
function checkModuleNameParameterType(moduleName) {
  if( kindOf(moduleName) !== 'string' )
    throwTypeError('moduleName parameter must be a string');
}
function checkExportsFileIDType(exportsFileID, exportsFilePath) {
  if( kindOf(exportsFileID) !== 'string' )
    throwTypeError(`id field must be a string {\n  path: ${exportsFilePath}\n}`)
}
function checkExportsFileExportsType(exportsFileExports, exportsFilePath) {
  if( kindOf(exportsFileExports) !== 'object' )
    throwTypeError(`exports field must be an object {\n  path: ${exportsFilePath}\n}`)
}

function throwTypeError(message) {
  throw new TypeError(message);
}

module.exports = {
  checkExportsFileIDParameterType,
  checkModuleNameParameterType,
  checkExportsFileIDType,
  checkExportsFileExportsType
};