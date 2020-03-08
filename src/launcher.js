'use strict';

const ModuleImporter = require('./module/importer');
const ConfigFilesFinder = require('./config-files/finder');
const ConfigFilesSetter = require('./config-files/setter');

class Launcher {
  init(parentDirname) {
    const configFiles = this._initConfigFiles(parentDirname);
    return new ModuleImporter(configFiles);
  }

  _initConfigFiles(parentDirname) {
    const configFilesFinder = new ConfigFilesFinder();
    const configFilesSetter = new ConfigFilesSetter();

    const foundPaths = configFilesFinder.findAllConfigFiles(parentDirname);
    const configFiles = configFilesSetter.setConfigFilePaths(foundPaths);
    return configFiles;
  }
}

module.exports = Launcher;