'use strict';

const path = require('path');
const globby = require('globby');

const CONFIG_FILE_PATTERN = ['**.nim.json'];

class ConfigFilesFinder {

  findAllConfigFiles(processDirname) {
    const foundPaths = this._find();
    return this._join(foundPaths, processDirname);
  }

  _find() {
    return globby.sync(CONFIG_FILE_PATTERN, {
      expandDirectories: true,
      gitignore: true
    });
  }
  _join(foundPaths, processDirname) {
    return foundPaths.map((item) => path.join(processDirname, item));
  }
}

module.exports = ConfigFilesFinder;