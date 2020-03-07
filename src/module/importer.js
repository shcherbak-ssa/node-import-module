'use strict';

const moduleFinder = require('./finder');

class ModuleImporter {
  constructor(configFiles) {
    this._configFiles = configFiles;
  }

  importModule(configFileID, moduleName) {
    const configFilePath = this._getConfigFilePath(configFileID);
    return this._findModule(configFilePath, moduleName);
  }

  _getConfigFilePath(configFileID) {
    return this._configFiles.getPath(configFileID);
  }
  _findModule(configFilePath, moduleName) {
    return moduleFinder.findModule(configFilePath, moduleName);
  }
}

module.exports = ModuleImporter;