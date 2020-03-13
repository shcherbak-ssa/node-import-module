'use strict';

const path = require('path');
const Launcher = require('./src/launcher');
const moduleImporterProxyHandler = require('./src/module/proxy');

const {
  checkExportsFileIDParameterType,
  checkModuleNameParameterType
} = require('./src/check-types');

const launcher = new Launcher();
const parentDirname = path.dirname(module.parent.filename);
const moduleImporter = launcher.init(parentDirname);

/**
 * @param {String} exportsFileID 
 * @param {String} moduleName 
 */
function importModule(exportsFileID, moduleName) {
  if( moduleName === undefined ) {
    moduleName = exportsFileID;
    return importGlobalModule(moduleName);
  }

  return importRequiredModule(exportsFileID, moduleName)
}

function importGlobalModule(moduleName) {
  checkModuleNameParameterType(moduleName);
  return moduleImporter.importModule('$', moduleName);
}
function importRequiredModule(exportsFileID, moduleName) {
  checkExportsFileIDParameterType(exportsFileID);
  checkModuleNameParameterType(moduleName);
  return moduleImporter.importModule(exportsFileID, moduleName);
}

importModule.importer = moduleImporter;
importModule = new Proxy(importModule, moduleImporterProxyHandler);

module.exports = importModule;