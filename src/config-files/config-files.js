'use strict';

class ConfigFiles {
  constructor() {
    this._paths = new Map();
  }

  setPath(configFileID, configFilePath) {
    if( configFileID === undefined ) return;
    
    if( this._paths.has(configFileID) ) {
      let paths = this._paths.get(configFileID);
      if( !Array.isArray(paths) ) paths = [paths];

      configFilePath = [configFilePath, ...paths];
    }

    this._paths.set(configFileID, configFilePath);
  }
  getPath(configFileID) {
    return this._paths.get(configFileID);
  }
}

module.exports = ConfigFiles;