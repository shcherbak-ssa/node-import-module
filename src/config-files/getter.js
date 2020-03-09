'use strict';

const {checkConfgiFileIDType, checkConfgiFileExportsType} = require('../check-types');
const exceptions = require('../exceptions');

class ConfigFilesGetter {
  getConfigFileID(configFilePath) {
    const configFile = this._requireConfigFile(configFilePath);
    this._existIDField(configFile, configFilePath);

    const configFileID = this._getID(configFile);
    checkConfgiFileIDType(configFileID, configFilePath);

    return configFileID;
  }
  getConfigFileExports(configFilePath) {
    const configFile = this._requireConfigFile(configFilePath);
    this._existExportsField(configFile, configFilePath);

    const configFileExports = this._getExports(configFile);
    checkConfgiFileExportsType(configFileExports, configFilePath);

    return configFileExports;
  }

  _requireConfigFile(configFilePath) {
    return require(configFilePath);
  }

  _existIDField(configFile, configFilePath) {
    if( 'id' in configFile ) return;
    else exceptions.throwIDFieldDidNotFind(configFilePath);
  }
  _existExportsField(configFile, configFilePath) {
    if( 'exports' in configFile ) return;
    else exceptions.throwExportsFieldDidNotFind(configFilePath);
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