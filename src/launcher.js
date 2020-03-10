'use strict';

const ModuleImporter = require('./module/importer');
const ExportsFilesFinder = require('./exports-files/finder');
const ExportsFilesSetter = require('./exports-files/setter');

class Launcher {
  init(parentDirname) {
    const exportsFiles = this._initNimFiles(parentDirname);
    return new ModuleImporter(exportsFiles);
  }

  _initNimFiles(parentDirname) {
    const exportsFilesFinder = new ExportsFilesFinder();
    const exportsFilesSetter = new ExportsFilesSetter();

    const foundPaths = exportsFilesFinder.findAllExportsFiles(parentDirname);
    const exportsFiles = exportsFilesSetter.setExportsFilePaths(foundPaths);
    return exportsFiles;
  }
}

module.exports = Launcher;