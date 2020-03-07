'use strict';

class ConfigFilesGetter {
  getConfigFileID(configFilePath) {
    const configFile = this._requireConfigFile(configFilePath);
    return this._getID(configFile);
  }
  getConfigFileExports(configFilePath) {
    const configFile = this._requireConfigFile(configFilePath);
    return this._getExports(configFile);
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