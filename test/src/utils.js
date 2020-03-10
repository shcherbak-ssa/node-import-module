'use strict';

const struc = require('struc');
const del = require('del');

const TEMP_FILE_PATH = 'test/temp/';
const DELETE_PATTERN = ['test/temp/**'];

function createFileStructure(structure) {
  struc(TEMP_FILE_PATH, structure);
}
function deleteFileStructure() {
  del.sync(DELETE_PATTERN);
}

module.exports = {
  createFileStructure,
  deleteFileStructure
};