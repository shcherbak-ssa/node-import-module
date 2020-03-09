'use strict';

const {dirname, join} = require('path');
const struc = require('struc');
const del = require('del');

const TEST_DIRNAME = dirname(__dirname);
const TEMP_FILE_PATH = 'test/temp/';
const DELETE_PATTERN = ['test/temp/**'];

function createExpectFilePath(component) {
  return join(
    TEST_DIRNAME,
    'temp',
    'components',
    component,
    `${component}.nim.js`
  );
}

function createFileStructure(structure) {
  struc(TEMP_FILE_PATH, structure);
}
function deleteFileStructure() {
  del.sync(DELETE_PATTERN);
}

module.exports = {
  createExpectFilePath,
  createFileStructure,
  deleteFileStructure
};