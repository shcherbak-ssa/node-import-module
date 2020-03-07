'use strict';

const path = require('path');
const configFilesGetter = require('../config-files/getter');

class ModuleFinder {
  findModule(configFilePath, moduleName) {
    const configFileExports = this._getConfigFileExports(configFilePath);
    const relativeModulePath = this._getRelativeModulePath(configFileExports, moduleName);
    const modulePath = this._createModulePath(configFilePath, relativeModulePath);
    return this._requireModule(modulePath);
  }

  _getConfigFileExports(configFilePath) {
    return configFilesGetter.getConfigFileExports(configFilePath);
  }
  _getRelativeModulePath(configFileExports, moduleName) {
    return configFileExports[moduleName];
  }
  _createModulePath(configFilePath, relativeModulePath) {
    const configFileDirname = path.dirname(configFilePath);
    return path.resolve(configFileDirname, relativeModulePath);
  }
  _requireModule(modulePath) {
    return require(modulePath);
  }
}

const moduleFinder = new ModuleFinder();
module.exports = moduleFinder;