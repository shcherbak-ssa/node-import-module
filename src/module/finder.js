'use strict';

const path = require('path');
const fs = require('fs');
const configFilesGetter = require('../config-files/getter');
const exceptions = require('../exceptions');

class ModuleFinder {
  findModule(configFilePath, moduleName) {
    const configFileExports = this._getConfigFileExports(configFilePath);
    const relativeModulePath = this._getRelativeModulePath(configFileExports, moduleName, configFilePath);
    const modulePath = this._createModulePath(configFilePath, relativeModulePath);

    this._checkIfModuleExists(modulePath, moduleName);
    return this._requireModule(modulePath);
  }

  _getConfigFileExports(configFilePath) {
    return configFilesGetter.getConfigFileExports(configFilePath);
  }

  /** @todo: need to fix count of parameters */
  _getRelativeModulePath(configFileExports, moduleName, configFilePath) {
    const relativeModulePath = configFileExports[moduleName];
    if( relativeModulePath === undefined )
      return exceptions.throwModuleNameFieldDidNotFind(moduleName, configFilePath);

    return relativeModulePath;
  }
  _createModulePath(configFilePath, relativeModulePath) {
    const configFileDirname = path.dirname(configFilePath);
    return path.resolve(configFileDirname, relativeModulePath);
  }
  _checkIfModuleExists(modulePath, moduleName) {
    if( !fs.existsSync(modulePath) ) 
      return exceptions.throwCannotResolveModulePath(moduleName, modulePath);
  }
  _requireModule(modulePath) {
    return require(modulePath);
  }
}

const moduleFinder = new ModuleFinder();
module.exports = moduleFinder;