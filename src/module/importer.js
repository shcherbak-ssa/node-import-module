'use strict';

const moduleFinder = require('./finder');
const exceptions = require('../exceptions');

class ModuleImporter {
  constructor(configFiles) {
    this._configFiles = configFiles;
  }

  importModule(configFileID, moduleName) {
    const configFilePath = this._getConfigFilePath(configFileID);
    return this._findModule(configFilePath, moduleName);
  }

  _getConfigFilePath(configFileID) {
    const configFilePath = this._configFiles.getPath(configFileID);
    
    if( configFilePath === undefined )
      return exceptions.throwIDDoesNotExist(configFileID);

    if( Array.isArray(configFilePath) )
      return exceptions.throwPathValueIsArray(configFileID, configFilePath);

    return configFilePath;
  }
  _findModule(configFilePath, moduleName) {
    return moduleFinder.findModule(configFilePath, moduleName);
  }
}

module.exports = ModuleImporter;