'use strict';

class ConfigFilesSetter {
  setConfigFilePaths(foundPaths) {
    foundPaths.forEach((configFilePath) => {
      const configFileID = this._getConfigFileID(configFilePath);
      this._saveConfigFile(configFileID, configFilePath);
    });
  }

  _getConfigFileID(configFilePath) {}
  _saveConfigFile(configFileID, configFilePath) {}
}

module.exports = ConfigFilesSetter;