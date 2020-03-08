'use strict';

const path = require('path');
const Launcher = require('./src/launcher');

const launcher = new Launcher();
const parentDirname = path.dirname(module.parent.filename);
const moduleImporter = launcher.init(parentDirname);

function importModule(id, moduleName) {
  const configFileID = id;
  checkParameterTypes(configFileID, moduleName);

  return moduleImporter.importModule(configFileID, moduleName);
}

function checkParameterTypes(configFileID, moduleName) {
  if( typeof configFileID !== 'string' )
    throw new TypeError('id parameter must be a string');

  if( typeof moduleName !== 'string' )
    throw new TypeError('moduleName parameter must be a string');
}

module.exports = importModule;