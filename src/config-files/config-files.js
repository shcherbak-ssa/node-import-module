'use strict';

class ConfigFiles {
  constructor() {
    this._paths = new Map();
  }

  setPath(configFileID, configFilePath) {
    this._paths.set(configFileID, configFilePath);
  }
  getPath(configFileID) {
    return this._paths.get(configFileID);
  }
}

module.exports = ConfigFiles;