'use strict';

const ConfigFiles = require('./config-files');
const configFilesGetter = require('./getter');

class ConfigFilesSetter {
  constructor() {
    this._configFiles = new ConfigFiles();
  }

  setConfigFilePaths(foundPaths) {
    foundPaths.forEach((configFilePath) => {
      const configFileID = this._getConfigFileID(configFilePath);
      this._saveConfigFile(configFileID, configFilePath);
    });
    
    return this._configFiles;
  }

  _getConfigFileID(configFilePath) {
    return configFilesGetter.getConfigFileID(configFilePath);
  }
  _setConfigFile(configFileID, configFilePath) {
    this._configFiles.setPath(configFileID, configFilePath);
  }
}

module.exports = ConfigFilesSetter;