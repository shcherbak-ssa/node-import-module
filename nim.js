'use strict';

const path = require('path');
const Launcher = require('./src/launcher');
const {checkParameterTypes} = require('./src/check-types');

const launcher = new Launcher();
const parentDirname = path.dirname(module.parent.filename);
const moduleImporter = launcher.init(parentDirname);

function importModule(configFileID, moduleName) {
  checkParameterTypes(configFileID, moduleName);
  return moduleImporter.importModule(configFileID, moduleName);
}

module.exports = importModule;