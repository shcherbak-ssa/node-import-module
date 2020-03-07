'use strict';

const ConfigFilesFinder = require('./config-files/finder');

class Launcher {
  init() {
    const configFiles = this._initConfigFiles();
  }

  _initConfigFiles() {
    const processDirname = this._getProcessDirname();
    const configFilesFinder = new ConfigFilesFinder();

    const foundPaths = configFilesFinder.findAllConfigFiles(processDirname);
    console.log('found paths:', foundPaths);
  }
  _getProcessDirname() {
    return process.cwd();
  }
}

module.exports = Launcher;