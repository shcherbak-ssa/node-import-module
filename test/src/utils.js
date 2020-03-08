'use strict';

const fs = require('fs');
const path = require('path');
const struc = require('struc');
const del = require('del');

const TEMP_FILE_PATH = 'test/temp/';
const DELETE_PATTERN = ['test/temp/**'];

/** File paths */
function createFullPath(...paths) {
  return path.join(...paths);
}
function setTestConfigFilePaths(dirname, config) {
  const {user: userConfigFilePath, project: projectConfigFilePath} = config.configFiles;
  config.configFiles.user = createFullPath(dirname, 'temp', userConfigFilePath);
  config.configFiles.project = createFullPath(dirname, 'temp', projectConfigFilePath);
}

/** File structure */
function createFileStructure(structure) {
  struc(TEMP_FILE_PATH, structure);
}
function deleteFileStructure() {
  del.sync(DELETE_PATTERN);
}

/** File content */
function getFileContent(content) {
  return `'use strict';\nmodule.exports = '${content}';`;
}
function getExportsFileContent(name) {
  const exportsFileName = `${name}-exports.js`;
  const exportsFilePath = path.join(__dirname, 'files', exportsFileName);
  return fs.readFileSync(exportsFilePath, {encoding: 'utf-8'});
}

module.exports = {
  setTestConfigFilePaths,
  createFileStructure,
  deleteFileStructure,
  getFileContent,
  getExportsFileContent
};