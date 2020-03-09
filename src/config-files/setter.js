'use strict';

const ConfigFiles = require('./config-files');
const configFilesGetter = require('./getter');
const exceptions = require('../exceptions');

class ConfigFilesSetter {
  constructor() {
    this._configFiles = new ConfigFiles();
  }

  setConfigFilePaths(foundPaths) {
    foundPaths.forEach((configFilePath) => {
      const configFileID = this._getConfigFileID(configFilePath);
      this._setConfigFile(configFileID, configFilePath);
    });

    return this._configFiles;
  }

  _getConfigFileID(configFilePath) {
    return configFilesGetter.getConfigFileID(configFilePath);
  }
  _setConfigFile(configFileID, configFilePath) {
    if( this._configFiles.hasPath(configFileID) )
      this._throwMoreThanOneConfigFileWithSameID(configFileID, configFilePath);
  
    this._configFiles.setPath(configFileID, configFilePath);
  }
  _throwMoreThanOneConfigFileWithSameID(configFileID, configFilePath) {
    const existConfigFilePath = this._configFiles.getPath(configFileID);
    const paths = [existConfigFilePath, configFilePath];
    exceptions.throwMoreThanOneConfigFileWithSameID(configFileID, paths); 
  }
}

module.exports = ConfigFilesSetter;