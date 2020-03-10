'use strict';

const {checkExportsFileIDType, checkExportsFileExportsType} = require('../check-types');
const exceptions = require('../exceptions');

class ExportsFilesGetter {
  getExportsFileID(exportsFilePath) {
    const exportsFile = this._requireExportsFile(exportsFilePath);
    this._existIDField(exportsFile, exportsFilePath);

    const exportsFileID = this._getID(exportsFile);
    checkExportsFileIDType(exportsFileID, exportsFilePath);

    if( exportsFileID === '' ) exceptions.throwIDFieldIsEmpty(exportsFilePath);
    return exportsFileID;
  }
  getExportsFileExports(exportsFilePath) {
    const exportsFile = this._requireExportsFile(exportsFilePath);
    this._existExportsField(exportsFile, exportsFilePath);

    const exportsFileExports = this._getExports(exportsFile);
    checkExportsFileExportsType(exportsFileExports, exportsFilePath);

    return exportsFileExports;
  }

  _requireExportsFile(exportsFilePath) {
    return require(exportsFilePath);
  }

  _existIDField(exportsFile, exportsFilePath) {
    if( 'id' in exportsFile ) return;
    else exceptions.throwIDFieldDidNotFind(exportsFilePath);
  }
  _existExportsField(exportsFile, exportsFilePath) {
    if( 'exports' in exportsFile ) return;
    else exceptions.throwExportsFieldDidNotFind(exportsFilePath);
  }

  _getID(exportsFile) {
    return exportsFile.id; 
  }
  _getExports(exportsFile) {
    return exportsFile.exports
  }
}

const exportsFilesGetter = new ExportsFilesGetter();
module.exports = exportsFilesGetter;