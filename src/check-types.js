'use strict';

function checkParameterTypes(configFileID, moduleName) {
  if( typeof configFileID !== 'string' )
    throw new TypeError('id parameter must be a string');

  if( typeof moduleName !== 'string' )
    throw new TypeError('moduleName parameter must be a string');
}

module.exports = checkParameterTypes;