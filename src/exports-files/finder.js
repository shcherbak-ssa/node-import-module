'use strict';

const path = require('path');
const {readdirSync} = require('readdir-enhanced');

const EXPORTS_FILE_PATTERN = '**/*.exports.js';

class ExportsFilesFinder {

  findAllExportsFiles(parentDirname) {
    const foundPaths = this._find(parentDirname);
    return this._join(foundPaths, parentDirname);
  }

  _find(parentDirname) {
    return readdirSync(parentDirname, {
      deep: true,
      filter: EXPORTS_FILE_PATTERN
    });
  }
  _join(foundPaths, parentDirname) {
    return foundPaths.map((item) => path.join(parentDirname, item));
  }
}

module.exports = ExportsFilesFinder;