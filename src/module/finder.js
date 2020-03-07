'use strict';

const path = require('path');
const configFilesGetter = require('../config-files/getter');
const exceptions = require('../exceptions');

class ModuleFinder {
  findModule(configFilePath, moduleName) {
    const configFileExports = this._getConfigFileExports(configFilePath);
    const relativeModulePath = this._getRelativeModulePath(configFileExports, moduleName, configFilePath);
    const modulePath = this._createModulePath(configFilePath, relativeModulePath);
    return this._requireModule(modulePath);
  }

  _getConfigFileExports(configFilePath) {
    const configFileExports = configFilesGetter.getConfigFileExports(configFilePath);
    if( configFileExports === undefined )
      return exceptions.throwExportsFieldDidNotFind(configFilePath);

    return configFileExports;
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
  _requireModule(modulePath) {
    return require(modulePath);
  }
}

const moduleFinder = new ModuleFinder();
module.exports = moduleFinder;