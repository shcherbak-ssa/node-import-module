'use strict';

const ModuleImporter = require('./module/importer');
const ConfigFilesFinder = require('./config-files/finder');
const ConfigFilesSetter = require('./config-files/setter');

class Launcher {
  init() {
    const configFiles = this._initConfigFiles();
    return new ModuleImporter(configFiles);
  }

  _initConfigFiles() {
    const processDirname = this._getProcessDirname();
    const configFilesFinder = new ConfigFilesFinder();
    const configFilesSetter = new ConfigFilesSetter();

    const foundPaths = configFilesFinder.findAllConfigFiles(processDirname);
    const configFiles = configFilesSetter.setConfigFilePaths(foundPaths);
    return configFiles;
  }
  _getProcessDirname() {
    return process.cwd();
  }
}

module.exports = Launcher;