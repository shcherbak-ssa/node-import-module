'use strict';

class ExportsFiles {
  constructor() {
    this._paths = new Map();
  }

  hasPath(exportsFileID) {
    return this._paths.has(exportsFileID);
  }
  setPath(exportsFileID, exportsFilePath) {
    this._paths.set(exportsFileID, exportsFilePath);
  }
  getPath(exportsFileID) {
    return this._paths.get(exportsFileID);
  }
}

module.exports = ExportsFiles;