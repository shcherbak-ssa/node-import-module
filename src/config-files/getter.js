'use strict';

const {
  checkConfgiFileIDType,
  checkConfgiFileExportsType
} = require('../check-types');

class ConfigFilesGetter {
  getConfigFileID(configFilePath) {
    const configFile = this._requireConfigFile(configFilePath);
    const configFileID = this._getID(configFile);

    checkConfgiFileIDType(configFileID, configFilePath);
    return configFileID;
  }
  getConfigFileExports(configFilePath) {
    const configFile = this._requireConfigFile(configFilePath);
    const configFileExports = this._getExports(configFile);

    checkConfgiFileExportsType(configFileExports, configFilePath);
    return configFileExports;
  }

  _requireConfigFile(configFilePath) {
    return require(configFilePath);
  }
  _getID(configFile) {
    return configFile.id;
  }
  _getExports(configFile) {
    return configFile.exports
  }
}

const configFilesGetter = new ConfigFilesGetter();
module.exports = configFilesGetter;