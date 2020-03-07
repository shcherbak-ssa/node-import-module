'use strict';

const ConfigFilesFinder = require('./config-files/finder');
const ConfigFilesSetter = require('./config-files/setter');

class Launcher {
  init() {
    const configFiles = this._initConfigFiles();
    console.log('configFiles size:', configFiles._paths.size);
    console.log('configFiles keys:', configFiles._paths.keys());
    console.log('configFiles values:', configFiles._paths.values());
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