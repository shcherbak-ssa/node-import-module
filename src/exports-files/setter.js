'use strict';

const ExportsFiles = require('./exports-files');
const exportsFilesGetter = require('./getter');
const exceptions = require('../exceptions');

class ExportsFilesSetter {
  constructor() {
    this._exportsFiles = new ExportsFiles();
  }

  setExportsFilePaths(foundPaths) {
    foundPaths.forEach((exportsFilePath) => {
      const exportsFileID = this._getExportsFileID(exportsFilePath);
      this._setExportsFile(exportsFileID, exportsFilePath);
    });

    return this._exportsFiles;
  }

  _getExportsFileID(exportsFilePath) {
    return exportsFilesGetter.getExportsFileID(exportsFilePath);
  }
  _setExportsFile(exportsFileID, exportsFilePath) {
    if( this._exportsFiles.hasPath(exportsFileID) )
      this._throwMoreThanOneExportsFileWithSameID(exportsFileID, exportsFilePath);
  
    this._exportsFiles.setPath(exportsFileID, exportsFilePath);
  }
  _throwMoreThanOneExportsFileWithSameID(exportsFileID, exportsFilePath) {
    const existingexportsFilePath = this._exportsFiles.getPath(exportsFileID);
    const paths = [existingexportsFilePath, exportsFilePath];
    exceptions.throwMoreThanOneExportsFileWithSameID(exportsFileID, paths); 
  }
}

module.exports = ExportsFilesSetter;