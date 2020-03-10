'use strict';

const moduleFinder = require('./finder');
const exceptions = require('../exceptions');

class ModuleImporter {
  constructor(exportsFiles) {
    this._exportsFiles = exportsFiles;
  }

  importModule(exportsFileID, moduleName) {
    const exportsFilePath = this._getExportsFilePath(exportsFileID);
    return this._findModule(exportsFilePath, moduleName);
  }

  _getExportsFilePath(exportsFileID) {
    const exportsFilePath = this._exportsFiles.getPath(exportsFileID);
    if( exportsFilePath === undefined )
      return exceptions.throwIDDoesNotExist(exportsFileID);

    return exportsFilePath;
  }
  _findModule(exportsFilePath, moduleName) {
    return moduleFinder.findModule(exportsFilePath, moduleName);
  }
}

module.exports = ModuleImporter;