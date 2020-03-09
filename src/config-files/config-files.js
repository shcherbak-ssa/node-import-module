'use strict';

class ConfigFiles {
  constructor() {
    this._paths = new Map();
  }

  hasPath(configFileID) {
    return this._paths.has(configFileID);
  }
  setPath(configFileID, configFilePath) {
    this._paths.set(configFileID, configFilePath);
  }
  getPath(configFileID) {
    return this._paths.get(configFileID);
  }
}

module.exports = ConfigFiles;