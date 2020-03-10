'use strict';

const path = require('path');
const fs = require('fs');
const exportsFilesGetter = require('../exports-files/getter');
const exceptions = require('../exceptions');

class ModuleFinder {
  findModule(exportsFilePath, moduleName) {
    const exportsFileExports = this._getExportsFileExports(exportsFilePath);
    const relativeModulePath = this._getRelativeModulePath(exportsFileExports, moduleName, exportsFilePath);
    const modulePath = this._createModulePath(exportsFilePath, relativeModulePath);

    this._checkIfModuleExists(modulePath, moduleName);
    return this._requireModule(modulePath);
  }

  _getExportsFileExports(exportsFilePath) {
    return exportsFilesGetter.getExportsFileExports(exportsFilePath);
  }

  /** @todo: need to fix count of parameters */
  _getRelativeModulePath(exportsFileExports, moduleName, exportsFilePath) {
    const relativeModulePath = exportsFileExports[moduleName];
    if( relativeModulePath === undefined )
      return exceptions.throwModuleNameFieldDidNotFind(moduleName, exportsFilePath);

    return relativeModulePath;
  }
  _createModulePath(exportsFilePath, relativeModulePath) {
    const exportsFileDirname = path.dirname(exportsFilePath);
    return path.resolve(exportsFileDirname, relativeModulePath);
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